import styled from "@emotion/styled";

export const Wrapper = styled("div")`
  background-color: var(--bgColor);
  padding: 16px;
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem 0.25rem rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  border-bottom-right-radius: 2rem;
`;

export const ScreenPadding = styled("div")`
  padding: 8px;
  padding-bottom: 16px;
  background-color: var(--lightColor);
  border-radius: 0.125rem;
  box-shadow: inset 0 0 0.5rem 0 rgba(0, 0, 0, 0.2), inset 0 0 1px 0 black;
  overflow: visible;
`;

export const ButtonAreaWrapper = styled("div")`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
`;
