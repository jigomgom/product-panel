"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import * as S from "./ProductForm.styled";

const BRAND_OPTIONS = ["Apple", "Samsung", "Weebur"];

interface FormValues {
  title: string;
  description?: string;
  price: number;
  discountPercentage?: number;
  brand: (typeof BRAND_OPTIONS)[number];
}

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const router = useRouter();
  const price = watch("price") || 0;
  const discount = watch("discountPercentage") || 0;
  const finalPrice = (price * (1 - discount / 100)).toFixed(2);

  const onSubmit = (data: FormValues) => {
    console.log("submit:", data);

    router.push("/products");
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Grid>
        <S.Label>상품명 *</S.Label>
        <S.Input
          {...register("title", {
            required: "상품명을 입력해주세요",
            maxLength: { value: 15, message: "15자 이하로 입력해주세요" },
          })}
        />
      </S.Grid>
      {errors.title && <S.ErrorText>{errors.title.message}</S.ErrorText>}

      <S.Grid>
        <S.Label>설명</S.Label>
        <S.Textarea {...register("description")} rows={3} />
      </S.Grid>

      <S.Grid>
        <S.Label>가격 (₩) *</S.Label>
        <S.Input
          inputMode="numeric"
          {...register("price", {
            required: "가격을 입력해주세요",
            min: { value: 1000, message: "최소 1000원 이상이어야 합니다" },
          })}
        />
      </S.Grid>
      {errors.price && <S.ErrorText>{errors.price.message}</S.ErrorText>}

      <S.Grid>
        <S.Label>할인율 (%)</S.Label>
        <S.Input
          maxLength={3}
          inputMode="numeric"
          {...register("discountPercentage", {
            max: { value: 100, message: "100 이하로 입력해주세요" },
          })}
        />
      </S.Grid>
      {errors.discountPercentage && (
        <S.ErrorText>{errors.discountPercentage.message}</S.ErrorText>
      )}

      <S.Grid>
        <S.Label>브랜드 *</S.Label>
        <S.Select {...register("brand", { required: "브랜드를 선택해주세요" })}>
          <option value="">선택</option>
          {BRAND_OPTIONS.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </S.Select>
      </S.Grid>
      {errors.brand && <S.ErrorText>{errors.brand.message}</S.ErrorText>}

      <S.FinalPrice>최종가: ₩{finalPrice}</S.FinalPrice>

      <S.SubmitButton type="submit" disabled={!!Object.keys(errors).length}>
        제품 생성
      </S.SubmitButton>
    </S.Form>
  );
};

export default ProductForm;
