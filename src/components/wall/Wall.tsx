import { theme } from "@/styles/Global";
import { CellWrapper } from "@/styles/shared/Shared.styles";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  cracked: boolean;
  rotation: number;
  x: number;
  y: number;
}

const WallWrapper = styled("div")<{ x: number; y: number }>`
  position: absolute;
  ${({ x, y }) => css`
    top: calc(32px + ${y * 32}px);
    left: calc(32px + ${x * 32}px);
  `}
  width: 32px;
  height: 36px;
  z-index: ${({ y }) => y};
  display: flex;
  justify-content: flex-start;
  background-color: var(--darkColor);
  flex-direction: column;
  border-radius: 0.25rem;

  svg {
    align-self: flex-start;
    width: 32px;
    height: 32px;
  }

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

export const Wall = ({ cracked = false, rotation, x, y }: Props) => {
  return (
    <WallWrapper {...{ x, y }}>
      {cracked ? (
        <svg
          viewBox="0 0 32 32"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <g id="Layer_8">
            <polygon
              className="medium"
              points="25 31 25 30 25 29 24 29 23 29 23 28 23 27 21 27 19 27 17 27 15 27 15 26 14 26 14 25 13 25 13 24 13 23 13 22 13 21 13 20 12 20 12 19 11 19 11 18 10 18 10 17 10 16 10 15 9 15 8 15 7 15 6 15 6 14 4 14 2 14 2 13 1 13 1 29 2 29 2 30 3 30 3 31 25 31"
            />
            <polygon
              className="medium"
              points="30 3 30 2 29 2 29 1 3 1 3 2 2 2 2 3 1 3 1 11 3 11 3 12 4 12 6 12 8 12 8 13 9 13 10 13 11 13 12 13 12 14 12 15 12 16 12 17 13 17 13 18 14 18 14 19 15 19 15 20 15 21 15 22 15 23 15 24 16 24 16 25 17 25 19 25 21 25 23 25 25 25 25 26 25 27 26 27 27 27 27 28 27 29 27 30 27 31 29 31 29 30 30 30 30 29 31 29 31 3 30 3"
            />
            <polygon
              className="dark"
              points="7 16 8 16 9 16 9 17 9 18 10 18 10 17 10 16 10 15 9 15 8 15 7 15 6 15 6 16 7 16"
            />
            <rect className="dark" x="10" y="18" width="1" height="1" />
            <rect className="dark" x="11" y="19" width="1" height="1" />
            <polygon
              className="dark"
              points="12 22 12 23 12 24 12 25 13 25 13 24 13 23 13 22 13 21 13 20 12 20 12 21 12 22"
            />
            <rect className="dark" x="13" y="25" width="1" height="1" />
            <rect className="dark" x="14" y="26" width="1" height="1" />
            <polygon
              className="dark"
              points="16 28 17 28 18 28 19 28 20 28 21 28 22 28 22 29 23 29 23 28 23 27 22 27 21 27 20 27 19 27 18 27 17 27 16 27 15 27 15 28 16 28"
            />
            <polygon
              className="dark"
              points="23 29 23 30 22 30 21 30 20 30 19 30 18 30 17 30 16 30 15 30 14 30 13 30 12 30 11 30 10 30 9 30 8 30 7 30 6 30 5 30 4 30 3 30 3 31 4 31 5 31 6 31 7 31 8 31 9 31 10 31 11 31 12 31 13 31 14 31 15 31 16 31 17 31 18 31 19 31 20 31 21 31 22 31 23 31 24 31 25 31 25 30 25 29 24 29 23 29"
            />
            <polygon
              className="dark"
              points="28 29 28 28 28 27 27 27 27 28 27 29 27 30 27 31 28 31 29 31 29 30 28 30 28 29"
            />
            <polygon
              className="dark"
              points="26 26 26 25 25 25 25 26 25 27 26 27 27 27 27 26 26 26"
            />
            <polygon
              className="dark"
              points="24 24 23 24 22 24 21 24 20 24 19 24 18 24 17 24 16 24 16 25 17 25 18 25 19 25 20 25 21 25 22 25 23 25 24 25 25 25 25 24 24 24"
            />
            <polygon
              className="dark"
              points="16 22 16 21 16 20 16 19 15 19 15 20 15 21 15 22 15 23 15 24 16 24 16 23 16 22"
            />
            <rect className="dark" x="14" y="18" width="1" height="1" />
            <rect className="dark" x="13" y="17" width="1" height="1" />
            <polygon
              className="dark"
              points="13 15 13 14 13 13 12 13 12 14 12 15 12 16 12 17 13 17 13 16 13 15"
            />
            <polygon
              className="dark"
              points="11 12 10 12 9 12 8 12 8 13 9 13 10 13 11 13 12 13 12 12 11 12"
            />
            <polygon
              className="dark"
              points="7 11 6 11 5 11 4 11 3 11 3 12 4 12 5 12 6 12 7 12 8 12 8 11 7 11"
            />
            <polygon
              className="dark"
              points="2 10 2 9 2 8 2 7 2 6 2 5 2 4 2 3 1 3 1 4 1 5 1 6 1 7 1 8 1 9 1 10 1 11 2 11 3 11 3 10 2 10"
            />
            <polygon
              className="dark"
              points="2 27 2 26 2 25 2 24 2 23 2 22 2 21 2 20 2 19 2 18 2 17 2 16 2 15 3 15 4 15 5 15 6 15 6 14 5 14 4 14 3 14 2 14 2 13 1 13 1 14 1 15 1 16 1 17 1 18 1 19 1 20 1 21 1 22 1 23 1 24 1 25 1 26 1 27 1 28 1 29 2 29 2 28 2 27"
            />
            <rect className="dark" x="2" y="2" width="1" height="1" />
            <polygon
              className="dark"
              points="5 2 6 2 7 2 8 2 9 2 10 2 11 2 12 2 13 2 14 2 15 2 16 2 17 2 18 2 19 2 20 2 21 2 22 2 23 2 24 2 25 2 26 2 27 2 28 2 29 2 29 1 28 1 27 1 26 1 25 1 24 1 23 1 22 1 21 1 20 1 19 1 18 1 17 1 16 1 15 1 14 1 13 1 12 1 11 1 10 1 9 1 8 1 7 1 6 1 5 1 4 1 3 1 3 2 4 2 5 2"
            />
            <rect className="dark" x="29" y="2" width="1" height="1" />
            <polygon
              className="dark"
              points="30 3 30 4 30 5 30 6 30 7 30 8 30 9 30 10 30 11 30 12 30 13 30 14 30 15 30 16 30 17 30 18 30 19 30 20 30 21 30 22 30 23 30 24 30 25 30 26 30 27 30 28 30 29 31 29 31 28 31 27 31 26 31 25 31 24 31 23 31 22 31 21 31 20 31 19 31 18 31 17 31 16 31 15 31 14 31 13 31 12 31 11 31 10 31 9 31 8 31 7 31 6 31 5 31 4 31 3 30 3"
            />
            <rect className="dark" x="29" y="29" width="1" height="1" />
            <rect className="dark" x="2" y="29" width="1" height="1" />
          </g>
        </svg>
      ) : null}
      {!cracked ? (
        <svg viewBox="0 0 32 32">
          <g id="final">
            <polygon
              className="medium"
              points="29 28 30 28 30 4 29 4 29 3 28 3 28 2 4 2 4 3 3 3 3 4 2 4 2 28 3 28 3 29 4 29 4 30 28 30 28 29 29 29 29 28"
            />
            <path
              className="dark"
              d="m28,2v1h1v1h1v24h-1v1h-1v1H4v-1h-1v-1h-1V4h1v-1h1v-1h24m1-1H3v1h-1v1H1v26h1v1h1v1h26v-1h1v-1h1V3h-1v-1h-1v-1h0Z"
            />
          </g>
        </svg>
      ) : null}
    </WallWrapper>
  );
};
