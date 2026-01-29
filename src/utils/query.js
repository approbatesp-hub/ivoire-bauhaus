import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 60 * 1000, // data considered fresh for 60 min
      gcTime: 60 * 60 * 1000, // keep unused data in cache for 60 min
      refetchOnWindowFocus: false,
    },
  },
});
