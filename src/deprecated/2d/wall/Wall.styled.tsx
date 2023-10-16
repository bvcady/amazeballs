import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const WallWrapper = styled.div<{
  wallHeight?: number;
  wallEdges?: { [key: string]: boolean | undefined };
}>`
  position: absolute;
  inset: 0;

  background-color: var(--darkColor);
  border-radius: calc(var(--w) / 4);
  border-bottom-left-radius: calc(var(--w) / 8);
  border-bottom-right-radius: calc(var(--w) / 8);

  box-shadow: none;
  z-index: -1;

  ::after {
    content: "";
    border-radius: calc(var(--w) / 6);
    position: absolute;
    width: var(--w);
    height: var(--w);
    background-color: var(--mediumColor);
    z-index: -2;
    transform: translateY(calc(-1 * calc(var(--w) / 2)));
  }

  ${({ wallEdges }) =>
    wallEdges?.wallLeft &&
    css`
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      ::after {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    `}
  ${({ wallEdges }) =>
    wallEdges?.wallRight &&
    css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      ::after {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    `}
  ${({ wallEdges }) =>
    wallEdges?.wallTop &&
    css`
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      ::after {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    `}
  ${({ wallEdges }) =>
    wallEdges?.wallBottom &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      ::after {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    `}
`;
