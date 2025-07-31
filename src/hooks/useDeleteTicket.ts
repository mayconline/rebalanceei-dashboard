import { useRouter } from 'next/navigation';
import { REACT_QUERY_KEYS, ROUTES_PATH } from '@/constants';
import { useMutation, useQueryClient } from '@/services';
import { deleteTicket } from '@/services/api';
import { useCurrentWallet, useModalStore } from '@/store';
import type { DeleteTicketRequestProps } from '@/types';
import { handleNotify } from '@/utils';

export const useDeleteTicket = () => {
  const router = useRouter();
  const currentWallet = useCurrentWallet((state) => state?.currentWallet);
  const { openConfirmModal, setLoadingModal } = useModalStore();

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: DeleteTicketRequestProps) => deleteTicket(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [REACT_QUERY_KEYS.GET_TICKETS, currentWallet?._id],
      });
      queryClient.invalidateQueries({
        queryKey: [REACT_QUERY_KEYS.GET_WALLETS],
      });

      setLoadingModal(false);

      handleNotify({
        message: 'Ativo excluido com sucesso!',
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

  const handleDeleteTicket = (data: DeleteTicketRequestProps) => {
    openConfirmModal({
      title: 'Tem certeza que deseja excluir o ativo?',
      description: 'Essa operação nao pode ser desfeita',
      onConfirm: async () => await mutateAsync(data),
    });
  };

  return {
    deleteTicket: handleDeleteTicket,
    isPending,
  };
};
