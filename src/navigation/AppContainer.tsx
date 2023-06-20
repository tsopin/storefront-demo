import React from 'react';

import {
  NavigationContainer,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import {
  TabNavigator,
  TabsNavigationParamList,
} from './TabNavigator/TabNavigator';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {ProductNavigator} from './stacks/product';
import {ModalScreenOptions} from './options';
import {ProductParamsList} from './stacks/product/routes';

type MainStackParamList = {
  Tabs: NavigatorScreenParams<TabsNavigationParamList>;
  Product: NavigatorScreenParams<ProductParamsList>;
};

export type AppRoutesParamList = TabsNavigationParamList & ProductParamsList;
export type AppStackNavigationProp = StackNavigationProp<MainStackParamList>;
export type AppRoutesRouteProp<RouteName extends keyof AppRoutesParamList> =
  RouteProp<AppRoutesParamList, RouteName>;

const AppStack = createStackNavigator<MainStackParamList>();

export const AppContainer = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{...ModalScreenOptions, headerShown: false}}>
        <AppStack.Screen name="Tabs" component={TabNavigator} />
        <AppStack.Screen name="Product" component={ProductNavigator} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
