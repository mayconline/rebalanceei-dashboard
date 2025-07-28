import { GET_TICKETS_BY_WALLET } from '@/graphql/query';
import { api } from '@/services/axios';
import type { TicketRequestProps, TicketResponseProps } from '@/types';

export const getTickets = async ({
  walletID,
  sort = 'grade',
}: TicketRequestProps) => {
  try {
    const response = await api.post<TicketResponseProps>('/', {
      query: GET_TICKETS_BY_WALLET,
      variables: {
        walletID,
        sort,
      },
      operationName: 'getTicketsByWallet',
    });

    return response?.data?.data?.getTicketsByWallet;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.errors[0]?.message || 'Failed to fetch tickets'
    );
  }
};
