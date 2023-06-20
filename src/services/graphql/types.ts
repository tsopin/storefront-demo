export interface ImageNode {
  transformedSrc: string;
}

export interface ImageEdge {
  node: ImageNode;
}

export interface ImageConnection {
  edges: ImageEdge[];
}

export interface ProductVariant {
  price: string;
  id: string;
}

export interface ProductVariantConnection {
  nodes: ProductVariant[];
}

export interface ProductNode {
  id: string;
  title: string;
  description?: string;
  images?: ImageConnection;
  variants?: ProductVariantConnection;
}

export interface ProductEdge {
  node: ProductNode;
}

export interface ProductConnection {
  edges: ProductEdge[];
}

export interface CollectionImage {
  url?: string;
}

export interface CollectionNode {
  id: string;
  title: string;
  image: CollectionImage | null;
  products?: ProductConnection;
}

export interface CollectionEdge {
  node: CollectionNode;
}

export interface CollectionConnection {
  edges: CollectionEdge[];
}

export interface CollectionResponse {
  collections: CollectionConnection;
}

export interface GraphQLResponse {
  products: ProductConnection;
}

export interface ProductResponse {
  product: ProductNode;
}

export interface CollectionData {
  node: CollectionNode;
}
