import { z } from '@/validations';

const envSchema = z.object({
  NEXT_PUBLIC_BACK_API_URL: z.string(),
  NEXT_PUBLIC_PRIVACY_POLICY_URL: z.string(),
  NEXT_PUBLIC_SUGGESTIONS_API_URL: z.string(),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_BACK_API_URL: process.env.NEXT_PUBLIC_BACK_API_URL,
  NEXT_PUBLIC_PRIVACY_POLICY_URL: process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL,
  NEXT_PUBLIC_SUGGESTIONS_API_URL: process.env.NEXT_PUBLIC_SUGGESTIONS_API_URL,
});
