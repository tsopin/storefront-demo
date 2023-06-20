import React from 'react';
import {render, waitFor, fireEvent} from '@testing-library/react-native';
import {ProductListScreen} from '../ProductListScreen';
import * as customHooks from '../hooks/useProducts';
import {ApolloError} from '@apollo/client';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {mockProducts} from './mockProducts';

jest.mock('@react-navigation/native');
jest.mock('../hooks/useProducts');

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
    setOptions: jest.fn(),
  }),
  useRoute: () => ({
    params: {collectionId: '1'},
  }),
}));

jest.mock('react-native-safe-area-context', () => {
  const inset = {top: 0, right: 0, bottom: 0, left: 0};
  return {
    SafeAreaProvider: jest.fn().mockImplementation(({children}) => children),
    SafeAreaConsumer: jest
      .fn()
      .mockImplementation(({children}) => children(inset)),
    SafeAreaView: jest.fn().mockImplementation(({children}) => children),
    useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
  };
});

const renderWithSafeArea = () =>
  render(
    <SafeAreaProvider>
      <ProductListScreen />
    </SafeAreaProvider>,
  );

describe('ProductListScreen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays error message when there is an error', async () => {
    jest.spyOn(customHooks, 'useProducts').mockReturnValue({
      title: 'Collection 1',
      products: [],
      loading: false,
      error: new Error('Error fetching products') as ApolloError,
    });

    const {getByText} = renderWithSafeArea();

    await waitFor(() =>
      expect(getByText('Error fetching products')).toBeTruthy(),
    );
  });

  it('displays empty state when there are no products', async () => {
    jest.spyOn(customHooks, 'useProducts').mockReturnValue({
      title: 'Collection 1',
      products: [],
      loading: false,
      error: undefined,
    });

    const {getByText} = renderWithSafeArea();

    await waitFor(() =>
      expect(
        getByText('No available products found in this collection'),
      ).toBeTruthy(),
    );
  });

  it('displays product list and navigates on press', async () => {
    const product = mockProducts[0];

    jest.spyOn(customHooks, 'useProducts').mockReturnValue({
      title: 'Collection 1',
      products: mockProducts,
      loading: false,
      error: undefined,
    });

    const {getByText} = renderWithSafeArea();
    await waitFor(() => expect(getByText('Test Product 1')).toBeTruthy());

    fireEvent.press(getByText('Test Product 1'));
    expect(mockNavigate).toHaveBeenCalledWith('Product', {
      screen: 'ProductDetailsScreen',
      params: {productId: product.id},
    });
  });
});
