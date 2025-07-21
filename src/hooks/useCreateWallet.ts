import { REACT_QUERY_KEYS } from '@/constants';
import { useMutation, useQueryClient } from '@/services';
import { createWallet } from '@/services/api';
import { useCurrentWallet } from '@/store/useCurrentWallet';
import type { CreateWalletRequestProps } from '@/types';
import { handleNotify } from '@/utils';

export const useCreateWallet = () => {
  const queryClient = useQueryClient();
  const { setCurrentWallet } = useCurrentWallet();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: CreateWalletRequestProps) => createWallet(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [REACT_QUERY_KEYS.GET_WALLETS],
      });
      setCurrentWallet(data);
      handleNotify({
        message: 'Carteira criada com sucesso!',
      });
    },
    onError: (error) => {
      handleNotify({
        message: error?.message || 'Erro ao criar carteira',
      });
    },
  });

  return {
    createWallet: mutateAsync,
    isPending,
  };
};
