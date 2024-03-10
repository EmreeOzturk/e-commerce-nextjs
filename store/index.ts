import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import cartSlice from './slices/cartSlice';
import loggedInSlice from './slices/loggedInSlice';
export const makeStore = () => {
  return configureStore({
    reducer: {
      product: productSlice,
      cart: cartSlice,
      loggedIn: loggedInSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
