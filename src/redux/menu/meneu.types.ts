
export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
}

export interface MenuState {
  data: MenuItem[];
  loading: boolean;
  error: string | null;
}
