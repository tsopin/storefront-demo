import {ProductEdge} from 'services/graphql/types';

export const productEdges: ProductEdge[] = [
  {
    node: {
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
    },
  },
  {
    node: {
      id: '2',
      title: 'Product 2',
      description: 'This is product 2',
      images: {
        edges: [
          {
            node: {
              transformedSrc: 'image2.jpg',
            },
          },
        ],
      },
      variants: {
        nodes: [
          {
            price: '20',
            id: 'variant3',
          },
        ],
      },
    },
  },
];
