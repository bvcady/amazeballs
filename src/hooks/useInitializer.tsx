/* eslint-disable react-hooks/exhaustive-deps */
import { useMazeStore } from "@/store/MazeStore";
import { useEffect, useState } from "react";
import * as seedInitilizer from "random-seed";
import { SquareType } from "@/types/types";

interface Props {
  nX: number;
}
export const useInitializer = ({ nX }: Props) => {
  const [squareSize, setSquareSize] = useState(0);

  const { setSquares, squares } = useMazeStore((state) => state);
  const { setPlayer } = useMazeStore((state) => state);
  const { saveFile, setSaveFile } = useMazeStore((state) => state);

  const { seed } = saveFile;

  const s = seedInitilizer;

  const seedBuilder = (input: (number | string)[]) => {
    const sanitizedInput = input.map((i) => i.toString());
    const seedString = [...sanitizedInput, seed].join("-");
    return s.create(seedString);
  };

  const withinRange = (input: number, from: number, to: number) => {
    if (input >= from && input <= to) {
      return input;
    }
    if (input < from) {
      return from;
    }
    return to;
  };

  const reload = () => {
    if (seed) {
      setSquareSize(withinRange((window.innerWidth * 0.66) / nX, 4, 32));

      const maze: SquareType[] = new Array(nX * nX).fill("").map((_, index) => {
        const x = index % nX;
        const y = Math.floor(index / nX);
        const isWall = seedBuilder(["wall", x, y]).random() < 0.33;
        const wallCracked = seedBuilder(["wall-cracked", x, y]).random() > 0.5;
        const wallRotation =
          Math.floor(seedBuilder(["wall-cracked", x, y]).random() * 4) * 90;
        const isLavaSource = isWall
          ? false
          : seedBuilder(["lava", x, y]).random() > 0.99;
        return {
          x,
          y,
          isWall,
          wallCracked,
          wallRotation,
          isLavaSource,
          hasLava: isLavaSource,
        };
      });

      setSquares(maze);
      const availableOptions = maze.filter((m) => !m.isWall);

      const player =
        availableOptions[
          Math.floor(
            seedBuilder(["player"]).random() * availableOptions?.length - 1
          )
        ];

      setPlayer({
        x: player?.x,
        y: player?.y,
        direction: "down",
        message: "hi",
      });
      setSaveFile({
        ...saveFile,
        slideDirection: {
          direction:
            seedBuilder([
              `slide-direction-${saveFile.nSlides}-${saveFile.layer}`,
            ]).random() > 0.5
              ? "x"
              : "y",
          increment:
            seedBuilder([
              `slide-increment-${saveFile.nSlides}-${saveFile.layer}`,
            ]).random() > 0.5
              ? -1
              : 1,
        },
        nSlides: 0,
      });
    }
  };

  useEffect(() => {
    reload();
  }, [seed]);

  return {
    seedBuilder,
    squareSize,
    nX,
    squares,
    reload,
  };
};
