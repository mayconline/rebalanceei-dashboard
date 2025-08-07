import { REACT_QUERY_KEYS } from '@/constants';
import { useQuery } from '@/services';
import { getRentability } from '@/services/api';
import { useCurrentWallet } from '@/store';
import type { rentabilityProps } from '@/types';

export const useGetRentability = () => {
  const currentWallet = useCurrentWallet((state) => state?.currentWallet);

  const { data, isPending, error, isError, isLoading } = useQuery<
    rentabilityProps[]
  >({
    queryKey: [REACT_QUERY_KEYS.GET_RENTABILITIES, currentWallet?._id],
    queryFn: () => getRentability({ walletID: currentWallet?._id ?? '' }),
    enabled: !!currentWallet?._id,
  });

  return {
    rentabilities: data,
    isPending,
    error,
    isError,
    isLoading,
  };
};
