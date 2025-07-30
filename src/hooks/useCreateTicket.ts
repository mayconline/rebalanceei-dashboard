import { useRouter } from 'next/navigation';
import { REACT_QUERY_KEYS, ROUTES_PATH } from '@/constants';
import { useMutation, useQueryClient } from '@/services';
import { createTicket } from '@/services/api';
import type { CreateTicketRequestProps } from '@/types';
import { handleNotify } from '@/utils';

export const useCreateTicket = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: CreateTicketRequestProps) => createTicket(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [REACT_QUERY_KEYS.GET_TICKETS, REACT_QUERY_KEYS.GET_WALLETS],
      });

      handleNotify({
        message: `${data?.symbol} adicionado com sucesso!`,
      });

      router.push(ROUTES_PATH.TICKET);
    },
  });

  return {
    createTicket: (data: CreateTicketRequestProps) => mutate(data),
    isPending,
  };
};
