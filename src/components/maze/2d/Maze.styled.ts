import styled from "@emotion/styled";

export const MazeWrapper = styled.div<{
  width: number;
  squareSize: number;
  rX?: number;
  rY?: number;
  rZ?: number;
}>`
  --w: ${({ squareSize }) => squareSize}px;
  display: grid;
  position: relative;
  margin: auto;
  overflow: hidden;
  grid-template-columns: repeat(${({ width }) => width}, var(--w));
  grid-template-rows: repeat(${({ width }) => width}, var(--w));
  box-shadow: 0 0 0 2rem var(--mediumColor);
  transform: rotateX(${({ rX }) => rX || 0}deg)
    rotateY(${({ rY }) => rY || 0}deg) rotateZ(${({ rZ }) => rZ || 0}deg);
  transform-style: preserve-3d;
`;
