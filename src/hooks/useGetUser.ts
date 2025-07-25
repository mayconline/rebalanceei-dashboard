import { useEffect } from 'react';
import { REACT_QUERY_KEYS } from '@/constants';
import { useQuery } from '@/services';
import { getUser } from '@/services/api';
import type { UserProps } from '@/types';
import { handleNotify } from '@/utils';

export const useGetUser = () => {
  const { data, isPending, error, isError } = useQuery<UserProps>({
    queryKey: [REACT_QUERY_KEYS.GET_USER],
    queryFn: getUser,
  });

  useEffect(() => {
    if (isError) {
      handleNotify({
        message: error?.message || 'Erro ao buscar usuário',
      });
    }
  }, [error, isError]);

  return {
    user: data,
    isPending,
    error,
    isError,
  };
};
