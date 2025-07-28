import { GET_USER_BY_TOKEN } from '@/graphql/query';
import { api } from '@/services/axios';
import type { UserResponseProps } from '@/types';

export const getUser = async () => {
  try {
    const response = await api.post<UserResponseProps>('/', {
      query: GET_USER_BY_TOKEN,
      operationName: 'getUserByToken',
    });

    return response?.data?.data?.getUserByToken;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.errors[0]?.message || 'Failed to fetch user'
    );
  }
};
