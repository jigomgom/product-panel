import ax from "../axiosInstance";

import type { GetProductsModel } from "@/types/product";

export const getProductsAPI = async () => {
  const { data } = await ax.get<GetProductsModel>("/product", {
    params: { limit: 20 },
  });

  return data;
};
