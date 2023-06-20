import {useQuery} from '@apollo/client';
import {PRODUCT_BY_ID_QUERY} from '../graphql/ProductDetailsQuery';
import {ProductResponse} from 'services/graphql/types';

export const useProductDetails = (id: string) => {
  const {loading, error, data} = useQuery<ProductResponse>(
    PRODUCT_BY_ID_QUERY,
    {
      variables: {id},
    },
  );

  return {product: data?.product, loading, error};
};
