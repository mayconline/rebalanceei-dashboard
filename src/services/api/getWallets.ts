import { GET_WALLETS_BY_USER } from '@/graphql/query';
import { api } from '@/services/axios';
import type { WalletsResponseProps } from '@/types';

export const getWallets = async () => {
  try {
    const response = await api.post<WalletsResponseProps>('/', {
      query: GET_WALLETS_BY_USER,
    });

    return response?.data?.data?.getWalletByUser;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.errors[0]?.message || 'Failed to fetch wallets'
    );
  }
};
