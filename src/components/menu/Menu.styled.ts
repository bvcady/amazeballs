import styled from "@emotion/styled";

export const MenuWrapper = styled("div")`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: calc(3.25 * 36px);
  background-color: var(--bgColor);
  display: flex;
  flex-direction: column;
  padding-top: 4px;
  box-shadow: inset 1px 0 0 2px var(--bgColor),
    inset 1px 0 0 4px var(--darkColor);
`;

export const ItemWrapper = styled("div")`
  height: 32px;
  padding: 0 12px;
  width: 100%;
  display: flex;
  color: var(--darkColor);
  text-transform: uppercase;
  justify-content: flex-start;
  align-items: center;
`;
