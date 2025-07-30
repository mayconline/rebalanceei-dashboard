import { useRouter } from 'next/navigation';
import { REACT_QUERY_KEYS, ROUTES_PATH } from '@/constants';
import { useMutation, useQueryClient } from '@/services';
import { createWallet } from '@/services/api';
import { useCurrentWallet } from '@/store/useCurrentWallet';
import type { CreateWalletRequestProps } from '@/types';
import { handleNotify } from '@/utils';

export const useCreateWallet = () => {
  const router = useRouter();
  const setCurrentWallet = useCurrentWallet((state) => state.setCurrentWallet);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: CreateWalletRequestProps) => createWallet(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [REACT_QUERY_KEYS.GET_WALLETS],
      });
      setCurrentWallet(data);
      handleNotify({
        message: 'Carteira criada com sucesso!',
      });

      router.push(ROUTES_PATH.TICKET);
    },
  });

  return {
    createWallet: (data: CreateWalletRequestProps) => mutate(data),
    isPending,
  };
};
