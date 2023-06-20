import type {RouteProp} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

export type ProductRouteProp<RouteName extends keyof ProductParamsList> =
  RouteProp<ProductParamsList, RouteName>;

export type ProductParamsList = {
  ProductDetailsScreen: {productId: string};
};
