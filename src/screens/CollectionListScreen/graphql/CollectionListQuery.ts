import {gql} from '@apollo/client';

export const COLLECTIONS_QUERY = gql`
  query {
    collections(first: 100) {
      edges {
        node {
          id
          title
          image {
            url
          }
        }
      }
    }
  }
`;
