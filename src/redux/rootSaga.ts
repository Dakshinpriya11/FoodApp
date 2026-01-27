import { all } from 'redux-saga/effects';
import { cartSaga } from './cart/cart.saga';

export default function* rootSaga() {
  yield all([cartSaga()]);
}
