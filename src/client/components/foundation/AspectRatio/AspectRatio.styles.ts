import { css } from '@emotion/css';

export const container = ({ height, width }: { width: number | undefined; height: number | undefined }) => css`
  position: relative;
  width: 100%;
  aspect-ratio: ${width} / ${height};
`;
