import { create } from "zustand";

type ZustandState = {
  menuOpen: boolean;
  toggleMenuOpen: (input: boolean) => void;
};

export const useUIStore = create<ZustandState>((set) => ({
  menuOpen: false,
  toggleMenuOpen: (menuOpen) => set({ menuOpen }),
}));
