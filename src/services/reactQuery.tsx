'use client';

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { THIRTY_MINUTES } from '@/constants';
import { handleNotify } from '@/utils';

export {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      handleNotify({
        message: error?.message || 'Erro ao buscar dados',
      });
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      handleNotify({
        message: error?.message || 'Erro ao buscar dados',
      });
    },
  }),
  defaultOptions: {
    queries: {
      staleTime: THIRTY_MINUTES,
    },
  },
});

export const CustomQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
