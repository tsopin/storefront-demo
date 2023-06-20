import {gql} from '@apollo/client';

export const PRODUCTS_BY_COLLECTION_QUERY = gql`
  query GetProductsByCollection($id: ID!) {
    node(id: $id) {
      ... on Collection {
        id
        title
        products(first: 10) {
          edges {
            node {
              id
              title
              description
              variants(first: 1) {
                nodes {
                  price
                  id
                }
              }
              images(first: 1) {
                edges {
                  node {
                    transformedSrc
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
