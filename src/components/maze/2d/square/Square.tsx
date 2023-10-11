import { SquareType } from "@/types/types";
import { SquareWrapper } from "./Square.styled";
import { Player } from "@/components/player/Player";
import { useMazeStore } from "@/store/MazeStore";
import { getWallEdges } from "@/services/getWallEdges";
import { getLavaEdges } from "@/services/getLavaEdges";
import { Wall } from "../wall/Wall";
import { Lava } from "../lava/Lava";

interface ISquare {
  squareInfo: SquareType;
}

export const Square = ({ squareInfo }: ISquare) => {
  const { squares, player } = useMazeStore((state) => state);

  const { isWall, wallEdges } = getWallEdges({ squareInfo, squares });

  const hasPlayer = player?.x === squareInfo?.x && player?.y === squareInfo?.y;

  return (
    <SquareWrapper>
      {isWall ? <Wall {...{ wallEdges }} /> : null}
      {hasPlayer ? <Player /> : null}
    </SquareWrapper>
  );
};
