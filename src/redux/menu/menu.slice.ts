
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuState, MenuItem } from './menu.types';

const initialState: MenuState = {
  data: [],
  loading: false,
  error: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    fetchMenuRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchMenuSuccess(state, action: PayloadAction<MenuItem[]>) {
      state.data = action.payload;
      state.loading = false;
    },
    fetchMenuFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchMenuRequest, fetchMenuSuccess, fetchMenuFailure } =
  menuSlice.actions;

export const menuReducer = menuSlice.reducer;
