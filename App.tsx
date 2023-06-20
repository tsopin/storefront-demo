import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ApolloProvider} from '@apollo/client';
import {store} from './src/state/store';
import {ErrorBoundary} from 'components/ErrorBoundary';
import {AppContainer} from 'navigation/AppContainer';
import {apolloClient} from 'services/graphql/apollo';

export const App = () => {
  return (
    <ErrorBoundary>
      <ReduxProvider store={store}>
        <ApolloProvider client={apolloClient}>
          <SafeAreaProvider>
            <AppContainer />
          </SafeAreaProvider>
        </ApolloProvider>
      </ReduxProvider>
    </ErrorBoundary>
  );
};
