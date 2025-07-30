import { z } from '@/validations';

const walletFields = {
  _id: z.string().min(1, { message: 'Wallet ID is required' }),
  description: z
    .string()
    .min(1, { message: 'Description must be at least 1 characters long' }),
};

export const CreateWalletFormSchema = z.object({
  description: walletFields.description,
});

export const DeleteWalletFormSchema = z.object({
  _id: walletFields._id,
});

export const UpdateWalletFormSchema = z.object({
  _id: walletFields._id,
  description: walletFields.description,
});
