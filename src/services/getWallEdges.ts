import { SquareType } from "@/types/types";

interface Props {
  squareInfo: SquareType;
  squares: SquareType[];
}

export const getWallEdges = ({ squareInfo, squares }: Props) => {
  const { x, y, isWall } = squareInfo;

  const wallTop = squares?.find((sq) => sq.x === x && sq.y === y - 1)?.isWall;
  const wallBottom = squares?.find(
    (sq) => sq.x === x && sq.y === y + 1
  )?.isWall;
  const wallLeft = squares?.find((sq) => sq.y === y && sq.x === x - 1)?.isWall;
  const wallRight = squares?.find((sq) => sq.y === y && sq.x === x + 1)?.isWall;

  return {
    isWall,
    wallEdges: { wallTop, wallBottom, wallLeft, wallRight },
  };
};
