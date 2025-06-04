"use client";

import React from "react";

import ProductCardSkeleton from "../../card/ProductCard.skeleton";

import * as S from "./ProductGrid.styled";

const ProductGridSkeleton = () => {
  return (
    <S.GridWrapper>
      {Array.from({ length: 6 }).map((_, idx) => (
        <ProductCardSkeleton key={idx} variant="grid" />
      ))}
    </S.GridWrapper>
  );
};

export default ProductGridSkeleton;
