import Image from "next/image";

import type { GetProductsModel } from "@/types/product";

import * as S from "./ProductCard.styled";

interface ProductCardProps
  extends Omit<GetProductsModel["products"][number], "id"> {
  variant?: "grid" | "list";
}

const ProductCard = ({
  title,
  description,
  thumbnail,
  rating,
  reviews,
  variant = "grid",
}: ProductCardProps) => {
  return (
    <S.Card variant={variant}>
      <Image
        src={thumbnail}
        alt={title}
        width={variant === "list" ? 120 : 400}
        height={variant === "list" ? 120 : 300}
        style={{ objectFit: "cover", borderRadius: "6px" }}
      />
      <div>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Rating>
          ⭐ {rating} / 5{" "}
          <S.ReviewCount>({reviews.length} reviews)</S.ReviewCount>
        </S.Rating>
      </div>
    </S.Card>
  );
};

export default ProductCard;
