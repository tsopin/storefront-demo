import React from 'react';
import {render} from '@testing-library/react-native';
import {productEdges} from './mocks';
import {ProductCell} from '../ProductCell';

describe('ProductCell', () => {
  it('renders', () => {
    const mockProduct = productEdges[0].node;

    const {getByText} = render(
      <ProductCell product={mockProduct} onPress={() => {}} />,
    );

    const titleElement = getByText('Product 1');
    expect(titleElement).toBeTruthy();
  });
});
