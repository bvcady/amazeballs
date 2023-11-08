import { useUIStore } from "@/store/UIStore";
import { useMovement } from "./useMovement";
import { useKeyPress } from "./useKeyPress";

export const useInput = () => {
  const { menuOpen, toggleMenuOpen } = useUIStore((state) => state);
  const { allowInput } = useUIStore((state) => state);

  const { moveHandler } = useMovement();

  const inputHandler = (key: string) => {
    if (!allowInput) {
      return;
    }

    if (key === "Space") {
      return toggleMenuOpen(!menuOpen);
    }

    return moveHandler(key);
  };

  useKeyPress({
    callback: inputHandler,
  });

  return { inputHandler };
};
