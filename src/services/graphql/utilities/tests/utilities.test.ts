import {ImageConnection} from 'services/graphql/types';
import {getProductImageUrl} from '../utilities';

describe('getProductImageUrl', () => {
  it('returns the transformedSrc of the first image edge', () => {
    const mockImage: ImageConnection = {
      edges: [
        {node: {transformedSrc: 'image1.jpg'}},
        {node: {transformedSrc: 'image2.jpg'}},
      ],
    };

    expect(getProductImageUrl(mockImage)).toBe('image1.jpg');
  });

  it('returns undefined if there are no image edges', () => {
    const mockImage: ImageConnection = {edges: []};
    expect(getProductImageUrl(mockImage)).toBeUndefined();
  });

  it('returns undefined if the image is undefined', () => {
    expect(getProductImageUrl(undefined)).toBeUndefined();
  });
});
