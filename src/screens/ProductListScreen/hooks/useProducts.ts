import {useQuery} from '@apollo/client';
import {getNodesFromEdges} from 'services/graphql/utilities/utilities';
import {useMemo} from 'react';
import {PRODUCTS_BY_COLLECTION_QUERY} from '../graphql/ProductListQuery';
import {CollectionData} from 'services/graphql/types';

export const useProducts = (id: string) => {
  const {loading, error, data} = useQuery<CollectionData>(
    PRODUCTS_BY_COLLECTION_QUERY,
    {
      variables: {id},
    },
  );

  const products = useMemo(
    () => getNodesFromEdges(data?.node?.products?.edges ?? []),
    [data],
  );

  return {title: data?.node?.title, products, loading, error};
};
