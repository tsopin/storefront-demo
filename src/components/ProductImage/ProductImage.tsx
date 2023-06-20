import React, {useState, useMemo} from 'react';
import {
  Image,
  ImageStyle,
  ImageSourcePropType,
  ActivityIndicator,
  View,
  StyleSheet,
} from 'react-native';

interface Props {
  uri?: string;
  style?: ImageStyle;
  accessibilityLabel?: string;
}

export const ProductImage = ({uri, style, accessibilityLabel}: Props) => {
  const [loaded, setLoaded] = useState(false);

  const imageSource: ImageSourcePropType = useMemo(() => {
    return uri ? {uri} : require('../../assets/images/productPlaceholder.png');
  }, [uri]);

  const handleLoadEnd = () => {
    setLoaded(true);
  };

  return (
    <>
      <Image
        accessibilityLabel={accessibilityLabel}
        source={imageSource}
        style={style}
        onLoad={handleLoadEnd}
      />
      {!loaded && uri && (
        <View style={[style, styles.loadingContainer]}>
          <ActivityIndicator animating={true} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
