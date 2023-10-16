import { useMazeStore } from "@/store/MazeStore";
import { SquareType } from "@/types/types";
import { useKeyPress } from "./useKeyPress";
import { stat } from "fs";

export const useMovement = () => {
  const { squares, setSquares } = useMazeStore((state) => state);
  const { player, setPlayer } = useMazeStore((state) => state);
  const { saveFile, setSaveFile } = useMazeStore((state) => state);

  const { nMovement = 0 } = saveFile;

  const updateEnemies = () => {
    const lavaSquares = squares.filter((square) => square.hasLava);

    const lavaGrowth = Array.from(
      new Set(
        lavaSquares
          .map((ls) => {
            const lavaOptions = squares.filter(
              (square) =>
                (((square.x === ls.x - 1 || square.x === ls.x + 1) &&
                  square.y === ls.y) ||
                  ((square.y === ls.y - 1 || square.y === ls.y + 1) &&
                    square.x === ls.x)) &&
                !square.isWall &&
                !square.hasLava
            );
            return lavaOptions.slice(
              Math.floor(Math.random() * (lavaOptions?.length - 1)),
              1
            );
          })
          .reduce((opts, acc) => {
            return [...acc, ...opts];
          }, [])
      )
    )
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    setSquares(
      squares.map((square) => {
        const foundInLavaGrowth = lavaGrowth?.find(
          (lg) => lg.x === square.x && lg.y === square.y
        );
        return foundInLavaGrowth ? { ...square, hasLava: true } : square;
      })
    );
  };

  const findExistingSquare = (
    verticalDirection: "x" | "y",
    horizontalDirection: "x" | "y",
    deltaMove: number,
    increment: number
  ) => {
    const squareFindingFunction = (square: SquareType) =>
      square[verticalDirection] ===
        (player?.[verticalDirection] || 0) + (deltaMove + increment) &&
      square[horizontalDirection] === player?.[horizontalDirection];

    return squares.find(squareFindingFunction);
  };

  const slide = () => {
    const verticalDirection = Math.random() > 0.5 ? "x" : "y";
    const horizontalDirection = verticalDirection === "x" ? "y" : "x";
    const increment = Math.random() > 0.5 ? -1 : 1;
    console.log(verticalDirection, horizontalDirection, increment);
    let deltaMove = 0;

    const handleSlide = () => {
      const exists = findExistingSquare(
        verticalDirection,
        horizontalDirection,
        deltaMove,
        increment
      );
      if (!exists || exists.isWall) {
        if (!player || deltaMove === 0) {
          return;
        }
        return setPlayer({
          ...player,
          [verticalDirection]: player?.[verticalDirection] + deltaMove,
        });
      }

      deltaMove += increment;

      handleSlide();
    };

    handleSlide();
    updateEnemies();
  };

  const moveHandler = (options: string[], slide?: boolean) => {
    if (nMovement <= 0) {
      return;
    }
    // The increment, with the direction, in which the steps are checked.
    const increment = options.some((opt) =>
      ["ArrowUp", "W", "ArrowLeft", "A"].includes(opt)
    )
      ? -1
      : 1;

    // The direction, x or y, in which should be moved.
    const verticalDirection = options.some((opt) =>
      ["ArrowUp", "W", "ArrowDown", "S"].includes(opt)
    )
      ? "y"
      : "x";

    // The other direction
    const horizontalDirection = verticalDirection === "y" ? "x" : "y";

    const handleStep = () => {
      const exists = findExistingSquare(
        verticalDirection,
        horizontalDirection,
        0,
        increment
      );
      if (exists && !exists?.isWall) {
        if (!player) {
          return;
        }
        setSaveFile({ ...saveFile, nMovement: (saveFile.nMovement || 0) - 1 });
        return setPlayer({
          ...player,
          [verticalDirection]: player?.[verticalDirection] + increment,
        });
      }
    };

    handleStep();
  };

  useKeyPress({
    keys: ["ArrowUp", "W"],
    callback: () => {
      moveHandler(["ArrowUp", "W"]);
    },
  });

  useKeyPress({
    keys: ["ArrowDown", "S"],
    callback: () => {
      moveHandler(["ArrowDown", "S"]);
    },
  });

  useKeyPress({
    keys: ["ArrowRight", "D"],
    callback: () => {
      moveHandler(["ArrowRight", "D"]);
    },
  });
  useKeyPress({
    keys: ["ArrowLeft", "A"],
    callback: () => {
      moveHandler(["ArrowLeft", "A"]);
    },
  });

  return {
    moveHandler,
    slide,
  };
};
