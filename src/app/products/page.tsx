import React, { Suspense } from "react";

import { cookies } from "next/headers";

import ProductList from "../components/layer/list/ProductList";
import ProductGrid from "../components/layer/grid/ProductGrid";

import * as S from "./page.styled";

const Products = async () => {
  const cookieStore = await cookies();

  const customCookie = cookieStore.get("render")?.value;
  const selectedMode = customCookie?.split("|")[0] ?? "grid";

  const renderer = () => {
    return selectedMode === "list" ? (
      <Suspense>
        <ProductList />
      </Suspense>
    ) : (
      <Suspense>
        <ProductGrid />
      </Suspense>
    );
  };

  return (
    <>
      <S.Header>
        <S.ProductLink href="/products/create">제품 생성</S.ProductLink>
      </S.Header>
      <S.Section>{renderer()}</S.Section>
    </>
  );
};

export default Products;
