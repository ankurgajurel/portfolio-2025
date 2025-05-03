import { create } from "zustand";

type ConsoleStore = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
};

export const useConsoleVisibleStore = create<ConsoleStore>((set) => ({
  isVisible: false,
  setIsVisible: (isVisible: boolean) => set({ isVisible }),
}));
