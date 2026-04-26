import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems.push(payload);
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

export const { addToCart, deleteAllProducts, deleteProductById } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
