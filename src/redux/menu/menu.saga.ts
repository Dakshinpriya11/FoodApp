//
// import { call, put, takeLatest } from 'redux-saga/effects';
// import { fetchCustomerMenu, OrderType } from '../../api/menu.api';
// import {
//   fetchMenuRequest,
//   fetchMenuSuccess,
//   fetchMenuFailure,
// } from './menu.slice';
//
// function* handleFetchMenu(action: ReturnType<typeof fetchMenuRequest> & { payload: OrderType }) {
//   try {
//     const data = yield call(fetchCustomerMenu, action.payload);
//     yield put(fetchMenuSuccess(data));
//   } catch (error: any) {
//     yield put(fetchMenuFailure(error?.message || 'Failed to fetch menu'));
//   }
// }
//
// export function* menuSaga() {
//   yield takeLatest(fetchMenuRequest.type, handleFetchMenu);
// }
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchCustomerMenu,
  OrderType,
  createMenu,
  CreateMenuPayload,
} from '../../api/menu.api';
import {
  fetchMenuRequest,
  fetchMenuSuccess,
  fetchMenuFailure,
  createMenuRequest,
  createMenuSuccess,
  createMenuFailure,
} from './menu.slice';

// ===== Fetch Menu Saga =====
function* handleFetchMenu(action: ReturnType<typeof fetchMenuRequest> & { payload: OrderType }) {
  try {
    const data = yield call(fetchCustomerMenu, action.payload);
    yield put(fetchMenuSuccess(data));
  } catch (error: any) {
    yield put(fetchMenuFailure(error?.message || 'Failed to fetch menu'));
  }
}

// ===== Create Menu Saga =====
function* handleCreateMenu(action: ReturnType<typeof createMenuRequest> & { payload: CreateMenuPayload }) {
  try {
    yield call(createMenu, action.payload);
    yield put(createMenuSuccess());
  } catch (error: any) {
    yield put(createMenuFailure(error?.message || 'Failed to create menu'));
  }
}

// ===== Root Menu Saga =====
export function* menuSaga() {
  yield takeLatest(fetchMenuRequest.type, handleFetchMenu);
  yield takeLatest(createMenuRequest.type, handleCreateMenu);
}
