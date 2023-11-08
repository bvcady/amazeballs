import styled from "@emotion/styled";
import { ButtonBase, css } from "@mui/material";

export const SSButtonWrapper = styled(ButtonBase)`
  width: 56px;
  height: 12px;
  border-radius: 1rem;
  background-color: var(--lightColor);
  box-shadow: inset 0 0 0 1px var(--mediumColor),
    inset 1px 1px 4px 0px var(--bgColor);
  transform: rotate(-22.5deg);
  :first-of-type {
    transform: rotate(-22.5deg) translateX(-16px);
  }
`;

export const ArrowButtonWrapper = styled(ButtonBase)<{
  rotation: string;
  position: "up" | "left" | "right" | "down";
}>`
  height: 36px;
  width: 36px;
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
  width: fit-content;

  display: grid;
  grid-template-areas:
    "up up up"
    "left x right"
    "down down down";
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  place-items: center;
  position: relative;
  margin: 24px 0rem;

  overflow: visible !important;
  * {
    border-radius: 0.25rem;
  }
`;
