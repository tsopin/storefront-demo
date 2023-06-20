import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {configureStore, Store} from '@reduxjs/toolkit';
import {CartScreen} from '../CartScreen';

import {RootState} from 'state/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {rootReducer} from 'state/reducer';
import {changeQuantity} from 'state/slices';
import {mockProducts} from './mocks';
import {Alert} from 'react-native';

jest.spyOn(Alert, 'alert');

jest.mock('react-native/Libraries/Alert/Alert', () => {
  return {
    alert: jest.fn(),
  };
});
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
    goBack: mockGoBack,
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

describe('CartScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('displays empty state if no items in cart', () => {
    const {getByText} = renderWithProviders(<CartScreen />, {
      initialState: {cart: {cart: {items: [], total: 0}}},
    });
    expect(getByText('Your cart is empty')).toBeTruthy();
  });

  it('shows cart items and responds to increment button', async () => {
    const {getByText, getByTestId, store} = renderWithProviders(<CartScreen />);

    act(() => {
      store.dispatch({
        type: 'cart/addToCart',
        payload: mockProducts[0],
      });
    });

    expect(getByText('Test Product 1')).toBeTruthy();
    const incrementButton = getByTestId('stepper-increment-button');
    expect(incrementButton).toBeTruthy();
    fireEvent.press(incrementButton);

    const expectedAction = changeQuantity({
      variantId: 'variant1',
      quantity: 1,
    });

    expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
  });
});
