import { TGetExpertsQueryParams } from '@/src/api/experts';

export const API_URL = 'http://localhost:3004';

export const API_ROUTES = {
  GET_EXPERTS: '/api/experts',
  GET_EXPERT: (id: string) => `/api/experts/${id}`
};

export const EXPERTS_PER_PAGE = '4';

export const EXPERTS_DEFAULT_QUERY_PARAMS: Pick<TGetExpertsQueryParams, '_sort' | '_order'> = {
  _sort: 'sort_order',
  _order: 'asc'
};
