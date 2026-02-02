// src/redux/store.ts
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { cartReducer } from './cart/cart.reducer';
import { userReducer } from './user/user.reducer';
import { menuReducer } from './menu/menu.slice';
import { staffReducer } from './staff/staff.slice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  menu: menuReducer,
  staff: staffReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
