import {AddProductParams} from 'state/slices';

export const mockProducts: AddProductParams[] = [
  {
    imageUrl: 'http://test.com/img1.jpg',
    productId: 'prod1',
    variantId: 'variant1',
    quantity: 2,
    title: 'Test Product 1',
    price: '20.50',
  },
  {
    imageUrl: 'http://test.com/img2.jpg',
    productId: 'prod2',
    variantId: 'variant2',
    quantity: 1,
    title: 'Test Product 2',
    price: '15.75',
  },
  {
    imageUrl: 'http://test.com/img3.jpg',
    productId: 'prod3',
    variantId: 'variant3',
    quantity: 5,
    title: 'Test Product 3',
    price: '7.90',
  },
];
