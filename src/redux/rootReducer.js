import { combineReducers } from '@reduxjs/toolkit';
import { productReducer } from './products/products-slice';
import { filterReducer } from './filters/filters-slice';
import { cartReducer } from './cart/cart-slice';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'order',
  storage,
  whitelist: ['cartItems'],
};

const persistedOrderReducer = persistReducer(persistConfig, cartReducer);

const rootReducer = combineReducers({
  products: productReducer,
  filter: filterReducer,
  cart: persistedOrderReducer,
});

export default rootReducer;
