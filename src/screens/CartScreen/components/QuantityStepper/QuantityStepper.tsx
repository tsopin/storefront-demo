import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {CornerRadius, Spacing} from 'styles/utilities';
import {typography} from 'styles/typography';

interface Props {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onValueChange: (value: number) => void;
}

export const QuantityStepper = ({
  value,
  min = 0,
  max = 100,
  step = 1,
  onValueChange,
}: Props) => {
  const handleIncrement = useCallback(
    () => onValueChange(value + step),
    [onValueChange, step, value],
  );
  const handleDecrement = useCallback(
    () => onValueChange(value - step),
    [onValueChange, step, value],
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID="stepper-increment-button"
        style={styles.button}
        onPress={handleDecrement}
        disabled={value <= min}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{value}</Text>
      <TouchableOpacity
        testID="stepper-decrement-button"
        style={styles.button}
        onPress={handleIncrement}
        disabled={value >= max}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 24,
    height: 24,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: CornerRadius.small,
  },
  buttonText: {
    ...typography.button,
  },
  quantityText: {
    marginHorizontal: Spacing.HalfPoint,
    fontSize: 16,
    fontWeight: 'bold',
    width: 30,
    textAlign: 'center',
  },
});
