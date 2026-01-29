
import { apiClient } from './apiClient';

export type ChangeAvailabilityRequest = {
  is_available: boolean;
};

export type ChangeAvailabilityResponse = {
  message: string;
};

export const changeAvailability = async (
  itemId: number,
  is_available: boolean
): Promise<ChangeAvailabilityResponse> => {
  const response = await apiClient.patch(
    `/api/items/${itemId}/availability`,
    { is_available } // ✅ always send an object
  );

  return response.data;
};
