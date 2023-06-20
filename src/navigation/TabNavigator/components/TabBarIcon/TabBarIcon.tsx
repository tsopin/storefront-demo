import React, {useMemo} from 'react';
import {RouteProp} from '@react-navigation/native';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import {TabsNavigationParamList} from '../../TabNavigator';
import {Palette} from 'styles/colors';

interface TabBarIconProps {
  route: RouteProp<TabsNavigationParamList, keyof TabsNavigationParamList>;
  focused: boolean;
}

const icons: Record<keyof TabsNavigationParamList, ImageSourcePropType> = {
  Collections: require('../../../../assets/icons/collections.png'),
  Cart: require('../../../../assets/icons/cart.png'),
};

export const TabBarIcon = ({route, focused}: TabBarIconProps): JSX.Element => {
  const tintColor = useMemo(
    () => (focused ? Palette.ActionPrimary : Palette.TextSecondary),
    [focused],
  );

  return (
    <Image style={[styles.icon, {tintColor}]} source={icons[route.name]} />
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
    marginTop: 2,
  },
});
