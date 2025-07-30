import { CREATE_TICKET } from '@/graphql/mutation';
import { api } from '@/services/axios';
import type {
  CreateTicketRequestProps,
  CreateTicketResponseProps,
} from '@/types';

export const createTicket = async ({
  name,
  symbol,
  averagePrice,
  grade,
  quantity,
  walletID,
}: CreateTicketRequestProps) => {
  try {
    const response = await api.post<CreateTicketResponseProps>('/', {
      query: CREATE_TICKET,
      variables: {
        name,
        symbol,
        averagePrice,
        grade,
        quantity,
        walletID,
      },
      operationName: 'createTicket',
    });

    return response?.data?.data?.createTicket;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.errors[0]?.message || 'Failed to create ticket'
    );
  }
};
