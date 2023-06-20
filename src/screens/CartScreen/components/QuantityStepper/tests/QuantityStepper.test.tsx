import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {QuantityStepper} from '../QuantityStepper';

describe('<QuantityStepper />', () => {
  it('increments and decrements the value when the + and - buttons are pressed', () => {
    const onValueChange = jest.fn();

    const {getByText} = render(
      <QuantityStepper value={5} onValueChange={onValueChange} />,
    );

    fireEvent.press(getByText('+'));
    expect(onValueChange).toHaveBeenCalledWith(6);

    fireEvent.press(getByText('-'));
    expect(onValueChange).toHaveBeenCalledWith(4);
  });

  it('does not decrement below the minimum value', () => {
    const onValueChange = jest.fn();

    const {getByText} = render(
      <QuantityStepper value={0} onValueChange={onValueChange} />,
    );

    fireEvent.press(getByText('-'));
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('does not increment above the maximum value', () => {
    const onValueChange = jest.fn();

    const {getByText} = render(
      <QuantityStepper value={100} onValueChange={onValueChange} />,
    );

    fireEvent.press(getByText('+'));
    expect(onValueChange).not.toHaveBeenCalled();
  });
});
