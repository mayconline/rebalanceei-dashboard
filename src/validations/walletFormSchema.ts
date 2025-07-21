import { z } from '@/validations';

export const CreateWalletFormSchema = z.object({
  description: z
    .string()
    .min(1, { message: 'Description must be at least 1 characters long' }),
});

export const DeleteWalletFormSchema = z.object({
  _id: z.string().min(1, { message: 'Wallet ID is required' }),
});

export const UpdateWalletFormSchema = z.object({
  _id: z.string().min(1, { message: 'Wallet ID is required' }),
  description: z
    .string()
    .min(1, { message: 'Description must be at least 1 characters long' }),
});
