import { theme } from "@/styles/Global";
import { CellWrapper } from "../styles/ASCIIStyled";
import styled from "@emotion/styled";

const WallWrapper = styled("div")`
  svg {
    width: calc(2rem - 2px);
    height: calc(2rem - 2px);
  }
  .cls-1 {
    fill: var(--darkColor);
  }

  .cls-2 {
    fill: var(--mediumColor);
  }
`;

export const Wall = () => {
  return (
    <CellWrapper customColor={theme.colors.dark}>
      <WallWrapper>
        <svg id="cracked-wall" viewBox="0 0 30 30">
          <g id="Layer_8">
            <polygon
              className="cls-2"
              points="24 30 24 29 24 28 23 28 22 28 22 27 22 26 20 26 18 26 16 26 14 26 14 25 13 25 13 24 12 24 12 23 12 22 12 21 12 20 12 19 11 19 11 18 10 18 10 17 9 17 9 16 9 15 9 14 8 14 7 14 6 14 5 14 5 13 3 13 1 13 1 12 0 12 0 28 1 28 1 29 2 29 2 30 24 30"
            />
            <polygon
              className="cls-2"
              points="29 2 29 1 28 1 28 0 2 0 2 1 1 1 1 2 0 2 0 10 2 10 2 11 3 11 5 11 7 11 7 12 8 12 9 12 10 12 11 12 11 13 11 14 11 15 11 16 12 16 12 17 13 17 13 18 14 18 14 19 14 20 14 21 14 22 14 23 15 23 15 24 16 24 18 24 20 24 22 24 24 24 24 25 24 26 25 26 26 26 26 27 26 28 26 29 26 30 28 30 28 29 29 29 29 28 30 28 30 2 29 2"
            />
            <polygon
              className="cls-1"
              points="6 15 7 15 8 15 8 16 8 17 9 17 9 16 9 15 9 14 8 14 7 14 6 14 5 14 5 15 6 15"
            />
            <rect className="cls-1" x="9" y="17" width="1" height="1" />
            <rect className="cls-1" x="10" y="18" width="1" height="1" />
            <polygon
              className="cls-1"
              points="11 21 11 22 11 23 11 24 12 24 12 23 12 22 12 21 12 20 12 19 11 19 11 20 11 21"
            />
            <rect className="cls-1" x="12" y="24" width="1" height="1" />
            <rect className="cls-1" x="13" y="25" width="1" height="1" />
            <polygon
              className="cls-1"
              points="15 27 16 27 17 27 18 27 19 27 20 27 21 27 21 28 22 28 22 27 22 26 21 26 20 26 19 26 18 26 17 26 16 26 15 26 14 26 14 27 15 27"
            />
            <polygon
              className="cls-1"
              points="22 28 22 29 21 29 20 29 19 29 18 29 17 29 16 29 15 29 14 29 13 29 12 29 11 29 10 29 9 29 8 29 7 29 6 29 5 29 4 29 3 29 2 29 2 30 3 30 4 30 5 30 6 30 7 30 8 30 9 30 10 30 11 30 12 30 13 30 14 30 15 30 16 30 17 30 18 30 19 30 20 30 21 30 22 30 23 30 24 30 24 29 24 28 23 28 22 28"
            />
            <polygon
              className="cls-1"
              points="27 28 27 27 27 26 26 26 26 27 26 28 26 29 26 30 27 30 28 30 28 29 27 29 27 28"
            />
            <polygon
              className="cls-1"
              points="25 25 25 24 24 24 24 25 24 26 25 26 26 26 26 25 25 25"
            />
            <polygon
              className="cls-1"
              points="23 23 22 23 21 23 20 23 19 23 18 23 17 23 16 23 15 23 15 24 16 24 17 24 18 24 19 24 20 24 21 24 22 24 23 24 24 24 24 23 23 23"
            />
            <polygon
              className="cls-1"
              points="15 21 15 20 15 19 15 18 14 18 14 19 14 20 14 21 14 22 14 23 15 23 15 22 15 21"
            />
            <rect className="cls-1" x="13" y="17" width="1" height="1" />
            <rect className="cls-1" x="12" y="16" width="1" height="1" />
            <polygon
              className="cls-1"
              points="12 14 12 13 12 12 11 12 11 13 11 14 11 15 11 16 12 16 12 15 12 14"
            />
            <polygon
              className="cls-1"
              points="10 11 9 11 8 11 7 11 7 12 8 12 9 12 10 12 11 12 11 11 10 11"
            />
            <polygon
              className="cls-1"
              points="6 10 5 10 4 10 3 10 2 10 2 11 3 11 4 11 5 11 6 11 7 11 7 10 6 10"
            />
            <polygon
              className="cls-1"
              points="1 9 1 8 1 7 1 6 1 5 1 4 1 3 1 2 0 2 0 3 0 4 0 5 0 6 0 7 0 8 0 9 0 10 1 10 2 10 2 9 1 9"
            />
            <polygon
              className="cls-1"
              points="1 26 1 25 1 24 1 23 1 22 1 21 1 20 1 19 1 18 1 17 1 16 1 15 1 14 2 14 3 14 4 14 5 14 5 13 4 13 3 13 2 13 1 13 1 12 0 12 0 13 0 14 0 15 0 16 0 17 0 18 0 19 0 20 0 21 0 22 0 23 0 24 0 25 0 26 0 27 0 28 1 28 1 27 1 26"
            />
            <rect className="cls-1" x="1" y="1" width="1" height="1" />
            <polygon
              className="cls-1"
              points="4 1 5 1 6 1 7 1 8 1 9 1 10 1 11 1 12 1 13 1 14 1 15 1 16 1 17 1 18 1 19 1 20 1 21 1 22 1 23 1 24 1 25 1 26 1 27 1 28 1 28 0 27 0 26 0 25 0 24 0 23 0 22 0 21 0 20 0 19 0 18 0 17 0 16 0 15 0 14 0 13 0 12 0 11 0 10 0 9 0 8 0 7 0 6 0 5 0 4 0 3 0 2 0 2 1 3 1 4 1"
            />
            <rect className="cls-1" x="28" y="1" width="1" height="1" />
            <polygon
              className="cls-1"
              points="29 2 29 3 29 4 29 5 29 6 29 7 29 8 29 9 29 10 29 11 29 12 29 13 29 14 29 15 29 16 29 17 29 18 29 19 29 20 29 21 29 22 29 23 29 24 29 25 29 26 29 27 29 28 30 28 30 27 30 26 30 25 30 24 30 23 30 22 30 21 30 20 30 19 30 18 30 17 30 16 30 15 30 14 30 13 30 12 30 11 30 10 30 9 30 8 30 7 30 6 30 5 30 4 30 3 30 2 29 2"
            />
            <rect className="cls-1" x="28" y="28" width="1" height="1" />
            <rect className="cls-1" x="1" y="28" width="1" height="1" />
          </g>
        </svg>
      </WallWrapper>
    </CellWrapper>
  );
};
