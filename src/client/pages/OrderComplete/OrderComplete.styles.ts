import { css } from '@emotion/css';

export const container = () => css`
  display: grid;
  gap: 8px;
  padding: 24px 16px;
`;

export const notice = () => css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const noticeHeading = () => css`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const noticeDescriptionWrapper = () => css`
  display: grid;
  height: 100%;
  place-items: center;
`;

export const noticeDescription = () => css`
  font-family: 'Noto Serif JP', sans-serif;
  font-display: swap;
  text-align: center;
  font-size: 1.125rem;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const recommended = () => css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const recommendedHeading = () => css`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const backToTopButtonWrapper = () => css`
  margin-top: 40px;
  text-align: center;
`;
