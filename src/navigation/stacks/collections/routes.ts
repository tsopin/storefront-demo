import type {RouteProp} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

export type CollectionsNavigationProp =
  StackNavigationProp<CollectionsParamsList>;

export type CollectionsRouteProp<
  RouteName extends keyof CollectionsParamsList,
> = RouteProp<CollectionsParamsList, RouteName>;

export type CollectionsParamsList = {
  CollectionListScreen: undefined;
  ProductListScreen: {collectionId: string};
};
