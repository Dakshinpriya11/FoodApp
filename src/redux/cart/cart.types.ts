export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type CartMap = {
  [key: string]: CartItem;
};
