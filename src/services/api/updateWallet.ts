import { UPDATE_WALLET } from '@/graphql/mutation';
import { api } from '@/services/axios';
import type {
  UpdateWalletRequestProps,
  UpdateWalletResponseProps,
} from '@/types';

export const updateWallet = async ({
  _id,
  description,
}: UpdateWalletRequestProps) => {
  try {
    const response = await api.post<UpdateWalletResponseProps>('/', {
      query: UPDATE_WALLET,
      variables: {
        _id,
        description,
      },
    });

    return response?.data?.data?.updateWallet;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.errors[0]?.message || 'Failed to update wallet'
    );
  }
};
