"use client";

import React from "react";

import ProductCardSkeleton from "../../card/ProductCard.skeleton";

import * as S from "./ProductList.styled";

const ProductListSkeleton = () => {
  return (
    <S.ListWrapper>
      {Array.from({ length: 6 }).map((_, i) => (
        <ProductCardSkeleton key={i} variant="list" />
      ))}
    </S.ListWrapper>
  );
};

export default ProductListSkeleton;
