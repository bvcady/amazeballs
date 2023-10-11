import { PlayerType, SquareType } from "@/types/types";
import { create } from "zustand";

type ZustandState = {
  player: PlayerType | null;
  squares: SquareType[];
  setSquares: (input: SquareType[]) => void;
  setPlayer: (input: PlayerType) => void;
};

export const useMazeStore = create<ZustandState>((set) => ({
  player: null,
  squares: [],
  setSquares: (squares) => set({ squares }),
  setPlayer: (player) => set({ player }),
}));
