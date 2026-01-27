// src/api/apiClient.ts
import axios from 'axios';
import { ENV } from '../constants/env';

export const apiClient = axios.create({
  baseURL: ENV.API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
