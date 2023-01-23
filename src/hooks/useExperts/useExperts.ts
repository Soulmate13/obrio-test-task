import useSWR, { unstable_serialize } from 'swr';
import { EXPERTS_DEFAULT_QUERY_PARAMS, EXPERTS_PER_PAGE } from '@/src/constants/api';
import { getExperts, TGetExpertsQueryParams } from '@/src/api/experts';

function useExperts(
  page: string,
  fallbackData: Expert.GetListResponse,
  limit = EXPERTS_PER_PAGE
) {
  const queryParams: TGetExpertsQueryParams = {
    _page: page,
    _limit: limit,
    ...EXPERTS_DEFAULT_QUERY_PARAMS
  };

  const { data, error, isLoading } = useSWR([unstable_serialize(queryParams)], () => getExperts(queryParams), {
    revalidateOnMount: false,
    fallbackData: fallbackData
  });

  return {
    experts: data.data,
    total: data.total,
    expertsAreLoading: isLoading,
    expertsHaveError: !!error
  };
}

export default useExperts;
