import { DELETE_WALLET } from '@/graphql/mutation';
import { api } from '@/services/axios';
import type {
  DeleteWalletRequestProps,
  DeleteWalletResponseProps,
} from '@/types';

export const deleteWallet = async ({ _id }: DeleteWalletRequestProps) => {
  try {
    const response = await api.post<DeleteWalletResponseProps>('/', {
      query: DELETE_WALLET,
      variables: {
        _id,
      },
    });

    return response?.data?.data?.deleteWallet;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.errors[0]?.message || 'Failed to delete wallet'
    );
  }
};
