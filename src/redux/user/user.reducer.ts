import {
  LOGIN,
  LOGOUT,
  UPDATE_PASSWORD,
  UserState,
} from './user.types';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../auth/auth.types';

const initialState: UserState = {
  name: '',
  phone: '',
  email: '',
  password: '',
  isLoggedIn: false,
};

type UserAction =
  | {
      type: typeof LOGIN | typeof LOGIN_SUCCESS;
      payload: {
        name: string;
        email: string;
        role?: string;
        token?: string;
      };
    }
  | { type: typeof LOGIN_FAILURE }
  | { type: typeof LOGOUT }
  | { type: typeof UPDATE_PASSWORD; payload: string };

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case LOGIN:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
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
