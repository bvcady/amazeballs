import { SquareType } from "@/types/types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const LavaWrapper = styled.div<{
  lavaEdges?: { [key: string]: boolean | undefined };
  wallEdges?: { [key: string]: boolean | undefined };
  square?: SquareType;
}>`
  background-color: var(--lightColor);
  border-radius: calc(var(--w) / 6);
  position: absolute;
  inset: 0;
  z-index: -1;

  grid-column: ${({ square }) => (square?.x || 0) + 1} / span 1;
  grid-row: ${({ square }) => (square?.y || 0) + 1} / span 1;
  /* top:  calc(var(--w)/8);
  left:  calc(var(--w)/8);
  right:  calc(var(--w)/8);
  bottom: calc(var(--w)/8); */

  ${({ lavaEdges, wallEdges }) =>
    lavaEdges?.lavaLeft &&
    css`
      left: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `}
  ${({ lavaEdges, wallEdges }) =>
    lavaEdges?.lavaRight &&
    css`
      right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `}
  ${({ lavaEdges, wallEdges }) =>
    lavaEdges?.lavaTop &&
    css`
      top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    `}
  ${({ lavaEdges, wallEdges }) =>
    lavaEdges?.lavaBottom &&
    css`
      bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
`;
