"use client";

import styled from "@emotion/styled";

export const Card = styled.div<{ variant: "grid" | "list" }>`
  display: flex;
  flex-direction: ${({ variant }) => (variant === "list" ? "row" : "column")};
  gap: 8px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.blue00};
  border-radius: 8px;

  img {
    width: ${({ variant }) => (variant === "list" ? "120px" : "100%")};
    height: ${({ variant }) => (variant === "list" ? "120px" : "auto")};
    object-fit: cover;
    border-radius: 6px;
  }
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  margin: 4px 0;
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray90};
  margin-bottom: 5px;
`;

export const Rating = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.blue20};
`;

export const ReviewCount = styled.span`
  color: ${({ theme }) => theme.colors.blue10};
`;
