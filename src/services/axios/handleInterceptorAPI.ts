import type { AxiosInstance } from 'axios';
import { handleRefreshToken } from '@/services/api';
import {
  handleDeleteAuthToken,
  handleGetAuthToken,
  handleSetAuthToken,
} from '@/services/cookies';

export const handleInterceptorRequestAPI = (configRequest: any) => {
  const { accessToken } = handleGetAuthToken();

  configRequest.headers.Authorization = accessToken
    ? `Bearer ${accessToken}`
    : '';

  return configRequest;
};

export const handleInterceptorResponseAPI = (response: any) => {
  if (response?.data?.errors) {
    return Promise.reject({ response });
  }
  return response;
};

export const handleInterceptorErrorResponseAPI = async (
  api: AxiosInstance,
  error: any
) => {
  const configResponse = error.config;

  if (error?.code === 'ERR_NETWORK') {
    error.message = 'Error connecting to server';
  }

  const hasInvalidToken = error?.response?.data?.errors?.some(
    (err: any) =>
      err?.message === 'Context creation failed: Token Invalid or Expired'
  );

  const { refreshToken } = handleGetAuthToken();

  if (hasInvalidToken && !!refreshToken) {
    configResponse.sent = true;

    try {
      const { token: accessToken, refreshToken: newRefreshToken } =
        await handleRefreshToken(String(refreshToken));

      handleSetAuthToken({ accessToken, refreshToken: newRefreshToken });

      configResponse.headers = {
        ...configResponse.headers,
        Authorization: `Bearer ${accessToken}`,
      };

      return api(configResponse);
    } catch (err: any) {
      handleDeleteAuthToken();
      window.location.href = '/';
      return Promise.reject(err);
    }
  }

  return Promise.reject(error);
};
