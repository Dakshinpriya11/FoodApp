import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  MenuState,
  MenuItem,
  CreateMenuPayload,
  UpdateMenuPayload,
} from './menu.types';

const initialState: MenuState = {
  // customer menu (menus + items if backend sends them)
  data: [],
  loading: false,
  error: null,

  // owner – menus only
  allMenus: [],
  allMenusLoading: false,
  allMenusError: null,

  // create
  createLoading: false,
  createError: null,
  createSuccess: false,

  // update
  updateLoading: false,
  updateError: null,
  updateSuccess: false,

  // delete
  deleteLoading: false,
  deleteError: null,
  deleteSuccess: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    /* ================= CUSTOMER ================= */
    fetchMenuRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchMenuSuccess(state, action: PayloadAction<MenuItem[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchMenuFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    /* ================= OWNER ================= */
    fetchAllMenusRequest(state) {
      state.allMenusLoading = true;
      state.allMenusError = null;
    },
    fetchAllMenusSuccess(state, action: PayloadAction<MenuItem[]>) {
      state.allMenusLoading = false;
      state.allMenus = action.payload;
    },
    fetchAllMenusFailure(state, action: PayloadAction<string>) {
      state.allMenusLoading = false;
      state.allMenusError = action.payload;
    },

    /* ================= CREATE ================= */
    createMenuRequest(state, _: PayloadAction<CreateMenuPayload>) {
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
    resetCreateMenuState(state) {
      state.createLoading = false;
      state.createError = null;
      state.createSuccess = false;
    },

    /* ================= UPDATE ================= */
    updateMenuRequest(state, _: PayloadAction<UpdateMenuPayload>) {
      state.updateLoading = true;
      state.updateError = null;
      state.updateSuccess = false;
    },
    updateMenuSuccess(state) {
      state.updateLoading = false;
      state.updateSuccess = true;
    },
    updateMenuFailure(state, action: PayloadAction<string>) {
      state.updateLoading = false;
      state.updateError = action.payload;
    },
    resetUpdateMenuState(state) {
      state.updateLoading = false;
      state.updateError = null;
      state.updateSuccess = false;
    },

    /* ================= DELETE ================= */
    deleteMenuRequest(state, _: PayloadAction<string>) {
      state.deleteLoading = true;
      state.deleteError = null;
      state.deleteSuccess = false;
    },
    deleteMenuSuccess(state, action: PayloadAction<string>) {
      state.deleteLoading = false;
      state.deleteSuccess = true;

      // remove from owner menu list
      state.allMenus = state.allMenus.filter(
        menu => menu.id !== action.payload
      );
    },
    deleteMenuFailure(state, action: PayloadAction<string>) {
      state.deleteLoading = false;
      state.deleteError = action.payload;
    },
    resetDeleteMenuState(state) {
      state.deleteLoading = false;
      state.deleteError = null;
      state.deleteSuccess = false;
    },
  },
});

export const {
  // customer
  fetchMenuRequest,
  fetchMenuSuccess,
  fetchMenuFailure,

  // owner
  fetchAllMenusRequest,
  fetchAllMenusSuccess,
  fetchAllMenusFailure,

  // create
  createMenuRequest,
  createMenuSuccess,
  createMenuFailure,
  resetCreateMenuState,

  // update
  updateMenuRequest,
  updateMenuSuccess,
  updateMenuFailure,
  resetUpdateMenuState,

  // delete
  deleteMenuRequest,
  deleteMenuSuccess,
  deleteMenuFailure,
  resetDeleteMenuState,
} = menuSlice.actions;

export const menuReducer = menuSlice.reducer;
