import { b } from 'msw/lib/SetupApi-f4099ef3';
import useSWR from 'swr';
import { API_ROUTES } from '@/src/constants/api';
import { getExpert } from '@/src/api/expert';

type ReturnType = {
  expert: Expert.Picked | undefined;
  expertIsLoading: boolean;
  expertHasError: boolean;
}

function useExpert(
  id: string,
  fallbackData: Expert.Entity
): ReturnType {
  const { data, error, isLoading } = useSWR(API_ROUTES.GET_EXPERT(id), () => getExpert(id), {
    revalidateOnMount: false,
    fallbackData: fallbackData
  });

  return {
    expert: {
      id: data.id,
      name: data.name,
      status: data.status,
      image: data.image,
      specializations: data.specializations,
      description: data.description,
      experience: data.experience,
      totalOrders: data.totalOrders
    },
    expertIsLoading: isLoading,
    expertHasError: !!error
  };
}

export default useExpert;
