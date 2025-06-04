"use client";

import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Card = styled.div<{ variant: "grid" | "list" }>`
  ${({ theme, variant }) => css`
    display: flex;
    flex-direction: ${variant === "list" ? "row" : "column"};
    gap: 8px;
    padding: 16px;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.blue00};
    border-radius: 8px;

    img {
      width: ${variant === "list" ? "120px" : "100%"};
      height: ${variant === "list" ? "120px" : "auto"};
      object-fit: cover;
      border-radius: 6px;
    }
  `}
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

export const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const SkeletonImage = styled.div<{ variant: "grid" | "list" }>`
  ${({ theme, variant }) => css`
    width: ${variant === "list" ? "120px" : "100%"};
    height: ${variant === "list" ? "120px" : "548px"};
    background-color: ${theme.colors.gray40};
    animation: pulse 1.5s infinite ease-in-out;
  `}
`;

export const SkeletonText = styled.div`
  background-color: ${({ theme }) => theme.colors.gray40};
  border-radius: 4px;
  animation: pulse 1.5s infinite ease-in-out;
`;
