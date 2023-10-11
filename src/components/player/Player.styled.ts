import styled from "@emotion/styled";

export const PlayerWrapper = styled.div`
  background-image: url("sprites/sprite_2.png");
  width: calc(1.2 * var(--w));
  height: calc(1.2 * var(--w));
  transform: translateX(calc(-0.1 * var(--w)))
    translateY(calc(-0.1 * var(--w) - 0.25 * var(--w)));
  background-size: cover;
  filter: brightness(1.5);
  overflow: visible;
  margin: auto;
`;
