import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ProductImage} from '../ProductImage';

describe('<ProductImage />', () => {
  it('renders when uri is provided', () => {
    const {getByLabelText} = render(
      <ProductImage
        uri="https://example.com/image.png"
        accessibilityLabel="test image"
      />,
    );

    const image = getByLabelText('test image');
    expect(image.props.source.uri).toEqual('https://example.com/image.png');
  });

  it('renders when uri is not provided', () => {
    const {getByLabelText} = render(
      <ProductImage accessibilityLabel="test image" />,
    );

    const image = getByLabelText('test image');
    expect(image.props.source).toEqual(expect.any(Object));
  });

  it('calls handleLoadEnd when the image is loaded', () => {
    const {getByLabelText} = render(
      <ProductImage
        uri="https://example.com/image.png"
        accessibilityLabel="test image"
      />,
    );

    const image = getByLabelText('test image');
    fireEvent(image, 'onLoad');
  });
});
