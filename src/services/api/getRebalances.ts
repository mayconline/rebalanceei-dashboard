import { REBALANCES } from '@/graphql/query';
import { api } from '@/services/axios';
import type { RebalancesRequestProps, RebalancesResponseProps } from '@/types';

export const getRebalances = async ({
  walletID,
  sort = 'targetAmount',
}: RebalancesRequestProps) => {
  try {
    const response = await api.post<RebalancesResponseProps>('/', {
      query: REBALANCES,
      variables: {
        walletID,
        sort,
      },
      operationName: 'rebalances',
    });

    return response?.data?.data?.rebalances;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.errors[0]?.message || 'Failed to fetch rebalances'
    );
  }
};
