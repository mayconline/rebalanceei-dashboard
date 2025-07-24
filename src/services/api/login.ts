import { LOGIN } from '@/graphql/mutation';
import { api } from '@/services/axios';
import type { LoginRequestProps, LoginResponseProps } from '@/types';

export const login = async ({ email, password }: LoginRequestProps) => {
  try {
    const response = await api.post<LoginResponseProps>('/', {
      query: LOGIN,
      variables: {
        email,
        password,
      },
      operationName: 'login',
    });

    return response?.data?.data?.login;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.errors[0]?.message || 'Failed to login user'
    );
  }
};
