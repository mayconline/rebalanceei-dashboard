import { useEffect } from 'react';
import { REACT_QUERY_KEYS } from '@/constants';
import { useQuery } from '@/services';
import { getWallets } from '@/services/api';
import { useCurrentWallet } from '@/store/useCurrentWallet';
import type { WalletProps } from '@/types';
import { handleNotify } from '@/utils';

export const useGetWallets = () => {
  const { currentWallet, setCurrentWallet } = useCurrentWallet();
  const { data, isPending, error, isError, isSuccess } = useQuery<
    WalletProps[]
  >({
    queryKey: [REACT_QUERY_KEYS.GET_WALLETS],
    queryFn: getWallets,
  });

  useEffect(() => {
    if (isSuccess && !currentWallet?._id) {
      setCurrentWallet(data[0]);
    }
  }, [setCurrentWallet, data, isSuccess, currentWallet?._id]);

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
    isSuccess,
    isError,
  };
};
