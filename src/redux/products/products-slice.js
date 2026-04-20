import { createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts } from './products-operations';

const initialState = {
  items: [],
  totalPages: 2,
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
        state.items = payload.results;
        state.totalPages = payload.totalPages;
      })
      .addCase(fetchAllProducts.rejected, handleRejected);
  },
});

export const productReducer = productSlice.reducer;
