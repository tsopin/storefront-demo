import {ImageConnection} from '../types';

export function getNodesFromEdges<T>(edges?: Array<{node: T}>): T[] {
  return edges?.map(edge => edge.node) ?? [];
}

export const getProductImageUrl = (
  image?: ImageConnection,
): string | undefined => {
  const firstImageEdge = image?.edges[0];
  return firstImageEdge ? firstImageEdge.node.transformedSrc : undefined;
};
