import { RootState } from '../store';
import { CartItem } from './cart.types';

// ✅ Get all cart items as an array
export const selectCartItems = (state: RootState): CartItem[] =>
  Object.values(state.cart.items);

// ✅ Get quantity of a specific item
export const selectItemQuantity = (state: RootState, id: string): number =>
  state.cart.items[id]?.quantity || 0;

// ✅ Get total cart value
export const selectCartTotal = (state: RootState): number =>
  Object.values(state.cart.items).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

// ✅ Get total number of items in cart
export const selectCartCount = (state: RootState): number =>
  Object.values(state.cart.items).reduce((sum, item) => sum + item.quantity, 0);
