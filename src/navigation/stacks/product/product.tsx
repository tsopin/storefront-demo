import React from 'react';

import type {ProductParamsList} from './routes';
import {ProductDetailsScreen} from 'screens/ProductDetailsScreen';
import {BaseScreenOptions} from '../../options';
import {createStackNavigator} from '@react-navigation/stack';

const ProductStackNavigator = createStackNavigator<ProductParamsList>();
export const ProductNavigator = () => (
  <ProductStackNavigator.Navigator screenOptions={BaseScreenOptions}>
    <ProductStackNavigator.Screen
      name="ProductDetailsScreen"
      component={ProductDetailsScreen}
    />
  </ProductStackNavigator.Navigator>
);
