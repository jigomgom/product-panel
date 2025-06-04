import * as S from "./ProductCard.styled";

interface ProductCardSkeletonProps {
  variant?: "grid" | "list";
}

const ProductCardSkeleton = ({
  variant = "grid",
}: ProductCardSkeletonProps) => {
  return (
    <S.Card variant={variant}>
      <S.SkeletonImage variant={variant} />
      <div>
        <S.SkeletonText
          style={{
            width: variant === "grid" ? "70%" : "700px",
            height: "20px",
            margin: "8px 0",
          }}
        />
        <S.SkeletonText
          style={{
            width: variant === "grid" ? "90%" : "900px",
            height: "16px",
            marginBottom: "6px",
          }}
        />
        <S.SkeletonText
          style={{
            width: variant === "grid" ? "40%" : "400px",
            height: "14px",
          }}
        />
      </div>
    </S.Card>
  );
};

export default ProductCardSkeleton;
