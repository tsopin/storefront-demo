import React, {useEffect, useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {LayoutContainer} from 'components/LayoutContainer';
import {EmptyStatePlaceholder} from 'components/EmptyStatePlaceholder';
import {CollectionsRouteProp} from 'navigation/stacks/collections';
import {AppStackNavigationProp} from 'navigation/AppContainer';
import {useProducts} from './hooks/useProducts';
import {Spacing} from 'styles/utilities';
import {ProductNode} from 'services/graphql/types';
import {ProductCell} from './components/ProductCell';
import {EmptyStateType} from 'components/EmptyStatePlaceholder/EmptyStatePlaceholder';

const EmptyProductsComponent = () => (
  <EmptyStatePlaceholder type={EmptyStateType.PRODUCTS} />
);
export const ProductListScreen = () => {
  const {setOptions, navigate} = useNavigation<AppStackNavigationProp>();
  const {collectionId} =
    useRoute<CollectionsRouteProp<'ProductListScreen'>>().params;
  const {title, products, loading, error} = useProducts(collectionId);

  useEffect(() => {
    setOptions({title});
  }, [title, setOptions]);

  const handleProductPress = useCallback(
    (item: ProductNode) => {
      navigate('Product', {
        screen: 'ProductDetailsScreen',
        params: {productId: item.id},
      });
    },
    [navigate],
  );

  const renderItem = useCallback(
    ({item}: {item: ProductNode}) => (
      <ProductCell onPress={() => handleProductPress(item)} product={item} />
    ),
    [handleProductPress],
  );

  return (
    <LayoutContainer error={error?.message} loading={loading}>
      <FlatList
        ListEmptyComponent={EmptyProductsComponent}
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={styles.columnWrapperStyle}
        data={products}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        windowSize={10}
        maxToRenderPerBatch={10}
      />
    </LayoutContainer>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: Spacing.Small,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
});
