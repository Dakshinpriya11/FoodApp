import { call, put, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../../api/auth.api';
import { LOGIN_REQUEST } from './auth.types';
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

    if (onSuccess) {
      yield call(onSuccess, data.role);
    }
  } catch (error: any) {
    const { onError } = action.payload;

    const message =
      error?.response?.status === 401
        ? 'Wrong email or password'
        : 'Login failed. Please try again';

    // ✅ THIS WAS MISSING
    if (onError) {
      yield call(onError, message);
    }

    yield put(loginFailure());
  }
}

export function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, handleLoginSaga);
}
