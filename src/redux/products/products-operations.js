import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts } from '../../api/products-api';

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async ({ page, limit, keyword, category, byABC, byPrice, byPopularity }, thunkAPI) => {
    try {
      const data = await getAllProducts(page, limit, keyword, category, byABC, byPrice, byPopularity);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
