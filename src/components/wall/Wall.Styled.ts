import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const WallWrapper = styled("div")<{ x: number; y: number }>`
  position: absolute;
  ${({ x, y }) => css`
    top: calc(32px + ${y * 32}px - 12px);
    left: calc(32px + ${x * 32}px);
  `}
  width: 32px;
  height: 44px;
  z-index: ${({ y }) => y};
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 0.25rem;

  .background {
    fill: var(--bgColor);
  }
  .light {
    fill: var(--lightColor);
  }
  .medium {
    fill: var(--mediumColor);
  }
  .dark {
    fill: var(--darkColor);
  }
  .accent {
    fill: var(--accentColor);
  }
`;
