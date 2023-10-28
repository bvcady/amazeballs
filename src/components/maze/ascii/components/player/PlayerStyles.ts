import styled from "@emotion/styled";
import { CellWrapper } from "../../styles/ASCIIStyled";
import { keyframes } from "@emotion/react";

const upAndDown = keyframes`
0% {
  transform: translateY(0px);
}
49% {
  transform: translateY(0px);
}
50% {
  transform: translateY(1px);
}
99% {
  transform: translateY(1px);
}
100% {
  transform: translateY(0px);
}

`;

export const PlayerWrapper = styled(CellWrapper)`
  position: absolute;
  inset: 0;
  z-index: 2;
  font-size: 1.5rem;

  margin-top: -8px;
  animation: ${upAndDown} 1s linear;
  animation-iteration-count: infinite;

  #bg * {
    /* fill: #dadada; */
    fill: var(--bgColor);
  }
  #dark * {
    /* fill: #1d1d1b; */
    fill: var(--darkColor);
  }
  #light * {
    /* fill: #878787; */
    fill: var(--lightColor);
  }
  #medium * {
    /* fill: #575756; */
    fill: var(--mediumColor);
  }
`;

export const ShadowWrapper = styled("div")`
  position: absolute;
  filter: blur(1px);
  opacity: 0.8;
  mix-blend-mode: darken;
  inset: 0;

  ellipse {
    fill: var(--mediumColor);
  }
`;
