import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { REACT_QUERY_KEYS, ROUTES_PATH } from '@/constants';
import { useMutation, useQueryClient } from '@/services';
import { updateWallet } from '@/services/api';
import { useCurrentWallet } from '@/store/useCurrentWallet';
import type { UpdateWalletRequestProps } from '@/types';
import { handleNotify } from '@/utils';

export const useUpdateWallet = () => {
  const router = useRouter();
  const { currentWallet, updateDescriptionCurrentWallet } = useCurrentWallet();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
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

      router.push(ROUTES_PATH.TICKET);
    },
    onError: (error) => {
      handleNotify({
        message: error?.message || 'Erro ao atualizar a carteira',
      });
    },
  });

  useEffect(() => {
    if (!currentWallet?._id) {
      router.push(ROUTES_PATH.TICKET);
    }
  }, [currentWallet?._id, router]);

  return {
    updateWallet: (data: UpdateWalletRequestProps) => mutate(data),
    isPending,
  };
};
