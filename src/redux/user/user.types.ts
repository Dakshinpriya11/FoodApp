export type UserState = {
  name: string;
  phone: string;
  isLoggedIn: boolean;
  email?: string;
};

export const LOGIN = 'user/LOGIN';
export const LOGOUT = 'user/LOGOUT';
