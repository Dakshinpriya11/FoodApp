// src/api/menu.api.ts
import { apiClient } from './apiClient';

export type OrderType = 'DELIVERY' | 'DINE_IN';

export const fetchCustomerMenu = async (orderType: OrderType) => {
  const response = await apiClient.get(
    `/api/menus/customer/menu`,
    {
      params: { orderType },
    }
  );

  return response.data;
};
