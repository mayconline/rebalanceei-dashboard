import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { REACT_QUERY_KEYS, ROUTES_PATH } from '@/constants';
import { useMutation, useQueryClient } from '@/services';
import { updateWallet } from '@/services/api';
import { useModalStore } from '@/store';
import { useCurrentWallet } from '@/store/useCurrentWallet';
import type { UpdateWalletRequestProps } from '@/types';
import { handleNotify } from '@/utils';

export const useUpdateWallet = () => {
  const router = useRouter();
  const { currentWallet, updateDescriptionCurrentWallet } = useCurrentWallet();
  const { openConfirmModal, setLoadingModal } = useModalStore();

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: UpdateWalletRequestProps) => updateWallet(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [REACT_QUERY_KEYS.GET_WALLETS],
      });

      if (currentWallet?._id === data._id) {
        updateDescriptionCurrentWallet(data?.description);
      }

      setLoadingModal(false);

      handleNotify({
        message: 'Carteira atualizada com sucesso!',
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
    if (!currentWallet?._id) {
      router.push(ROUTES_PATH.TICKET);
    }
  }, [currentWallet?._id, router]);

  const handleUpdateWallet = (data: UpdateWalletRequestProps) => {
    openConfirmModal({
      title: 'Tem certeza que deseja alterar a carteira?',
      onConfirm: async () => await mutateAsync(data),
    });
  };

  return {
    updateWallet: handleUpdateWallet,
    isPending,
  };
};
