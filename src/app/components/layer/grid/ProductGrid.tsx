"use client";

import React from "react";

import { useGetProducts } from "@/app/services/product";

import ProductCard from "../../card/ProductCard";

import * as S from "./ProductGrid.styled";

const ProductGrid = () => {
  const { data } = useGetProducts();

  return (
    <S.GridWrapper>
      {data?.products.length ? (
        data.products.map((product) => (
          <ProductCard key={product.id} {...product} variant="grid" />
        ))
      ) : (
        <div>No data</div>
      )}
    </S.GridWrapper>
  );
};

export default ProductGrid;
