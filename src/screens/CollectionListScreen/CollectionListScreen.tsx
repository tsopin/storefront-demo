import React, {useCallback} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {CollectionsNavigationProp} from 'navigation/stacks/collections';
import {useCollections} from './hooks/useCollections';
import {CollectionCell} from './components/CollectionCell';
import {LayoutContainer} from 'components/LayoutContainer';
import {EmptyStatePlaceholder} from 'components/EmptyStatePlaceholder';
import {typography} from 'styles/typography';
import {Spacing} from 'styles/utilities';
import {CollectionNode} from 'services/graphql/types';
import {EmptyStateType} from 'components/EmptyStatePlaceholder/EmptyStatePlaceholder';

const EmptyCollectionsComponent = () => (
  <EmptyStatePlaceholder type={EmptyStateType.COLLECTIONS} />
);

export const CollectionListScreen = () => {
  const {navigate} = useNavigation<CollectionsNavigationProp>();
  const {collections, loading, error} = useCollections();

  const handleOnPress = useCallback(
    (item: CollectionNode) => {
      navigate('ProductListScreen', {collectionId: item.id});
    },
    [navigate],
  );

  const renderItem = useCallback(
    ({item}: {item: CollectionNode}) => (
      <CollectionCell item={item} onPress={() => handleOnPress(item)} />
    ),
    [handleOnPress],
  );

  return (
    <LayoutContainer
      error={error?.message}
      loading={loading}
      safeAreaInsets="TOP">
      <Text style={styles.title}>Collections</Text>
      <FlatList
        ListEmptyComponent={EmptyCollectionsComponent}
        data={collections}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingTop: Spacing.Large}}
        showsVerticalScrollIndicator={false}
      />
    </LayoutContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    ...typography.title,
  },
});
