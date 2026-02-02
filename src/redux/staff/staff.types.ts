export interface Staff {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface AddStaffPayload {
  name: string;
  email: string;
  password: string;
}

export interface StaffState {
  data: Staff[];
  loading: boolean;
  error: string | null;
  success: boolean;
}
