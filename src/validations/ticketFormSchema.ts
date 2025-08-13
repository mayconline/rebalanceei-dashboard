import { z } from '@/validations';

const ticketFields = {
  walletID: z.string().min(1, { message: 'Wallet ID is required' }),
  _id: z.string().min(1, { message: 'Ticket ID is required' }),
  symbol: z
    .string()
    .min(1, { message: 'Symbol must be at least 1 characters long' }),
  name: z
    .string()
    .min(1, { message: 'Name must be at least 1 characters long' }),
  quantity: z.number({ message: 'Quantity is required' }),
  averagePrice: z.number({ message: 'Average price is required' }),
  grade: z.number({ message: 'Grade is required' }),
};

export const CreateTicketFormSchema = z.object({
  walletID: ticketFields.walletID,
  symbol: ticketFields.symbol,
  name: ticketFields.name,
  quantity: ticketFields.quantity,
  averagePrice: ticketFields.averagePrice,
  grade: ticketFields.grade,
});

export const DeleteTicketFormSchema = z.object({
  _id: ticketFields._id,
  walletID: ticketFields.walletID,
});

export const UpdateTicketFormSchema = z.object({
  _id: ticketFields._id,
  symbol: ticketFields.symbol,
  name: ticketFields.name,
  quantity: ticketFields.quantity,
  averagePrice: ticketFields.averagePrice,
  grade: ticketFields.grade,
});
