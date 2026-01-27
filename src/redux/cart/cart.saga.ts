import { takeEvery } from 'redux-saga/effects';
import { ADD_ITEM, REMOVE_ITEM } from './cart.actions';
import { FoodItem } from '../../data/items';

type AddItemAction = {
  type: typeof ADD_ITEM;
  payload: FoodItem;
};

type RemoveItemAction = {
  type: typeof REMOVE_ITEM;
  payload: string;
};

function* handleAddItem(action: AddItemAction) {
  // future: API call, analytics, logging, etc
  // example:
  // yield call(api.logAddToCart, action.payload)
}

function* handleRemoveItem(action: RemoveItemAction) {
  // future logic
}

export function* cartSaga() {
  yield takeEvery(ADD_ITEM, handleAddItem);
  yield takeEvery(REMOVE_ITEM, handleRemoveItem);
}
