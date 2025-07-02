import { z } from '@/services';

export const LoginFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(1, { message: 'Password must be at least 1 characters long' }),
});
