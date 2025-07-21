import { REACT_QUERY_KEYS } from '@/constants';
import { useMutation, useQueryClient } from '@/services';
import { updateWallet } from '@/services/api';
import { useCurrentWallet } from '@/store/useCurrentWallet';
import type { UpdateWalletRequestProps } from '@/types';
import { handleNotify } from '@/utils';

export const useUpdateWallet = () => {
  const queryClient = useQueryClient();
  const { currentWallet, updateDescriptionCurrentWallet } = useCurrentWallet();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: UpdateWalletRequestProps) => updateWallet(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [REACT_QUERY_KEYS.GET_WALLETS],
      });

      if (currentWallet?._id === data._id) {
        updateDescriptionCurrentWallet(data?.description);
      }

      handleNotify({
        message: 'Carteira atualizada com sucesso!',
      });
    },
    onError: (error) => {
      handleNotify({
        message: error?.message || 'Erro ao atualizar a carteira',
      });
    },
  });

  return {
    updateWallet: mutateAsync,
    isPending,
  };
};
