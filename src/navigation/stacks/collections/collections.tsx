import React from 'react';

import type {CollectionsParamsList} from './routes';
import {createStackNavigator} from '@react-navigation/stack';
import {BaseScreenOptions} from '../../options';
import {CollectionListScreen} from 'screens/CollectionListScreen';
import {ProductListScreen} from 'screens/ProductListScreen';

const CollectionsStackNavigator = createStackNavigator<CollectionsParamsList>();

export const CollectionsNavigator = () => (
  <CollectionsStackNavigator.Navigator screenOptions={BaseScreenOptions}>
    <CollectionsStackNavigator.Screen
      name="CollectionListScreen"
      component={CollectionListScreen}
    />
    <CollectionsStackNavigator.Screen
      options={{
        headerShown: true,
      }}
      name="ProductListScreen"
      component={ProductListScreen}
    />
  </CollectionsStackNavigator.Navigator>
);
