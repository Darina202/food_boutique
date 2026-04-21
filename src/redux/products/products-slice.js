import { createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchProductsByCategory } from './products-operations';

const initialState = {
  items: [],
  page: 1,
  totalPages: 1,
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
        state.page = payload.page;
      })
      .addCase(fetchAllProducts.rejected, handleRejected);
    // .addCase(fetchProductsByCategory.pending, handlePending)
    // .addCase(fetchProductsByCategory.fulfilled, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.items = payload.results;
    //   state.totalPages = payload.totalPages;
    //   state.page = payload.page;
    // })
    // .addCase(fetchProductsByCategory.rejected, handleRejected);
  },
});

export const productReducer = productSlice.reducer;
