import { SquareType } from "@/types/types";
import styled from "@emotion/styled";
import { Lava } from "./Lava";
import { getLavaEdges } from "@/services/getLavaEdges";

interface Props {
  width: number;
  squares: SquareType[];
}

export const LavaLayer = ({ width, squares }: Props) => {
  return (
    <Wrapper {...{ width }}>
      {squares?.map((s) => {
        const { hasLava, lavaEdges } = getLavaEdges({ squareInfo: s, squares });
        return hasLava ? (
          <Lava {...{ square: s, lavaEdges }} key={s.x + "-" + s.y} />
        ) : null;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ width: number }>`
  display: grid;
  position: absolute;
  inset: 0;
  grid-template-columns: repeat(${({ width }) => width}, var(--w));
  grid-template-rows: repeat(${({ width }) => width}, var(--w));
`;
