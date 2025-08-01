import { suggestionsAPI } from '@/services';
import type {
  SuggestionsListRequestProps,
  SuggestionsListResponseProps,
} from '@/types';

export const getSuggestions = async ({
  ticket,
}: SuggestionsListRequestProps) => {
  try {
    const response = await suggestionsAPI.post<SuggestionsListResponseProps>(
      '/search?',
      {
        params: {
          q: ticket,
        },
      }
    );

    return response?.data?.quotes;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.errors[0]?.message || 'Failed to fetch suggestions'
    );
  }
};
