import { useEffect } from 'react';
import { REACT_QUERY_KEYS } from '@/constants';
import { useQuery } from '@/services';
import { getWallets } from '@/services/api';
import type { WalletProps } from '@/types';
import { handleNotify } from '@/utils';

export const useGetWallets = () => {
  const { data, isPending, error, isError } = useQuery<WalletProps[]>({
    queryKey: [REACT_QUERY_KEYS.GET_WALLETS],
    queryFn: getWallets,
  });

  useEffect(() => {
    if (isError) {
      handleNotify({
        message: error?.message || 'Erro ao buscar carteiras',
      });
    }
  }, [error, isError]);

  return {
    wallets: data,
    isPending,
    error,
    isError,
  };
};
