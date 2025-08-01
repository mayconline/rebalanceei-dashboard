import axios from 'axios';
import type {
  SuggestionsListRequestProps,
  SuggestionsListResponseProps,
} from '@/types';

export const getSuggestions = async ({
  ticket,
}: SuggestionsListRequestProps) => {
  try {
    const response = await axios.post<SuggestionsListResponseProps>(
      '/api/suggestions',
      { ticket }
    );

    return response?.data?.quotes;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.error || 'Failed to fetch suggestions'
    );
  }
};
