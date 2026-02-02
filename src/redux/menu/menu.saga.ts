
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchCustomerMenu,
  fetchAllMenus,
  createMenu,
  updateMenu,
  deleteMenu,
  OrderType,
} from '../../api/menu.api';
import {
  fetchMenuRequest,
  fetchMenuSuccess,
  fetchMenuFailure,
  fetchAllMenusRequest,
  fetchAllMenusSuccess,
  fetchAllMenusFailure,
  createMenuRequest,
  createMenuSuccess,
  createMenuFailure,
  updateMenuRequest,
  updateMenuSuccess,
  updateMenuFailure,
  deleteMenuRequest,
  deleteMenuSuccess,
  deleteMenuFailure,
} from './menu.slice';

/* CUSTOMER */
function* handleFetchMenu(action: { payload: OrderType }) {
  try {
    const data = yield call(fetchCustomerMenu, action.payload);
    yield put(fetchMenuSuccess(data));
  } catch (e: any) {
    yield put(fetchMenuFailure(e.message));
  }
}

/* OWNER */
function* handleFetchAllMenus() {
  try {
    const menus = yield call(fetchAllMenus);
    yield put(fetchAllMenusSuccess(menus));
  } catch (e: any) {
    yield put(fetchAllMenusFailure(e.message));
  }
}

function* handleCreateMenu(action: any) {
  try {
    yield call(createMenu, action.payload);
    yield put(createMenuSuccess());
    yield put(fetchAllMenusRequest());
  } catch (e: any) {
    yield put(createMenuFailure(e.message));
  }
}

function* handleUpdateMenu(action: any) {
  try {
    const { id, ...payload } = action.payload;
    yield call(updateMenu, id, payload);
    yield put(updateMenuSuccess());
    yield put(fetchAllMenusRequest());
  } catch (e: any) {
    yield put(updateMenuFailure(e.message));
  }
}

function* handleDeleteMenu(action: any) {
  try {
    yield call(deleteMenu, action.payload);
    yield put(deleteMenuSuccess(action.payload));
  } catch (e: any) {
    yield put(deleteMenuFailure(e.message));
  }
}

export function* menuSaga() {
  yield takeLatest(fetchMenuRequest.type, handleFetchMenu);
  yield takeLatest(fetchAllMenusRequest.type, handleFetchAllMenus);
  yield takeLatest(createMenuRequest.type, handleCreateMenu);
  yield takeLatest(updateMenuRequest.type, handleUpdateMenu);
  yield takeLatest(deleteMenuRequest.type, handleDeleteMenu);
}
