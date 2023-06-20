import React from 'react';
import {render, waitFor, fireEvent} from '@testing-library/react-native';
import {CollectionListScreen} from '../CollectionListScreen';
import * as customHooks from '../hooks/useCollections';
import {ApolloError} from '@apollo/client';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {mockCollections} from './mockCollections';

jest.mock('@react-navigation/native');
jest.mock('../hooks/useCollections');

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
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
      <CollectionListScreen />
    </SafeAreaProvider>,
  );

describe('CollectionListScreen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays error message when there is an error', async () => {
    jest.spyOn(customHooks, 'useCollections').mockReturnValue({
      collections: [],
      loading: false,
      error: new Error('Error fetching collections') as ApolloError,
    });

    const {getByText} = renderWithSafeArea();

    await waitFor(() =>
      expect(getByText('Error fetching collections')).toBeTruthy(),
    );
  });

  it('displays empty state when there are no collections', async () => {
    jest.spyOn(customHooks, 'useCollections').mockReturnValue({
      collections: [],
      loading: false,
      error: undefined,
    });

    const {getByText} = renderWithSafeArea();

    await waitFor(() =>
      expect(getByText('There are no collections available')).toBeTruthy(),
    );
  });

  it('displays collection list and navigates on press', async () => {
    const collection = mockCollections[0];

    jest.spyOn(customHooks, 'useCollections').mockReturnValue({
      collections: mockCollections,
      loading: false,
      error: undefined,
    });

    const {getByText} = renderWithSafeArea();
    await waitFor(() => expect(getByText('TEST COLLECTION 1')).toBeTruthy());

    fireEvent.press(getByText('TEST COLLECTION 1'));
    expect(mockNavigate).toHaveBeenCalledWith('ProductListScreen', {
      collectionId: collection.id,
    });
  });
});
