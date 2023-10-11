import { useMazeStore } from "@/store/MazeStore";
import { SquareType } from "@/types/types";
import { useKeyPress } from "./useKeyPress";

export const useMovement = () => {
  const { squares, setSquares } = useMazeStore((state) => state);
  const { player, setPlayer } = useMazeStore((state) => state);

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

    console.log({ lavaGrowth });

    setSquares(
      squares.map((square) => {
        const foundInLavaGrowth = lavaGrowth?.find(
          (lg) => lg.x === square.x && lg.y === square.y
        );
        return foundInLavaGrowth ? { ...square, hasLava: true } : square;
      })
    );
  };

  const moveHandler = (options: string[]) => {
    // The increment, with the direction, in which the steps are checked.
    const increment = options.some((opt) =>
      ["ArrowUp", "W", "ArrowLeft", "A"].includes(opt)
    )
      ? -1
      : 1;

    // The direction, x or y, in which should be moved.
    const movementDirection = options.some((opt) =>
      ["ArrowUp", "W", "ArrowDown", "S"].includes(opt)
    )
      ? "y"
      : "x";

    // The other direction
    const stationaryDirection = movementDirection === "y" ? "x" : "y";

    let deltaMove = 0;

    const checkNextSquare = () => {
      const squareFindingFunction = (square: SquareType) =>
        square[movementDirection] ===
          (player?.[movementDirection] || 0) + (deltaMove + increment) &&
        square[stationaryDirection] === player?.[stationaryDirection];

      const exists = squares.find(squareFindingFunction);

      if (!exists || exists.isWall) {
        if (!player) {
          return;
        }
        return setPlayer({
          ...player,
          [movementDirection]: player?.[movementDirection] + deltaMove,
        });
      }

      deltaMove += increment;

      checkNextSquare();
    };
    checkNextSquare();
    updateEnemies();
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
  };
};
