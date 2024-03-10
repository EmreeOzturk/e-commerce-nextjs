import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

// Define a type for the slice state
interface ProductState {
  name: string;
  price: number;
  description: string;
  unitInStock: number;
}

// Define the initial state using that type
const initialState: ProductState = {
  name: '',
  description: '',
  price: 0,
  unitInStock: 0,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      
    },
    removeProduct: (state) => {
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
    },
  },
});

export const { addProduct, removeProduct, incrementByAmount } = productSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectPrice = (state: RootState) => state.product.price;

export default productSlice.reducer;
