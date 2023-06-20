import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {CollectionsParamsList} from '../stacks/collections/routes';
import {CartParamsList} from '../stacks/cart/routes';
import {CollectionsNavigator} from '../stacks/collections';
import {CartNavigator} from '../stacks/cart';
import {TabBarIcon} from './components/TabBarIcon/TabBarIcon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootState} from 'state/store';
import {useSelector} from 'react-redux';
import {Palette} from 'styles/colors';

export type TabsNavigationParamList = {
  Collections: NavigatorScreenParams<CollectionsParamsList>;
  Cart: NavigatorScreenParams<CartParamsList>;
};

const Tab = createBottomTabNavigator<TabsNavigationParamList>();

interface TabNavigationItem {
  id: keyof TabsNavigationParamList;
  title: string;
  navigationComponent: React.ComponentType<any>;
}

const tabBarItems: TabNavigationItem[] = [
  {
    id: 'Collections',
    title: 'Collections',
    navigationComponent: CollectionsNavigator,
  },
  {id: 'Cart', title: 'Cart', navigationComponent: CartNavigator},
];

const selectCartItems = (state: RootState) => state.cart.cart.items;

export const TabNavigator = () => {
  const {bottom} = useSafeAreaInsets();
  const items = useSelector(selectCartItems);

  return (
    <Tab.Navigator
      safeAreaInsets={{bottom}}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => getTabBarIcon(route, focused),
        tabBarActiveTintColor: Palette.ActionPrimary,
        tabBarLabelPosition: 'below-icon',
        tabBarLabelStyle: {fontWeight: '600'},
        tabBarStyle: {
          backgroundColor: Palette.Background,
        },
      })}>
      {tabBarItems.map(({id, title, navigationComponent}) => {
        return (
          <Tab.Screen
            options={{
              tabBarLabel: title,
              tabBarBadge:
                id === 'Cart' && items.length ? items.length : undefined,
              tabBarBadgeStyle: {
                backgroundColor: Palette.ActionPrimary,
                fontWeight: 'bold',
              },
            }}
            key={id}
            name={id}
            component={navigationComponent}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const getTabBarIcon = (
  route: RouteProp<TabsNavigationParamList, keyof TabsNavigationParamList>,
  focused: boolean,
) => {
  return <TabBarIcon route={route} focused={focused} />;
};
