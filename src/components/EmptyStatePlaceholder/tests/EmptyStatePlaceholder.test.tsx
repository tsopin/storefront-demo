import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {EmptyStatePlaceholder, EmptyStateType} from '../EmptyStatePlaceholder';

describe('<EmptyStatePlaceholder />', () => {
  it('renders for COLLECTIONS type', () => {
    const {getByText} = render(
      <EmptyStatePlaceholder type={EmptyStateType.COLLECTIONS} />,
    );

    expect(getByText('There are no collections available')).toBeDefined();
    expect(getByText('Check again later')).toBeDefined();
  });

  it('renders for PRODUCTS type', () => {
    const {getByText} = render(
      <EmptyStatePlaceholder type={EmptyStateType.PRODUCTS} />,
    );

    expect(getByText('Oops :(')).toBeDefined();
    expect(
      getByText('No available products found in this collection'),
    ).toBeDefined();
  });

  it('renders for CART type', () => {
    const {getByText} = render(
      <EmptyStatePlaceholder type={EmptyStateType.CART} />,
    );

    expect(getByText('Your cart is empty')).toBeDefined();
    expect(getByText('Start shopping')).toBeDefined();
  });

  it('calls onPress when the subtitle is pressed', () => {
    const onPress = jest.fn();
    const {getByText} = render(
      <EmptyStatePlaceholder type={EmptyStateType.CART} onPress={onPress} />,
    );

    fireEvent.press(getByText('Start shopping'));

    expect(onPress).toHaveBeenCalled();
  });
});
