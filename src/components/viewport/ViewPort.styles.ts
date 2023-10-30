import styled from "@emotion/styled";

export const Wrapper = styled("div")`
  aspect-ratio: 160/144;
  max-width: min(300px, 100dvw);
  overflow: hidden;
  box-shadow: 0 0 0 1rem var(--lightColor);
  pointer-events: none;
  background: var(--darkColor);
  position: relative;
`;
