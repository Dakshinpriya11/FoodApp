import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StaffState, Staff, AddStaffPayload } from './staff.types';

const initialState: StaffState = {
  data: [],
  loading: false,
  error: null,
  success: false,
};

const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    addStaffRequest(state, _: PayloadAction<AddStaffPayload>) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    addStaffSuccess(state, action: PayloadAction<Staff>) {
      state.loading = false;
      state.success = true;
      state.data.push(action.payload);
    },
    addStaffFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
    resetAddStaffState(state) {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
});

export const { addStaffRequest, addStaffSuccess, addStaffFailure, resetAddStaffState } = staffSlice.actions;
export const staffReducer = staffSlice.reducer;
