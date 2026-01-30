import { LOGIN, LOGOUT, UPDATE_PASSWORD, UserState } from './user.types';

// login or register
export const loginUser = (user: UserState) => ({
  type: LOGIN as const,
  payload: user,
});

// logout
export const logoutUser = () => ({
  type: LOGOUT as const,
});

