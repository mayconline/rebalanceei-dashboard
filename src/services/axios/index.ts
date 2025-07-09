import Axios from 'axios';
import { env } from '@/services';
import {
  handleInterceptorErrorResponseAPI,
  handleInterceptorRequestAPI,
  handleInterceptorResponseAPI,
} from './handleInterceptorAPI';

export const api = Axios.create({
  baseURL: env.NEXT_PUBLIC_BACK_API_URL,
});

api.interceptors.request.use((config) => {
  return handleInterceptorRequestAPI(config);
});

api.interceptors.response.use(
  (response) => {
    return handleInterceptorResponseAPI(response);
  },
  async (error) => {
    return await handleInterceptorErrorResponseAPI(api, error);
  }
);
