import {CollectionNode} from 'services/graphql/types';

export const mockCollections: CollectionNode[] = [
  {
    id: '1',
    title: 'Test Collection 1',
    image: {
      url: 'https://example.com/test-collection-1.jpg',
    },
  },
  {
    id: '2',
    title: 'Test Collection 2',
    image: {
      url: 'https://example.com/test-collection-2.jpg',
    },
  },
  {
    id: '3',
    title: 'Test Collection 3',
    image: null,
  },
];
