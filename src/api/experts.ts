import { apiClient } from '@/src/api/httpClient';
import { API_ROUTES } from '@/src/constants/api';

export type TGetExpertsQueryParams = {
  _page: string;
  _limit: string;
  _sort: 'sort_order';
  _order: 'asc';
}

export type ChangeableQueryParams = Pick<TGetExpertsQueryParams, '_page' | '_limit'>

export type KeysPreservedFromCaseTransformation = Array<keyof TGetExpertsQueryParams>;

export const getExperts = async(queryParams: TGetExpertsQueryParams) => {
  const response = await apiClient.get(API_ROUTES.GET_EXPERTS, { params: queryParams });

  return {
    data: response.data,
    total: response.headers['x-total-count'] || 0
  } as Expert.GetListResponse;
};
