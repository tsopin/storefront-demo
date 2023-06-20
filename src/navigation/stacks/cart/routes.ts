import type {RouteProp} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

export type CartNavigationProp = StackNavigationProp<CartParamsList>;
export type CartRouteProp<RouteName extends keyof CartParamsList> = RouteProp<
  CartParamsList,
  RouteName
>;

export type CartParamsList = {
  CartScreen: undefined;
};
