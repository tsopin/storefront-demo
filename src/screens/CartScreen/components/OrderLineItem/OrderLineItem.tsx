import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {typography} from 'styles/typography';
import {Spacing} from 'styles/utilities';
import {Palette} from 'styles/colors';
import {formatPrice} from 'utilities/utilities';

interface Props {
  title: string;
  value: number;
  isTotal?: boolean;
}

export const OrderLineItem = ({title, value, isTotal}: Props) => {
  const textStyle = [
    isTotal ? typography.title3 : typography.body,
    {color: Palette.TextPrimary},
  ];

  return (
    <View
      style={[
        styles.container,
        {marginVertical: isTotal ? Spacing.Medium : Spacing.HalfPoint},
      ]}>
      <Text style={textStyle}>{title}</Text>
      <Text style={textStyle}>{formatPrice(value)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: Spacing.HalfPoint,
  },
});
