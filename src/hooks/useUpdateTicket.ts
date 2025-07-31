import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { REACT_QUERY_KEYS, ROUTES_PATH } from '@/constants';
import { useMutation, useQueryClient } from '@/services';
import { updateTicket } from '@/services/api';
import { useCurrentTicket, useModalStore } from '@/store';
import { useCurrentWallet } from '@/store/useCurrentWallet';
import type { UpdateTicketRequestProps } from '@/types';
import { handleNotify } from '@/utils';

export const useUpdateTicket = () => {
  const router = useRouter();
  const currentWallet = useCurrentWallet((state) => state?.currentWallet);
  const currentTicket = useCurrentTicket((state) => state?.currentTicket);
  const { openConfirmModal, setLoadingModal } = useModalStore();

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: UpdateTicketRequestProps) => updateTicket(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [REACT_QUERY_KEYS.GET_TICKETS, currentWallet?._id],
      });
      queryClient.invalidateQueries({
        queryKey: [REACT_QUERY_KEYS.GET_WALLETS],
      });

      setLoadingModal(false);

      handleNotify({
        message: `${data?.symbol} atualizado com sucesso!`,
      });

      router.push(ROUTES_PATH.TICKET);
    },
    onError: () => {
      setLoadingModal(false);
    },
    onMutate: () => {
      setLoadingModal(true);
    },
  });

  useEffect(() => {
    if (!(currentWallet?._id || currentTicket?._id)) {
      router.push(ROUTES_PATH.TICKET);
    }
  }, [currentWallet?._id, currentTicket?._id, router]);

  const handleUpdateTicket = (data: UpdateTicketRequestProps) => {
    openConfirmModal({
      title: 'Tem certeza que deseja alterar o ativo?',
      onConfirm: async () => await mutateAsync(data),
    });
  };

  return {
    updateTicket: handleUpdateTicket,
    isPending,
  };
};
