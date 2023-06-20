import React from 'react';
import {render, waitFor, fireEvent} from '@testing-library/react-native';
import {ProductDetailsScreen} from '../ProductDetailsScreen';
import * as customHooks from '../hooks/useProductDetails';
import {ApolloError} from '@apollo/client';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {Store, configureStore} from '@reduxjs/toolkit';
import {RootState} from 'state/store';
import {rootReducer} from 'state/reducer';
import {addToCart} from 'state/slices';
import {mockProduct} from './mocks';

jest.mock('@react-navigation/native');
jest.mock('../hooks/useProductDetails');

const mockNavigate = jest.fn();
const mockGoBack = jest.fn();
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
    setOptions: jest.fn(),
    goBack: mockGoBack,
  }),
  useRoute: () => ({
    params: {productId: '1'},
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

const renderWithProviders = (
  component: React.ReactElement,
  {
    store = configureStore({
      reducer: {
        cart: rootReducer,
      },
    }),
  }: {initialState?: RootState; store?: Store<RootState>} = {},
) => {
  return {
    ...render(
      <Provider store={store}>
        <SafeAreaProvider>{component}</SafeAreaProvider>
      </Provider>,
    ),
    store,
  };
};

describe('ProductDetailsScreen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays error message when there is an error', async () => {
    jest.spyOn(customHooks, 'useProductDetails').mockReturnValue({
      product: mockProduct,
      loading: false,
      error: new Error('Error fetching product') as ApolloError,
    });

    const {getByText} = renderWithProviders(<ProductDetailsScreen />);

    await waitFor(() =>
      expect(getByText('Error fetching product')).toBeTruthy(),
    );
  });

  it('shows a loading state', () => {
    jest.spyOn(customHooks, 'useProductDetails').mockReturnValue({
      product: undefined,
      loading: true,
      error: undefined,
    });

    const {getByTestId} = renderWithProviders(<ProductDetailsScreen />);

    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('shows product details and responds to add to cart button', async () => {
    jest.spyOn(customHooks, 'useProductDetails').mockReturnValue({
      product: mockProduct,
      loading: false,
      error: undefined,
    });

    const {getByText} = renderWithProviders(<ProductDetailsScreen />);

    expect(getByText('Product 1')).toBeTruthy();

    const addToCartButton = getByText('Add to cart');

    expect(addToCartButton).toBeTruthy();

    fireEvent.press(addToCartButton);

    const expectedAction = addToCart({
      title: 'Product 1',
      variantId: 'variant1',
      productId: '1',
      quantity: 1,
      price: '10',
      imageUrl: 'image1.jpg',
    });

    expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    expect(mockGoBack).toHaveBeenCalled();
  });
});
