import 'cross-fetch/polyfill';

import {ApolloClient, InMemoryCache} from '@apollo/client';
import {API_URL, ACCESS_TOKEN} from './constants';

export const apolloClient = new ApolloClient({
  uri: API_URL,
  headers: {
    'X-Shopify-Storefront-Access-Token': ACCESS_TOKEN,
  },
  cache: new InMemoryCache(),
  connectToDevTools: __DEV__,
});
