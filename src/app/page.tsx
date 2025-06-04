import { QueryClient } from "@tanstack/react-query";

import { getProductsAPI } from "./lib/query/product";

import Products from "./products/Products";

const Home = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getProductsAPI,
  });

  return <Products />;
};

export default Home;
