import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts, getPopularProducts } from '../../api/products-api';

export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async (_, thunkAPI) => {
  try {
    const data = await getAllProducts();
    return data.results;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchPopularProducts = createAsyncThunk('products/fetchPopularProducts', async (_, thunkAPI) => {
  try {
    const data = await getPopularProducts();
    return data;
    console.log(data);
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
