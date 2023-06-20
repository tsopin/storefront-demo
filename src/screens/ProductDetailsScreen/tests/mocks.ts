import {ProductNode} from 'services/graphql/types';

export const mockProduct: ProductNode = {
  id: '1',
  title: 'Product 1',
  description: 'This is product 1',
  images: {
    edges: [
      {
        node: {
          transformedSrc: 'image1.jpg',
        },
      },
    ],
  },
  variants: {
    nodes: [
      {
        price: '10',
        id: 'variant1',
      },
      {
        price: '15',
        id: 'variant2',
      },
    ],
  },
};
