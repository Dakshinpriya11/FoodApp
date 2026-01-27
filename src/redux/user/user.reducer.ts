import { LOGIN, LOGOUT, UPDATE_PASSWORD, UserState } from './user.types';

const initialState: UserState = {
  name: '',
  phone: '',
  email: '',
  password: '',   // ✅ added default password
  isLoggedIn: false,
};

type UserAction =
  | {
      type: typeof LOGIN;
      payload: {
        name: string;
        phone: string;
        email?: string;
        password?: string;
      };
    }
  | { type: typeof LOGOUT }
  | { type: typeof UPDATE_PASSWORD; payload: string };

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };

    case LOGOUT:
      return initialState;

    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    default:
      return state;
  }
};
