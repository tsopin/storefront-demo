import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {typography} from 'styles/typography';
import {Spacing, InsetValues} from 'styles/utilities';
import {formatPrice} from 'utilities/utilities';
import {ProductNode} from 'services/graphql/types';

interface Props {
  product?: ProductNode;
}

export const ProductInfoSection = ({product}: Props) => {
  const {title, variants, description} = product || {};
  const price = variants?.nodes[0]?.price || '0';

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <Text style={styles.price}>{formatPrice(price)}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: InsetValues.small,
    marginTop: Spacing.Large,
  },
  title: {
    ...typography.title,
    marginBottom: Spacing.Small,
  },
  price: {
    ...typography.title3,
    fontWeight: 'bold',
    marginBottom: Spacing.Small,
  },
  description: {
    ...typography.body,
  },
});
