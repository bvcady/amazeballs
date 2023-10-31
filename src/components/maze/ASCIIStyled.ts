import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const ASCIIWrapper = styled("div")<{
  nX?: number;
  blur?: string;
}>`
  --nX: ${({ nX }) => nX || 10};
  --cellSize: 32px;

  display: grid;
  grid-template-columns: repeat(var(--nX), var(--cellSize));
  grid-template-rows: repeat(var(--nX), var(--cellSize));

  background-color: var(--lightColor);
  padding: var(--cellSize);
  box-shadow: inset 0 0 12px 24px var(--darkColor),
    inset 0 0 4px 8px var(--darkColor);

  width: fit-content;
  perspective: 30px;

  filter: blur(${({ blur }) => blur || "0px"});

  transition: filter 0.3s ease-out;

  user-select: none;
  pointer-events: none;
  cursor: none;
`;
