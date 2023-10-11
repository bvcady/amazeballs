import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ASCIIWrapper = styled("div")<{ nX?: number }>`
  --nX: ${({ nX }) => nX || 10};
  --cellSize: 2rem;

  display: grid;
  grid-template-columns: repeat(var(--nX), var(--cellSize));
  grid-template-rows: repeat(var(--nX), var(--cellSize));

  background-color: var(--darkColor);
  padding: var(--cellSize);
  width: fit-content;
`;

export const CellWrapper = styled("code")<{
  customColor?: string;
  opacity?: string;
}>`
  display: grid;
  place-items: center;
  font-size: 2rem;
  position: relative;
  ${({ customColor }) =>
    customColor &&
    css`
      color: ${customColor};
    `};
  ${({ opacity }) =>
    opacity &&
    css`
      opacity: ${opacity};
    `};
`;

export const PlayerWrapper = styled(CellWrapper)`
  position: absolute;
  inset: 0;
  z-index: 2;
  font-size: 1.5rem;

  svg {
    height: 1.5rem;
  }

  .cls-1 {
    fill: #dadada;
    fill: var(--bgColor);
  }
  .cls-2 {
    fill: #1d1d1b;
    fill: var(--darkColor);
  }
  .cls-3 {
    fill: #878787;
    fill: var(--lightColor);
  }
  .cls-4 {
    fill: #575756;
    fill: var(--mediumColor);
  }
`;
