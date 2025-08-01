import Axios from 'axios';
import { env } from '@/services';

export const suggestionsAPI = Axios.create({
  baseURL: env.NEXT_PUBLIC_SUGGESTIONS_API_URL,
});
