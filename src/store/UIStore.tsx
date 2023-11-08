import { create } from "zustand";

type ZustandState = {
  allowInput: boolean;
  menuOpen: boolean;
  toggleAllowInput: (input: boolean) => void;
  toggleMenuOpen: (input: boolean) => void;
};

export const useUIStore = create<ZustandState>((set) => ({
  allowInput: true,
  menuOpen: false,
  toggleMenuOpen: (menuOpen) => set({ menuOpen }),
  toggleAllowInput: (allowInput) => set({ allowInput }),
}));
