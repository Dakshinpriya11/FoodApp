import { apiClient } from './apiClient';

export type AddStaffRequest = {
  name: string;
  email: string;
  password: string;
};

export type AddStaffResponse = {
  id: string;
  name: string;
  email: string;
  role: 'STAFF';
};

// Only owner can call this API
export const addStaff = async (payload: AddStaffRequest): Promise<AddStaffResponse> => {
  const response = await apiClient.post('/api/users/staff', payload); // ✅ send as object
  return response.data;
};
