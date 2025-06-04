import { useQuery } from "@tanstack/react-query";

import { getProductsAPI } from "../lib/query/product";

export const useGetProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: getProductsAPI,
    staleTime: 60 * 1000, // 1분 동안은 refetch 안 함
    refetchInterval: 60 * 1000, // 1분마다 자동 refetch
  });
