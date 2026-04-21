import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  category: '',
  keyword: '',
  byABC: '',
  byPrice: '',
  byPopularity: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeCategory: (state, { payload }) => {
      state.category = payload;
    },
    changeKeyword: (state, { payload }) => {
      state.keyword = payload;
    },
    changeAlphabet: (state, { payload }) => {
      state.byABC = payload;
    },
    changePrice: (state, { payload }) => {
      state.byPrice = payload;
    },
    changePopularity: (state, { payload }) => {
      state.byPopularity = payload;
    },
  },
});

export const { changeCategory, changeKeyword, changeAlphabet, changePrice, changePopularity } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
