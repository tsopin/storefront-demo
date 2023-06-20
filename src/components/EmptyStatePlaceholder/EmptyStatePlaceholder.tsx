import React, {useMemo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {typography} from 'styles/typography';
import {Palette} from 'styles/colors';
import {Spacing} from 'styles/utilities';

export enum EmptyStateType {
  COLLECTIONS = 'COLLECTIONS',
  PRODUCTS = 'PRODUCTS',
  CART = 'CART',
}

interface Props {
  type: EmptyStateType;
  onPress?: () => void;
}

export const EmptyStatePlaceholder = ({type, onPress}: Props) => {
  const emptyStateData = useMemo(() => {
    let title = '';
    let subtitle = '';
    let imageSource: any = null;

    switch (type) {
      case EmptyStateType.COLLECTIONS:
        title = 'There are no collections available';
        subtitle = 'Check again later';
        imageSource = require('../../assets/icons/collections.png');
        break;
      case EmptyStateType.PRODUCTS:
        title = 'Oops :(';
        subtitle = 'No available products found in this collection';
        imageSource = require('../../assets/icons/search.png');
        break;
      case EmptyStateType.CART:
        title = 'Your cart is empty';
        subtitle = 'Start shopping';
        imageSource = require('../../assets/icons/cart.png');
        break;
      default:
        break;
    }

    return {title, subtitle, imageSource};
  }, [type]);

  return (
    <View style={styles.container}>
      <Image source={emptyStateData.imageSource} style={styles.image} />
      <Text style={styles.title}>{emptyStateData.title}</Text>
      <TouchableOpacity
        disabled={!onPress}
        activeOpacity={0.6}
        onPress={onPress}>
        <Text style={styles.subtitle}>{emptyStateData.subtitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    ...typography.title3,
    color: Palette.TextPrimary,
    marginVertical: Spacing.Small,
  },
  subtitle: {
    ...typography.body,
    textAlign: 'center',
    marginBottom: Spacing.Large,
    color: Palette.TextSecondary,
    marginHorizontal: Spacing.Medium,
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
});
