import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ASCIIWrapper = styled("div")<{ nX?: number }>`
  --nX: ${({ nX }) => nX || 10};
  --cellSize: 2rem;

  display: grid;
  grid-template-columns: repeat(var(--nX), var(--cellSize));
  grid-template-rows: repeat(var(--nX), var(--cellSize));

  background-color: var(--mediumColor);
  padding: var(--cellSize);
  width: fit-content;
`;

export const CellWrapper = styled("code")<{ customColor?: string }>`
  display: grid;
  place-items: center;
  font-size: 2rem;

  ${({ customColor }) =>
    customColor &&
    css`
      color: ${customColor};
    `}
`;
