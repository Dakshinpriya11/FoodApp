
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCustomerMenu, OrderType } from '../../api/menu.api';
import {
  fetchMenuRequest,
  fetchMenuSuccess,
  fetchMenuFailure,
} from './menu.slice';

function* handleFetchMenu(action: ReturnType<typeof fetchMenuRequest> & { payload: OrderType }) {
  try {
    const data = yield call(fetchCustomerMenu, action.payload);
    yield put(fetchMenuSuccess(data));
  } catch (error: any) {
    yield put(fetchMenuFailure(error?.message || 'Failed to fetch menu'));
  }
}

export function* menuSaga() {
  yield takeLatest(fetchMenuRequest.type, handleFetchMenu);
}
