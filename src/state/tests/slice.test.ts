import {addToCart, changeQuantity, reducer, removeFromCart} from '../slices';

describe('cart reducer', () => {
  it('handles initial state', () => {
    expect(reducer(undefined, {type: 'unknown'})).toEqual({
      items: [],
      total: 0,
    });
  });

  const emptyInitialState = {
    items: [],
    total: 0,
  };

  const initialState = {
    items: [
      {
        imageUrl: 'url',
        productId: '1',
        variantId: '2',
        quantity: 2,
        title: 'Product',
        price: '10',
      },
    ],
    total: 20,
  };

  it('handles addToCart', () => {
    const actual = reducer(
      emptyInitialState,
      addToCart({
        imageUrl: 'url',
        productId: '1',
        variantId: '2',
        quantity: 2,
        title: 'Product',
        price: '10',
      }),
    );

    expect(actual.items).toHaveLength(1);
    expect(actual.items[0]).toEqual({
      imageUrl: 'url',
      productId: '1',
      variantId: '2',
      quantity: 2,
      title: 'Product',
      price: '10',
    });
    expect(actual.total).toEqual(20);
  });

  it('handles removeFromCart', () => {
    const actual = reducer(initialState, removeFromCart('2'));

    expect(actual.items).toHaveLength(0);
    expect(actual.total).toEqual(0);
  });

  it('handles changeQuantity', () => {
    const actual = reducer(
      initialState,
      changeQuantity({variantId: '2', quantity: 3}),
    );

    expect(actual.items).toHaveLength(1);
    expect(actual.items[0].quantity).toEqual(3);
    expect(actual.total).toEqual(30);
  });
});
