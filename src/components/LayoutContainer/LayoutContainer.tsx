import {ErrorStatePlaceholder} from 'components/ErrorStatePlaceholder';
import React, {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Palette} from 'styles/colors';
import {Inset, InsetValues} from 'styles/utilities';

type SafeAreaInsets = 'TOP' | 'BOTTOM' | 'ALL';

interface LayoutContainerProps extends PropsWithChildren<any> {
  safeAreaInsets?: SafeAreaInsets;
  inset?: Inset;
  backgroundColor?: string;
  scrollable?: boolean;
  loading?: boolean;
  error?: string;
}

export const LayoutContainer = ({
  backgroundColor = Palette.Background,
  children,
  safeAreaInsets,
  inset = 'small',
  scrollable,
  loading,
  error,
}: LayoutContainerProps) => {
  const {bottom, top} = useSafeAreaInsets();

  const getSafeAreaValue = () => {
    switch (safeAreaInsets) {
      case 'TOP':
        return {paddingTop: top};
      case 'BOTTOM':
        return {paddingBottom: bottom};
      case 'ALL':
        return {paddingTop: top, paddingBottom: bottom};
      default:
        return {};
    }
  };

  const containerStyle: StyleProp<ViewStyle> = {
    flex: 1,
    backgroundColor,
    paddingHorizontal: InsetValues[inset],
    ...getSafeAreaValue(),
  };

  if (loading) {
    return (
      <View style={[{backgroundColor}, styles.loadingContainer]}>
        <ActivityIndicator animating={true} testID="loading-indicator" />
      </View>
    );
  }

  if (error) {
    return <ErrorStatePlaceholder message={error} />;
  }

  return (
    <View style={containerStyle}>
      {scrollable ? (
        <ScrollView
          testID="scrollable-container"
          scrollEnabled={scrollable}
          contentContainerStyle={styles.scrollViewContent}>
          {children}
        </ScrollView>
      ) : (
        <View testID="non-scrollable-container" style={styles.container}>
          {children}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
