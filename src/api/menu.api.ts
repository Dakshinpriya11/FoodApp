
import { apiClient } from './apiClient';

export type OrderType = 'DELIVERY' | 'DINE_IN';

// ===== Fetch customer menu =====
export const fetchCustomerMenu = async (orderType: OrderType) => {
  const response = await apiClient.get('/api/menus/customer/menu', {
    params: { orderType },
  });
  return response.data;
};

// ===== Create Menu =====
export interface CreateMenuPayload {
  name: string;
  start_time: string;
  end_time: string;
}
export interface CreateMenuResponse {
  message: string;
}
export const createMenu = async (payload: CreateMenuPayload): Promise<CreateMenuResponse> => {
  const response = await apiClient.post('/api/menus', payload);
  return response.data;
};

// ===== Fetch all menus =====
export const fetchAllMenus = async () => {
  const response = await apiClient.get('/api/menus');
  return response.data; // MenuItem[]
};

// ===== Update Menu =====
export interface UpdateMenuPayload {
  id: string;
  name: string;
  start_time: string;
  end_time: string;
}
export interface UpdateMenuResponse {
  message: string;
}
export const updateMenu = async (id: string, payload: Omit<UpdateMenuPayload, 'id'>): Promise<UpdateMenuResponse> => {
  const response = await apiClient.put(`/api/menus/${id}`, payload);
  return response.data;
};

// Delete Menu API
export const deleteMenu = async (id: string): Promise<{ message: string }> => {
  const response = await apiClient.delete(`/api/menus/${id}`);
  return response.data;
};
