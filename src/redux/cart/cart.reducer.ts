import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from './cart.actions';
import { CartMap } from './cart.types';
import { FoodItem } from '../../data/items';

type CartState = {
  items: CartMap;
};

type CartAction =
  | { type: typeof ADD_ITEM; payload: FoodItem }
  | { type: typeof REMOVE_ITEM; payload: string }
  | { type: typeof CLEAR_CART };

const initialState: CartState = { items: {} };

export const cartReducer = (
  state: CartState = initialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case ADD_ITEM: {
      const item = action.payload;
      return {
        ...state,
        items: {
          ...state.items,
          [item.id]: {
            ...item,
            quantity: (state.items[item.id]?.quantity || 0) + 1,
          },
        },
      };
    }

    case REMOVE_ITEM: {
      const id = action.payload;
      const existing = state.items[id];
      if (!existing) return state;

      if (existing.quantity === 1) {
        const updated = { ...state.items };
        delete updated[id];
        return { ...state, items: updated };
      }

      return {
        ...state,
        items: {
          ...state.items,
          [id]: { ...existing, quantity: existing.quantity - 1 },
        },
      };
    }

    case CLEAR_CART: {
      return { ...state, items: {} }; // ✅ keep the items key
    }

    default:
      return state;
  }
};
