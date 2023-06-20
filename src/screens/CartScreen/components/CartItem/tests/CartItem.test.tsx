import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {CartItem} from '../CartItem';
import {AddProductParams} from 'state/slices';

const mockProduct1: AddProductParams = {
  imageUrl: 'https://mockurl.com/image1.png',
  productId: 'p1',
  variantId: 'v1',
  quantity: 3,
  title: 'Product 1',
  price: '12.99',
};

describe('CartItem', () => {
  const mockOnQuantityChange = jest.fn();

  it('renders content', () => {
    const {getByText} = render(
      <CartItem item={mockProduct1} onQuantityChange={mockOnQuantityChange} />,
    );

    expect(getByText('Product 1')).toBeTruthy();
    expect(getByText('$12.99')).toBeTruthy();
  });

  it('calls onQuantityChange with 0 when remove button is pressed', () => {
    const {getByText} = render(
      <CartItem item={mockProduct1} onQuantityChange={mockOnQuantityChange} />,
    );
    const removeButton = getByText('Remove');
    fireEvent.press(removeButton);
    expect(mockOnQuantityChange).toHaveBeenCalledWith(0);
  });
});
