import { createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts } from './products-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllProducts.pending, handlePending)
      .addCase(fetchAllProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchAllProducts.rejected, handleRejected);
    //   .addCase(addContact.pending, handlePending)
    //   .addCase(addContact.fulfilled, (state, { payload }) => {
    //     state.isLoading = false;
    //     state.items = [...state.items, payload];
    //   })
    //   .addCase(addContact.rejected, handleRejected)
    //   .addCase(deleteContact.pending, handlePending)
    //   .addCase(deleteContact.fulfilled, (state, { payload }) => {
    //     state.isLoading = false;
    //     state.items = state.items.filter(item => item.id !== payload);
    //   })
    //   .addCase(deleteContact.rejected, handleRejected);
  },
});

export const productReducer = productSlice.reducer;
