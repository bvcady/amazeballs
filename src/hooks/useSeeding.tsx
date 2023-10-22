import { useMazeStore } from "@/store/MazeStore";
import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";
import { defaultPlayerInfo } from "@/constants/defaultPlayerInfo";

export const useSeeding = () => {
  const [seed, setSeed] = useLocalStorage("maze-seed", null);

  const { saveFile, setSaveFile } = useMazeStore((state) => state);

  const { nMovement, nHealth } = defaultPlayerInfo;

  const setNewSeed = (input?: string) => {
    const newSeed = Array.from(crypto.getRandomValues(new Uint8Array(4)))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("")
      .toLocaleUpperCase();
    setSeed(input || newSeed);
    setSaveFile({ ...saveFile, seed: seed, nMovement, nHealth });
  };

  useEffect(() => {
    console.log({ seed });
    if (!seed) {
      setNewSeed();
    } else {
      setSaveFile({ ...saveFile, seed: seed, nMovement, nHealth });
    }
  }, [seed]);

  return {
    setNewSeed,
  };
};
