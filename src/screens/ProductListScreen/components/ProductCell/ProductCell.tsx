import React from 'react';
import {Text, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {ProductImage} from 'components/ProductImage/ProductImage';
import {formatPrice} from 'utilities/utilities';
import {CornerRadius, Spacing} from 'styles/utilities';
import {typography} from 'styles/typography';
import {Palette} from 'styles/colors';
import {ProductNode} from 'services/graphql/types';
import {getProductImageUrl} from 'services/graphql/utilities/utilities';

interface Props {
  product: ProductNode;
  onPress: () => void;
}

export const ProductCell = ({product, onPress}: Props) => {
  const {title, images, variants} = product;
  const imageUrl = getProductImageUrl(images);
  const price = variants?.nodes[0].price ?? 0;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.container}>
      <ProductImage uri={imageUrl} style={styles.imageStyle} />
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.price}>{formatPrice(price)}</Text>
    </TouchableOpacity>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.Small,
    width: width / 2.3,
  },
  imageStyle: {
    height: width / 2,
    width: '100%',
    borderRadius: CornerRadius.small,
    resizeMode: 'cover',
  },
  title: {
    ...typography.small,
    fontWeight: 'bold',
    paddingTop: Spacing.Small,
  },
  priceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  price: {
    ...typography.callout,
    color: Palette.TextPrimary,
    paddingTop: Spacing.HalfPoint,
  },
});
