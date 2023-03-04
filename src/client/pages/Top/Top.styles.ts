import { css } from '@emotion/css';

export const featureList = () => css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 40px;
`;

export const feature = () => css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const featureHeading = () => css`
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0 16px;
`;

export const heroSkeleton = () =>
  css`
    width: 100%;
    aspect-ratio: 16 / 9;
    background-color: #eaeaea;
  `;

export const featureSkeleton = () =>
  css`
    background-color: #eaeaea;
    width: 100%;
    height: 286px;
    @media (max-width: 1024px) {
      height: 282px;
    }
  `;
