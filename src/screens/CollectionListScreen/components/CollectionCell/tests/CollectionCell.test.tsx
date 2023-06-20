import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {CollectionCell} from '../CollectionCell';
import {CollectionNode} from 'services/graphql/types';

describe('<CollectionCell />', () => {
  const mockItem: CollectionNode = {
    id: '1',
    title: 'Test Collection 1',
    image: {
      url: 'https://example.com/test-collection-1.jpg',
    },
  };

  it('renders the image and title', () => {
    const {getByText} = render(
      <CollectionCell item={mockItem} onPress={jest.fn()} />,
    );

    const title = getByText(mockItem.title.toUpperCase());
    expect(title).toBeTruthy();
  });

  it('calls onPress when the TouchableOpacity is pressed', () => {
    const mockOnPress = jest.fn();

    const {getByText} = render(
      <CollectionCell item={mockItem} onPress={mockOnPress} />,
    );

    fireEvent.press(getByText('TEST COLLECTION 1'));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
