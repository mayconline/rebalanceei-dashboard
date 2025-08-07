import { REACT_QUERY_KEYS } from '@/constants';
import { useQuery } from '@/services';
import { getRebalances } from '@/services/api';
import { useCurrentWallet } from '@/store';
import type { RebalancesProps } from '@/types';

export const useGetRebalances = () => {
  const currentWallet = useCurrentWallet((state) => state?.currentWallet);

  const { data, isPending, error, isError, isLoading } = useQuery<
    RebalancesProps[]
  >({
    queryKey: [REACT_QUERY_KEYS.GET_REBALANCES, currentWallet?._id],
    queryFn: () => getRebalances({ walletID: currentWallet?._id ?? '' }),
    enabled: !!currentWallet?._id,
  });

  return {
    rebalances: data,
    isPending,
    error,
    isError,
    isLoading,
  };
};
