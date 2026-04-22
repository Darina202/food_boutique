import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  category: '',
  keyword: '',
  byABC: null,
  byPrice: null,
  byPopularity: null,
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
    setSort: (state, { payload }) => {
      state.byABC = null;
      state.byPrice = null;
      state.byPopularity = null;

      if (payload.type === 'abc') state.byABC = payload.value;
      if (payload.type === 'price') state.byPrice = payload.value;
      if (payload.type === 'popularity') state.byPopularity = payload.value;
    },
  },
});

export const { changeCategory, changeKeyword, setSort } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
