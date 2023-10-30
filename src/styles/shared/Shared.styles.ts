import { css } from "@emotion/react";
import styled from "@emotion/styled";

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
