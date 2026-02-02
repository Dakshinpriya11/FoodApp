import { call, put, takeLatest } from 'redux-saga/effects';
import { addStaffRequest, addStaffSuccess, addStaffFailure } from './staff.slice';
import { AddStaffPayload } from './staff.types';
import { addStaff } from '../../api/addstaff.api';

function* handleAddStaff(action: ReturnType<typeof addStaffRequest>) {
  try {
    const response = yield call(addStaff, action.payload as AddStaffPayload);
    yield put(addStaffSuccess(response));
  } catch (error: any) {
    yield put(addStaffFailure(error?.message || 'Failed to add staff'));
  }
}

export function* staffSaga() {
  yield takeLatest(addStaffRequest.type, handleAddStaff);
}
