
export interface MenuItem {
  id: string;
  name: string;
  start_time?: string;
  end_time?: string;
  is_active?: number;
}

export interface MenuState {
  /* CUSTOMER */
  data: MenuItem[];
  loading: boolean;
  error: string | null;

  /* OWNER */
  allMenus: MenuItem[];
  allMenusLoading: boolean;
  allMenusError: string | null;

  /* CREATE */
  createLoading: boolean;
  createError: string | null;
  createSuccess: boolean;

  /* UPDATE */
  updateLoading: boolean;
  updateError: string | null;
  updateSuccess: boolean;

  /* DELETE */
  deleteLoading: boolean;
  deleteError: string | null;
  deleteSuccess: boolean;
}

export interface CreateMenuPayload {
  name: string;
  start_time: string;
  end_time: string;
}

export interface UpdateMenuPayload {
  id: string;
  name: string;
  start_time: string;
  end_time: string;
}
