import { DELETE_TICKET } from '@/graphql/mutation';
import { api } from '@/services/axios';
import type {
  DeleteTicketRequestProps,
  DeleteTicketResponseProps,
} from '@/types';

export const deleteTicket = async ({
  _id,
  walletID,
}: DeleteTicketRequestProps) => {
  try {
    const response = await api.post<DeleteTicketResponseProps>('/', {
      query: DELETE_TICKET,
      variables: {
        _id,
        walletID,
      },
      operationName: 'deleteTicket',
    });

    return response?.data?.data?.deleteTicket;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.errors[0]?.message || 'Failed to delete ticket'
    );
  }
};
