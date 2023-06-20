import {gql} from '@apollo/client';

export const PRODUCT_BY_ID_QUERY = gql`
  query getProductById($id: ID!) {
    product(id: $id) {
      id
      title
      description
      images(first: 5) {
        edges {
          node {
            transformedSrc
          }
        }
      }
      variants(first: 10) {
        nodes {
          price
          id
        }
      }
    }
  }
`;
