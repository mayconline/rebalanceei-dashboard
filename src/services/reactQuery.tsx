'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

export const queryClient = new QueryClient();

export const CustomQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
