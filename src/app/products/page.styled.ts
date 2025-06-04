"use client";

import Link from "next/link";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    border: 1px solid ${theme.colors.gray90};
    border-radius: 8px;
    padding: 32px;
    background: ${theme.colors.white};
  `}
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 20px;
`;

export const ProductLink = styled(Link)`
  ${({ theme }) => css`
    padding: 10px 16px;
    background-color: ${theme.colors.blue10};
    color: ${theme.colors.white};
    border-radius: 6px;
    font-size: 14px;

    &:hover {
      background-color: ${theme.colors.blue20};
    }
  `}
`;
