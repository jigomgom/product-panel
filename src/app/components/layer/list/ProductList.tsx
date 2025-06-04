"use client";

import React from "react";

import { useGetProducts } from "@/app/services/product";

import ProductCard from "../../card/ProductCard";

import * as S from "./ProductList.styled";

const ProductList = () => {
  const { data } = useGetProducts();

  return (
    <S.ListWrapper>
      {data?.products.length ? (
        data.products.map((product) => (
          <li key={product.id}>
            <ProductCard {...product} variant="list" />
          </li>
        ))
      ) : (
        <div>No data</div>
      )}
    </S.ListWrapper>
  );
};

export default ProductList;
