import { FoodItem } from '../../data/items';
export const CLEAR_CART = 'cart/CLEAR_CART';
export const ADD_ITEM = 'cart/ADD_ITEM';
export const REMOVE_ITEM = 'cart/REMOVE_ITEM';

export const addItem = (item: FoodItem) => ({
  type: ADD_ITEM as const,
  payload: item,
});

export const removeItem = (id: string) => ({
  type: REMOVE_ITEM as const,
  payload: id,
});
export const clearCart = () => ({
  type: CLEAR_CART,
});


