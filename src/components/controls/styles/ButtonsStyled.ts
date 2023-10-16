import styled from "@emotion/styled";
import { ButtonBase, css } from "@mui/material";

export const ArrowButtonWrapper = styled(ButtonBase)<{
  rotation: string;
  position: "up" | "left" | "right" | "down";
}>`
  height: 2rem;
  width: 2rem;
  display: grid;
  place-items: center;
  border-radius: 0.25rem;
  border: 2px solid grey;
  border-bottom: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  margin-bottom: -2px;

  ${({ rotation }) => css`
    transform: rotate(${rotation});
  `}
  ${({ position }) => css`
    grid-area: ${position};
    ${position === "up" &&
    css`
      place-self: top;
    `}
    ${position === "left" &&
    css`
      place-self: left;
    `}
    ${position === "down" &&
    css`
      place-self: bottom;
    `}
    ${position === "right" &&
    css`
      place-self: right;
    `}
  `}
`;

export const DirectionalPadWrapper = styled("div")`
  align-self: flex-start;

  display: grid;
  grid-template-areas:
    "up up up"
    "left x right"
    "down down down";
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  place-items: center;
  position: relative;
  margin: 2rem;
  overflow: visible !important;
  * {
    border-radius: 0.25rem;
  }
`;
