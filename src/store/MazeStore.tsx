import { PlayerType, SquareType } from "@/types/types";
import { RandomSeed } from "random-seed";
import { create } from "zustand";

type SaveFile = {
  seed?: string | null;
  layer?: number;
  nMovement?: number;
  slideDirection: { direction: "x" | "y"; increment: number };
};

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
  saveFile: {
    layer: 0,
    nMovement: 5,
    slideDirection: {
      direction: Math.random() > 0.5 ? "x" : "y",
      increment: Math.random() > 0.5 ? 1 : -1,
    },
  },
  setSaveFile: (saveFile) => {
    console.log({ saveFile });
    return set({ saveFile });
  },
}));
