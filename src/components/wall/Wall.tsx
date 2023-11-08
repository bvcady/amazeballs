import { WallBase } from "./WallBase";
import { WallWrapper } from "./Wall.Styled";
import * as Walls from "./WallTypes";

interface Props {
  cracked: boolean;
  rotation: number;
  x: number;
  y: number;
}

export const Wall = ({ cracked = false, rotation, x, y }: Props) => {
  return (
    <WallWrapper {...{ x, y }}>
      {cracked ? <Walls.Cracked rotation={rotation} /> : null}
      {!cracked ? <Walls.Default /> : null}
      <WallBase />
    </WallWrapper>
  );
};
