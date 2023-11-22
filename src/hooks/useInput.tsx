import { useUIStore } from "@/store/UIStore";
import { useMovement } from "./useMovement";
import { useKeyPress } from "./useKeyPress";
import { useGameStore } from "@/store/GameStore";
import { theme } from "@/styles/Global";

export const useInput = () => {
  const { menuOpen, toggleMenuOpen } = useUIStore((state) => state);
  const { allowInput } = useUIStore((state) => state);
  const { gameColor, setGameColor } = useGameStore((game) => game);
  const { moveHandler } = useMovement();

  const inputHandler = (key: string) => {
    if (!allowInput) {
      return;
    }

    if (key === "Space") {
      return toggleMenuOpen(!menuOpen);
    }

    if (key === "Select") {
      const colorOptions = [
        theme.colors.accent,
        "gold",
        "silver",
        "chartreuse",
        "hotpink",
        "black",
        "white",
      ];
      return setGameColor(
        colorOptions[
          (colorOptions.indexOf(gameColor) + 1) % colorOptions?.length
        ]
      );
    }

    if (menuOpen) {
      return;
    }

    return moveHandler(key);
  };

  useKeyPress({
    callback: inputHandler,
  });

  return { inputHandler };
};
