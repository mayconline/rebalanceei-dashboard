import { useRouter } from 'next/navigation';
import { REACT_QUERY_KEYS, ROUTES_PATH } from '@/constants';
import { useMutation, useQueryClient } from '@/services';
import { deleteWallet } from '@/services/api';
import { useModalStore } from '@/store';
import { useCurrentWallet } from '@/store/useCurrentWallet';
import type { DeleteWalletRequestProps } from '@/types';
import { handleNotify } from '@/utils';

export const useDeleteWallet = () => {
  const router = useRouter();
  const { currentWallet, resetCurrentWallet } = useCurrentWallet();
  const { openConfirmModal, setLoadingModal } = useModalStore();

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: DeleteWalletRequestProps) => deleteWallet(data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: [REACT_QUERY_KEYS.GET_WALLETS],
      });

      if (currentWallet?._id === variables._id) {
        resetCurrentWallet();
      }

      setLoadingModal(false);

      handleNotify({
        message: 'Carteira excluida com sucesso!',
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

  const handleDeleteWallet = (data: DeleteWalletRequestProps) => {
    openConfirmModal({
      title: 'Tem certeza que deseja excluir a carteira?',
      description: 'Essa operação nao pode ser desfeita',
      onConfirm: async () => await mutateAsync(data),
    });
  };

  return {
    deleteWallet: handleDeleteWallet,
    isPending,
  };
};
