import React, {useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {typography} from 'styles/typography';
import {OrderLineItem} from '../OrderLineItem/OrderLineItem';
import {Spacing} from 'styles/utilities';

const TAX_RATE = 0.13;

interface Props {
  total: number;
}

export const SummarySection = ({total}: Props) => {
  const tax = useMemo(() => total * TAX_RATE, [total]);
  const orderTotal = useMemo(() => total + tax, [total, tax]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order summary</Text>
      <View style={styles.summaryContainer}>
        <OrderLineItem title="Subtotal" value={total} />
        <OrderLineItem title="Tax" value={tax} />
        <OrderLineItem isTotal title="Total" value={orderTotal} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    ...typography.title3,
  },
  summaryContainer: {
    flex: 1,
    marginTop: Spacing.Medium,
  },
});
