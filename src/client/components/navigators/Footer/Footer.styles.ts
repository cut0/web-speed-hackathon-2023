import { css } from '@emotion/css';

export const container = () => css`
  background-color: #f4f4f4;
  display: grid;
  gap: 24px;
  margin-top: 40px;
  padding: 32px 24px;
`;

export const itemList = () => css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-direction: row;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const item = () => css`
  color: #222222;
  font-size: 14px;
`;
