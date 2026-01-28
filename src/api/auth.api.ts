// src/api/auth.api.ts
import { apiClient } from './apiClient';

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  id: number;
  name: string;
  role: 'OWNER' | 'STAFF';
  token: string;
};

export const login = async (payload: LoginRequest): Promise<LoginResponse> => {
  const response = await apiClient.post('/api/auth/login', payload);
  return response.data;
};
