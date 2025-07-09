import Axios from 'axios';
import {
  handleInterceptorErrorResponseAPI,
  handleInterceptorRequestAPI,
} from './handleInterceptorAPI';

export const api = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_API_URL,
});

api.interceptors.request.use((config) => {
  return handleInterceptorRequestAPI(config);
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return await handleInterceptorErrorResponseAPI(api, error);
  }
);
