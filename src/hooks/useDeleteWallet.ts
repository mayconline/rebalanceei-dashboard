import { useRouter } from 'next/navigation';
import { REACT_QUERY_KEYS, ROUTES_PATH } from '@/constants';
import { useMutation, useQueryClient } from '@/services';
import { deleteWallet } from '@/services/api';
import { useCurrentWallet } from '@/store/useCurrentWallet';
import type { DeleteWalletRequestProps } from '@/types';
import { handleNotify } from '@/utils';

export const useDeleteWallet = () => {
  const router = useRouter();
  const { currentWallet, resetCurrentWallet } = useCurrentWallet();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
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

      router.push(ROUTES_PATH.TICKET);
    },
    onError: (error) => {
      handleNotify({
        message: error?.message || 'Erro ao atualizar a carteira',
      });
    },
  });

  return {
    deleteWallet: (data: DeleteWalletRequestProps) => mutate(data),
    isPending,
  };
};
