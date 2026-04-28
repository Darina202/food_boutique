import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems.push({ ...payload, amount: 1 });
    },
    changeAmount: (state, { payload }) => {
      const item = state.cartItems.find(item => item._id === payload.id);
      if (item) {
        item.amount = payload.amount;
      }
    },
    deleteAllProducts: (state, { payload }) => {
      state.cartItems = [];
    },
    deleteProductById: (state, { payload }) => {
      state.isLoading = false;
      state.cartItems = state.cartItems.filter(item => item._id !== payload);
    },
  },
});

export const { addToCart, deleteAllProducts, deleteProductById, changeAmount } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
