import { SquareType } from "@/types/types";

interface Props {
  squareInfo: SquareType;
  squares: SquareType[];
}

export const getLavaEdges = ({ squareInfo, squares }: Props) => {
  const { x, y, hasLava } = squareInfo;

  const lavaTop = squares?.find((sq) => sq.x === x && sq.y === y - 1)?.hasLava;
  const lavaBottom = squares?.find(
    (sq) => sq.x === x && sq.y === y + 1
  )?.hasLava;
  const lavaLeft = squares?.find((sq) => sq.y === y && sq.x === x - 1)?.hasLava;
  const lavaRight = squares?.find(
    (sq) => sq.y === y && sq.x === x + 1
  )?.hasLava;

  return {
    hasLava,
    lavaEdges: { lavaTop, lavaBottom, lavaLeft, lavaRight },
  };
};
