import { z } from '@/validations';

export const SignUpFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(1, { message: 'Password must be at least 1 characters long' }),
  checkTerms: z.boolean().refine((val) => val, {
    message: 'You must accept the terms and conditions',
  }),
});
