"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray90};
`;

export const Required = styled.span`
  ${({ theme }) => css`
    margin-left: 4px;
    color: ${theme.colors.red};
  `}
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.blue00};
  border-radius: 4px;
  font-size: 14px;
`;

export const Textarea = styled.textarea`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.blue00};
  border-radius: 4px;
  font-size: 14px;
  resize: none;
`;

export const Select = styled.select`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.blue00};
  border-radius: 4px;
  font-size: 14px;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 12px;
`;

export const SubmitButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.blue10};
    color: white;
    padding: 10px;
    border: none;
    font-size: 15px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: ${theme.colors.blue20};
    }

    &:disabled {
      background-color: ${theme.colors.gray40};
      color: ${theme.colors.gray50};
      cursor: not-allowed;
    }
  `}
`;

export const FinalPrice = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
`;
