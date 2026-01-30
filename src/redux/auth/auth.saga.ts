import { call, put, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../../api/auth.api';
import {
  LOGIN_REQUEST,
} from './auth.types';
import { loginSuccess, loginFailure } from './auth.actions';

function* handleLoginSaga(action: any): Generator<any, any, any> {
  try {
    const { email, password, onSuccess } = action.payload;

    const data = yield call(login, { email, password });

    yield call(AsyncStorage.setItem, 'token', data.token);

    yield put(
      loginSuccess({
        name: data.name,
        email,
        role: data.role,
        token: data.token,
      })
    );

    if (onSuccess) onSuccess(data.role);
  } catch (error) {
    yield put(loginFailure());
  }
}

export function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, handleLoginSaga);
}
