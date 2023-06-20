import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AddProductParams {
  imageUrl?: string;
  productId?: string;
  variantId: string;
  quantity: number;
  title?: string;
  price: string;
}

interface CartState {
  items: AddProductParams[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

const calculateTotal = (items: AddProductParams[]): number => {
  return items.reduce(
    (acc, item) => acc + item.quantity * parseFloat(item.price),
    0,
  );
};

const updateQuantity = (
  state: CartState,
  variantId: string,
  quantity: number,
) => {
  state.items = state.items.map(item => {
    if (item.variantId === variantId) {
      return {...item, quantity};
    }
    return item;
  });
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<AddProductParams>) {
      const index = state.items.findIndex(
        item => item.variantId === action.payload.variantId,
      );
      if (index >= 0) {
        state.items[index].quantity += 1;
      } else {
        state.items.push(action.payload);
      }
      state.total = calculateTotal(state.items);
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(
        item => item.variantId !== action.payload,
      );
      state.total = calculateTotal(state.items);
    },
    changeQuantity(
      state,
      action: PayloadAction<{variantId: string; quantity: number}>,
    ) {
      const {variantId, quantity} = action.payload;
      updateQuantity(state, variantId, quantity);
      state.total = calculateTotal(state.items);
    },
  },
});

export const {addToCart, removeFromCart, changeQuantity} = cartSlice.actions;

export const reducer = cartSlice.reducer;
