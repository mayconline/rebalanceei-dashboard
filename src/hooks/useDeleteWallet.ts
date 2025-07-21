import { REACT_QUERY_KEYS } from '@/constants';
import { useMutation, useQueryClient } from '@/services';
import { deleteWallet } from '@/services/api';
import { useCurrentWallet } from '@/store/useCurrentWallet';
import type { DeleteWalletRequestProps } from '@/types';
import { handleNotify } from '@/utils';

export const useDeleteWallet = () => {
  const queryClient = useQueryClient();
  const { currentWallet, resetCurrentWallet } = useCurrentWallet();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: DeleteWalletRequestProps) => deleteWallet(data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: [REACT_QUERY_KEYS.GET_WALLETS],
      });

      if (currentWallet?._id === variables._id) {
        resetCurrentWallet();
      }

      handleNotify({
        message: 'Carteira deletada com sucesso!',
      });
    },
    onError: (error) => {
      handleNotify({
        message: error?.message || 'Erro ao atualizar a carteira',
      });
    },
  });

  return {
    deleteWallet: mutateAsync,
    isPending,
  };
};
