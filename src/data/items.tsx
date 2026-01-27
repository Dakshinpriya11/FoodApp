export type FoodItem = {
  id: string;
  name: string;
  price: number;
  image: any;
};

export const items: FoodItem[] = [
  {
    id: '1',
    name: 'Cheese Burger',
    price: 149,
    image: require('../assets/burger.png'),
  },
  {
    id: '2',
    name: 'Pizza',
    price: 249,
    image: require('../assets/pizza.jpeg'),
  },
  {
    id: '3',
    name: 'Masala Dosa',
    price: 99,
    image: require('../assets/dosa.jpeg'),
  },
];
