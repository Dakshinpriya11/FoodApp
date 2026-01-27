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

// update password
export const updatePassword = (newPassword: string) => ({
  type: UPDATE_PASSWORD as const,
  payload: newPassword,
});
