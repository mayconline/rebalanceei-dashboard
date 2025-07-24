import { CREATE_WALLET } from '@/graphql/mutation';
import { api } from '@/services/axios';
import type {
  CreateWalletRequestProps,
  CreateWalletResponseProps,
} from '@/types';

export const createWallet = async ({
  description,
}: CreateWalletRequestProps) => {
  try {
    const response = await api.post<CreateWalletResponseProps>('/', {
      query: CREATE_WALLET,
      variables: {
        description,
      },
      operationName: 'createWallet',
    });

    return response?.data?.data?.createWallet;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.errors[0]?.message || 'Failed to create wallet'
    );
  }
};
