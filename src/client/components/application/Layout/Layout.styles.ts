import { css } from '@emotion/css';

export const fullContainer = () => css`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`;

export const container = () => css`
  max-width: 100vw;
`;
