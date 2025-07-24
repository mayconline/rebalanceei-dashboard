import { REFRESH_TOKEN } from '@/graphql/mutation';
import { api } from '@/services/axios';
import type { UpdateRefreshTokenResponseProps } from '@/types';

export const handleRefreshToken = async (refreshToken: string) => {
  try {
    const response = await api.post<UpdateRefreshTokenResponseProps>('/', {
      query: REFRESH_TOKEN,
      variables: {
        refreshToken,
      },
      operationName: 'updateRefreshToken',
    });

    return response?.data?.data.updateRefreshToken;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.errors[0]?.message || 'Failed to refresh token'
    );
  }
};
