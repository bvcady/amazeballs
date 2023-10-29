import { defaultPlayerInfo } from "@/constants/defaultPlayerInfo";
import { PlayerType, SquareType } from "@/types/types";
import { RandomSeed } from "random-seed";
import { create } from "zustand";

type SaveFile = {
  seed?: string | null;
  layer?: number;
  nMovement: number;
  nHealth: number;
  slideDirection: { direction?: "x" | "y"; increment?: number };
  nSlides: number;
};

type ZustandState = {
  player?: PlayerType;
  squares: SquareType[];
  setSquares: (input: SquareType[]) => void;
  setPlayer: (input: PlayerType) => void;
  saveFile: SaveFile;
  setSaveFile: (input: SaveFile) => void;
};

export const useMazeStore = create<ZustandState>((set) => ({
  player: undefined,
  squares: [],
  setSquares: (squares) => set({ squares }),
  setPlayer: (player) => set({ player }),
  saveFile: {
    layer: 0,
    nMovement: defaultPlayerInfo.nMovement,
    nHealth: defaultPlayerInfo.nHealth,
    slideDirection: {
      direction: undefined,
      increment: undefined,
    },
    nSlides: 0,
  },
  setSaveFile: (saveFile) => {
    return set({ saveFile });
  },
}));
