import { combineReducers } from '@reduxjs/toolkit';
import { productReducer } from './products/products-slice';
import { filterReducer } from './filters/filters-slice';
import { cartReducer } from './cart/cart-slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'order',
  storage: storage.default,
  whitelist: ['cartItems'],
};

const persistedOrderReducer = persistReducer(persistConfig, cartReducer);

const rootReducer = combineReducers({
  products: productReducer,
  filter: filterReducer,
  cart: persistedOrderReducer,
});

export default rootReducer;
