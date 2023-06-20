import {useQuery} from '@apollo/client';
import {COLLECTIONS_QUERY} from '../graphql/CollectionListQuery';
import {getNodesFromEdges} from 'services/graphql/utilities/utilities';
import {useMemo} from 'react';
import {CollectionResponse} from 'services/graphql/types';

export const useCollections = () => {
  const {data, loading, error} =
    useQuery<CollectionResponse>(COLLECTIONS_QUERY);

  const collections = useMemo(
    () => getNodesFromEdges(data?.collections?.edges ?? []),
    [data],
  );

  console.log('AAAAAAA', error);

  return {
    collections,
    loading,
    error,
  };
};
