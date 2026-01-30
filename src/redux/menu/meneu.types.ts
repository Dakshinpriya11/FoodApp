//
// export interface MenuItem {
//   id: string;
//   name: string;
//   price: number;
//   description?: string;
//   image?: string;
// }
//
// export interface MenuState {
//   data: MenuItem[];
//   loading: boolean;
//   error: string | null;
// }

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
}

// State for the menu domain
export interface MenuState {
  data: MenuItem[];
  loading: boolean;
  error: string | null;

  // Create Menu states
  createLoading: boolean;
  createError: string | null;
  createSuccess: boolean;
}

// Payload for creating a menu
export interface CreateMenuPayload {
  name: string;
  start_time: string; // "HH:mm"
  end_time: string;   // "HH:mm"
}

// Response from create menu API
export interface CreateMenuResponse {
  message: string;
}
