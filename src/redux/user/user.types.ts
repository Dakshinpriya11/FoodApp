export type UserState = {
  name: string;
  phone: string;
  email?: string;
  password?: string;  // ✅ added password
  isLoggedIn: boolean;
};

export const LOGIN = 'user/LOGIN';
export const LOGOUT = 'user/LOGOUT';
export const UPDATE_PASSWORD = 'user/UPDATE_PASSWORD'; // ✅ new action
