import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {AddProductParams} from 'state/slices';
import {ProductImage} from 'components/ProductImage';
import {typography} from 'styles/typography';
import {Palette} from 'styles/colors';
import {CornerRadius, Spacing, borderWidth} from 'styles/utilities';
import {QuantityStepper} from '../QuantityStepper/QuantityStepper';
import {formatPrice} from 'utilities/utilities';

interface Props {
  item: AddProductParams;
  onQuantityChange: (value: number) => void;
}

export const CartItem = ({
  item: {title, imageUrl, price, quantity},
  onQuantityChange,
}: Props) => {
  return (
    <View style={styles.container}>
      <ProductImage style={styles.image} uri={imageUrl} />
      <View style={styles.infoContainer}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.priceText}>{formatPrice(price)}</Text>
      </View>
      <View style={styles.controlsContainer}>
        <QuantityStepper value={quantity} onValueChange={onQuantityChange} />
        <Button
          testID="remove-item-button"
          title="Remove"
          color={'red'}
          onPress={() => onQuantityChange(0)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: Spacing.Medium,
    marginBottom: Spacing.Medium,
    flexDirection: 'row',
    borderBottomColor: Palette.Border,
    borderBottomWidth: borderWidth('thin'),
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: CornerRadius.small,
    overflow: 'hidden',
    marginRight: Spacing.Small,
  },
  infoContainer: {
    flex: 1,
    marginRight: Spacing.Medium,
  },
  text: {
    ...typography.small,
    color: Palette.TextPrimary,
    paddingBottom: Spacing.HalfPoint,
  },
  priceText: {
    ...typography.callout,
    color: Palette.TextPrimary,
  },
  controlsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
