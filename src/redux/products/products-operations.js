import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts } from '../../api/products-api';

export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async ({ page, limit }, thunkAPI) => {
  try {
    const data = await getAllProducts(page, limit);
    // return data.results;
    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
