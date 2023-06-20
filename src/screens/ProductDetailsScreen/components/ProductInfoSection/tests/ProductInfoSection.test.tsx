import React from 'react';
import {render} from '@testing-library/react-native';
import {ProductNode} from 'services/graphql/types';
import {ProductInfoSection} from '../ProductInfoSection';

jest.mock('react-native-gesture-handler', () => {
  const {View} = require('react-native');
  return {
    GestureHandlerRootView: View,
  };
});

describe('ProductInfoSection', () => {
  const mockProduct: ProductNode = {
    id: '1',
    title: 'Mock Product',
    description: 'This is a mock product',
    variants: {
      nodes: [{id: '1', price: '10'}],
    },
  };

  it('renders with a product', () => {
    const {getByText} = render(<ProductInfoSection product={mockProduct} />);

    expect(getByText('Mock Product')).toBeTruthy();
    expect(getByText('$10.00')).toBeTruthy();
    expect(getByText('This is a mock product')).toBeTruthy();
  });

  it('renders without a product', () => {
    const {queryByText} = render(<ProductInfoSection />);

    expect(queryByText('Mock Product')).toBeNull();
    expect(queryByText('$10.00')).toBeNull();
    expect(queryByText('This is a mock product')).toBeNull();
  });
});
