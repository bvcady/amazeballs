import { PlayerType, SquareType } from "@/types/types";
import { RandomSeed } from "random-seed";
import { create } from "zustand";

type ZustandState = {
  player: PlayerType | null;
  squares: SquareType[];
  setSquares: (input: SquareType[]) => void;
  setPlayer: (input: PlayerType) => void;
  saveFile: { seed?: string | null };
  setSaveFile: (input: { seed: string | null }) => void;
};

export const useMazeStore = create<ZustandState>((set) => ({
  player: null,
  squares: [],
  setSquares: (squares) => set({ squares }),
  setPlayer: (player) => set({ player }),
  saveFile: {},
  setSaveFile: (saveFile) => {
    console.log({ saveFile });
    return set({ saveFile });
  },
}));
