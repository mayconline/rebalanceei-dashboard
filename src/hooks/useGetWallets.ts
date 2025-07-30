import { REACT_QUERY_KEYS } from '@/constants';
import { useQuery } from '@/services';
import { getWallets } from '@/services/api';
import type { WalletProps } from '@/types';

export const useGetWallets = () => {
  const { data, isPending, error, isError } = useQuery<WalletProps[]>({
    queryKey: [REACT_QUERY_KEYS.GET_WALLETS],
    queryFn: getWallets,
  });

  return {
    wallets: data,
    isPending,
    error,
    isError,
  };
};
