import { GET_RENTABILITY } from '@/graphql/query';
import { api } from '@/services/axios';
import type {
  rentabilityRequestProps,
  rentabilityResponseProps,
} from '@/types';

export const getRentability = async ({
  walletID,
  sort = 'currentAmount',
}: rentabilityRequestProps) => {
  try {
    const response = await api.post<rentabilityResponseProps>('/', {
      query: GET_RENTABILITY,
      variables: {
        walletID,
        sort,
      },
      operationName: 'getRentability',
    });

    return response?.data?.data?.getRentability;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.errors[0]?.message || 'Failed to fetch rentability'
    );
  }
};
