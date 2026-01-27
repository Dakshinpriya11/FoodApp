import { LOGIN, LOGOUT, UserState } from './user.types';

export const loginUser = (user: UserState) => ({
  type: LOGIN as const,
  payload: user,
});

export const logoutUser = () => ({
  type: LOGOUT as const,
});
