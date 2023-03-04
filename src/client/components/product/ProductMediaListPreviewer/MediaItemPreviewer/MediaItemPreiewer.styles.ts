import { css } from '@emotion/css';

export const container = () => css`
  display: flex;
`;

export const video = () => css`
  height: auto;
  object-fit: cover;
  width: 100%;
  max-width: 1024px;
  @media (max-width: 1024px) {
    max-width: 100vw;
  }
`;
