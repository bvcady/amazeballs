import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const ASCIIWrapper = styled("div")<{
  nX?: number;
  translation?: [number, number];
  blur?: string;
  boardTilt: string;
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

  --tX: -${({ translation }) => translation?.[0] || 0}px;
  --tY: -${({ translation }) => translation?.[1] || 0}px;

  transform: translateX(calc(var(--tX) + 150px))
    translateY(calc(var(--tY) + 150px)) ${({ boardTilt }) => boardTilt};

  filter: blur(${({ blur }) => blur || "0px"});

  transition: transform
      ${({ boardTilt }) => (boardTilt ? "1.5s ease-in" : "0.4s linear")},
    filter 0.3s ease-out;

  user-select: none;
  pointer-events: none;
  cursor: none;
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

  #lava * {
    fill: var(--darkColor);
  }
  #dark * {
    fill: var(--darkColor);
  }
  #medium * {
    fill: var(--mediumColor);
  }
  #light * {
    fill: var(--lightColor);
  }
  #accent * {
    fill: var(--accentColor);
  }
`;
