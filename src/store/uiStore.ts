import { type StateCreator } from "zustand";

export interface UiState {
  isPlayerExpand: boolean;
  setIsPlayerExpand: (value: boolean) => void;
}

const UiSlice: StateCreator<UiState> = (set) => ({
  isPlayerExpand: false,
  setIsPlayerExpand: (value: boolean) => set(() => ({ isPlayerExpand: value })),
});

export default UiSlice;
