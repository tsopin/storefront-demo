import React from 'react';

import type {CartParamsList} from './routes';
import {CartScreen} from 'screens/CartScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {BaseScreenOptions} from '../../options';

const CartStackNavigator = createStackNavigator<CartParamsList>();

export const CartNavigator = () => (
  <CartStackNavigator.Navigator
    screenOptions={{...BaseScreenOptions, headerShown: false}}>
    <CartStackNavigator.Screen name="CartScreen" component={CartScreen} />
  </CartStackNavigator.Navigator>
);
