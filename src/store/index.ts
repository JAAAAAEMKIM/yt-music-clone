import { create } from "zustand";
import UiSlice, { UiState } from "./uiStore";

const rootStore = create<UiState>((...args) => ({
  ...UiSlice(...args),
}));

export default rootStore;
