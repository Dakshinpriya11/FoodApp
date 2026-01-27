export type FoodItem = {
  id: string;
  name: string;
  price: number;
};

export const items: FoodItem[] = [
  { id: '1', name: 'Burger', price: 120 },
  { id: '2', name: 'Pizza', price: 250 },
  { id: '3', name: 'French Fries', price: 90 },
];
