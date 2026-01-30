//
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { MenuState, MenuItem } from './menu.types';
//
// const initialState: MenuState = {
//   data: [],
//   loading: false,
//   error: null,
// };
//
// const menuSlice = createSlice({
//   name: 'menu',
//   initialState,
//   reducers: {
//     fetchMenuRequest(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     fetchMenuSuccess(state, action: PayloadAction<MenuItem[]>) {
//       state.data = action.payload;
//       state.loading = false;
//     },
//     fetchMenuFailure(state, action: PayloadAction<string>) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });
//
// export const { fetchMenuRequest, fetchMenuSuccess, fetchMenuFailure } =
//   menuSlice.actions;
//
// export const menuReducer = menuSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuState, MenuItem, CreateMenuPayload } from './menu.types';

const initialState: MenuState = {
  data: [],
  loading: false,
  error: null,

  createLoading: false,
  createError: null,
  createSuccess: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    // ===== Fetch Menu =====
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

    // ===== Create Menu =====
    createMenuRequest(state, action: PayloadAction<CreateMenuPayload>) {
      state.createLoading = true;
      state.createError = null;
      state.createSuccess = false;
    },
    createMenuSuccess(state) {
      state.createLoading = false;
      state.createSuccess = true;
    },
    createMenuFailure(state, action: PayloadAction<string>) {
      state.createLoading = false;
      state.createError = action.payload;
    },

    // Reset create menu state (optional, after success)
    resetCreateMenuState(state) {
      state.createLoading = false;
      state.createError = null;
      state.createSuccess = false;
    },
  },
});

export const {
  fetchMenuRequest,
  fetchMenuSuccess,
  fetchMenuFailure,
  createMenuRequest,
  createMenuSuccess,
  createMenuFailure,
  resetCreateMenuState,
} = menuSlice.actions;

export const menuReducer = menuSlice.reducer;
