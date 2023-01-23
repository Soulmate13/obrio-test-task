import { apiClient } from '@/src/api/httpClient';
import { API_ROUTES } from '@/src/constants/api';

export const getExpert = async(id: string) => {
  const response: Expert.GetSingleResponse = await apiClient.get(API_ROUTES.GET_EXPERT(id));

  return response.data;
};
