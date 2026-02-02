import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './auth.types';

export const loginRequest = (payload: {
  email: string;
  password: string;
  onSuccess?: (role: string) => void;
  onError?: (message: string) => void; // ✅ ADD THIS
}) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (payload: any) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});
