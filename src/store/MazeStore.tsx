import { PlayerType, SquareType } from "@/types/types";
import { RandomSeed } from "random-seed";
import { create } from "zustand";

type SaveFile = { seed?: string | null; layer?: number; nMovement?: number };

type ZustandState = {
  player: PlayerType | null;
  squares: SquareType[];
  setSquares: (input: SquareType[]) => void;
  setPlayer: (input: PlayerType) => void;
  saveFile: SaveFile;
  setSaveFile: (input: SaveFile) => void;
};

export const useMazeStore = create<ZustandState>((set) => ({
  player: null,
  squares: [],
  setSquares: (squares) => set({ squares }),
  setPlayer: (player) => set({ player }),
  saveFile: { layer: 0, nMovement: 5 },
  setSaveFile: (saveFile) => {
    console.log({ saveFile });
    return set({ saveFile });
  },
}));
