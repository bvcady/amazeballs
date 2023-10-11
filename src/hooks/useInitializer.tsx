/* eslint-disable react-hooks/exhaustive-deps */
import { useMazeStore } from "@/store/MazeStore";
import { useEffect, useState } from "react";

interface Props {
  nX: number;
}
export const useInitializer = ({ nX }: Props) => {
  const [squareSize, setSquareSize] = useState(0);

  const { setSquares, squares } = useMazeStore((state) => state);
  const { setPlayer } = useMazeStore((state) => state);

  useEffect(() => {
    const withinRange = (input: number, from: number, to: number) => {
      if (input >= from && input <= to) {
        return input;
      }
      if (input < from) {
        return from;
      }
      return to;
    };
    // setSquareSize(4);
    setSquareSize(withinRange((window.innerWidth * 0.66) / nX, 4, 32));

    const maze = new Array(nX * nX).fill("").map((_, index) => {
      return {
        x: index % nX,
        y: Math.floor(index / nX),
        isWall: Math.random() < 0.33,
      };
    });

    const mapWithLava = maze.map((square) => {
      return {
        ...square,
        hasLava: square?.isWall ? false : Math.random() > 0.99,
      };
    });

    setSquares(mapWithLava);
    const availableOptions = maze.filter((m) => !m.isWall);

    const player =
      availableOptions[
        Math.floor(Math.random() * availableOptions?.length - 1)
      ];

    setPlayer(player);
  }, []);

  return {
    squareSize,
    nX,
    squares,
  };
};
