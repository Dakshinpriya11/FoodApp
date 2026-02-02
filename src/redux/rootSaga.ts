// src/redux/rootSaga.ts
import { all } from 'redux-saga/effects';
import { cartSaga } from './cart/cart.saga';
import { authSaga } from './auth/auth.saga';
import { menuSaga } from './menu/menu.saga';
import { staffSaga } from './staff/staff.saga';

export default function* rootSaga() {
  yield all([
    cartSaga(),
    authSaga(),
    menuSaga(),
    staffSaga(),
  ]);
}
