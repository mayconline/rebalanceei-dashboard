import { REACT_QUERY_KEYS } from '@/constants';
import { useQuery } from '@/services';
import { getSuggestions } from '@/services/api';
import type { SuggestionProps } from '@/types';

interface UseGetSuggestionsProps {
  ticketSearched: string;
}

export const useGetSuggestions = ({
  ticketSearched,
}: UseGetSuggestionsProps) => {
  const { data, isPending, error, isError, isLoading } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_SUGGESTIONS, ticketSearched],
    queryFn: () => getSuggestions({ ticket: ticketSearched }),
    enabled: !!ticketSearched,
    select: (result: SuggestionProps[]) => {
      return result?.map((item) => ({
        id: item?.symbol,
        name: item?.longname,
      }));
    },
  });

  return {
    suggestionsList: data ?? null,
    isPending,
    error,
    isError,
    isLoading,
  };
};
