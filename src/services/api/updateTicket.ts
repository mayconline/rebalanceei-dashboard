import { UPDATE_TICKET } from '@/graphql/mutation';
import { api } from '@/services/axios';
import type {
  UpdateTicketRequestProps,
  UpdateTicketResponseProps,
} from '@/types';

export const updateTicket = async ({
  _id,
  name,
  symbol,
  averagePrice,
  grade,
  quantity,
}: UpdateTicketRequestProps) => {
  try {
    const response = await api.post<UpdateTicketResponseProps>('/', {
      query: UPDATE_TICKET,
      variables: {
        _id,
        name,
        symbol,
        averagePrice,
        grade,
        quantity,
      },
      operationName: 'updateTicket',
    });

    return response?.data?.data?.updateTicket;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.errors[0]?.message || 'Failed to update ticket'
    );
  }
};
