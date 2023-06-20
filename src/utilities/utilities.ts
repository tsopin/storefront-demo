import {ImageConnection} from 'services/graphql/types';

export const formatPrice = (value: number | string) =>
  `$${Number(value).toFixed(2).toLocaleString()}`;
