import { REACT_QUERY_KEYS } from '@/constants';
import { useQuery } from '@/services';
import { getTickets } from '@/services/api';
import { useCurrentWallet } from '@/store';
import type { TicketProps } from '@/types';

export const useGetTickets = () => {
  const currentWallet = useCurrentWallet((state) => state?.currentWallet);

  const { data, isPending, error, isError, isLoading } = useQuery<
    TicketProps[]
  >({
    queryKey: [REACT_QUERY_KEYS.GET_TICKETS, currentWallet?._id],
    queryFn: () => getTickets({ walletID: currentWallet?._id ?? '' }),
    enabled: !!currentWallet?._id,
  });

  return {
    tickets: data,
    isPending,
    error,
    isError,
    isLoading,
  };
};
