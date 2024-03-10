import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

interface LoggedInState {
  loggedIn: boolean;
}

const initialState: LoggedInState = {
  loggedIn: true,
};

export const loggedInSlice = createSlice({
  name: 'loggedIn',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { setLoggedIn } = loggedInSlice.actions;

export default loggedInSlice.reducer;
