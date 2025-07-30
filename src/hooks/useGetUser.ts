import { REACT_QUERY_KEYS } from '@/constants';
import { useQuery } from '@/services';
import { getUser } from '@/services/api';
import type { UserProps } from '@/types';

export const useGetUser = () => {
  const { data, isPending, error, isError } = useQuery<UserProps>({
    queryKey: [REACT_QUERY_KEYS.GET_USER],
    queryFn: getUser,
  });

  return {
    user: data,
    isPending,
    error,
    isError,
  };
};
