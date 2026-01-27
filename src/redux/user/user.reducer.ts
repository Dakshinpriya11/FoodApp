import { LOGIN, LOGOUT, UserState } from './user.types';

const initialState: UserState = {
  name: '',
  phone: '',
  email: '',
  isLoggedIn: false,
};

type UserAction =
  | {
      type: typeof LOGIN;
      payload: {
        name: string;
        phone: string;
        email?: string;
      };
    }
  | { type: typeof LOGOUT };

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload, // allows profile update also
        isLoggedIn: true,
      };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};
