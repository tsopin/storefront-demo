import {ProductNode} from 'services/graphql/types';

export const mockProducts: ProductNode[] = [
  {
    id: '1',
    title: 'Test Product 1',
    description: 'Description for Test Product 1',
    images: {
      edges: [
        {
          node: {
            transformedSrc: 'https://example.com/test-product-1.jpg',
          },
        },
      ],
    },
    variants: {
      nodes: [
        {
          price: '100',
          id: 'variant-1',
        },
      ],
    },
  },
  {
    id: '2',
    title: 'Test Product 2',
    description: 'Description for Test Product 2',
    images: {
      edges: [
        {
          node: {
            transformedSrc: 'https://example.com/test-product-2.jpg',
          },
        },
      ],
    },
    variants: {
      nodes: [
        {
          price: '200',
          id: 'variant-2',
        },
      ],
    },
  },
  {
    id: '3',
    title: 'Test Product 3',
    description: 'Description for Test Product 3',
    images: {
      edges: [
        {
          node: {
            transformedSrc: 'https://example.com/test-product-3.jpg',
          },
        },
      ],
    },
    variants: {
      nodes: [
        {
          price: '300',
          id: 'variant-3',
        },
      ],
    },
  },
];
