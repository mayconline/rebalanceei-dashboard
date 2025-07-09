import { CREATE_USER } from '@/graphql/mutation';
import { api } from '@/services/axios';
import type { SignUpRequestProps, SignUpResponseProps } from '@/types';

export const signUp = async ({
  email,
  password,
  checkTerms,
}: SignUpRequestProps) => {
  try {
    const response = await api.post<SignUpResponseProps>('/', {
      query: CREATE_USER,
      variables: {
        email,
        password,
        checkTerms,
      },
    });

    return response?.data?.data?.createUser;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.errors[0]?.message || 'Failed to create user'
    );
  }
};
