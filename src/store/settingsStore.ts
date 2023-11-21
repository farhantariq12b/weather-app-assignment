import { create } from "zustand";

type State = {
  mode: string;
  unit: string;
  timeMode: string;
};

type Action = {
  changeMode: (mode: State["mode"]) => void;
  changeUnit: (mode: State["unit"]) => void;
  changeTimeMode: (mode: State["timeMode"]) => void;
};

const useSettignsStore = create<State & Action>((set) => ({
  mode: "dark",
  unit: "metric",
  timeMode: "24h",
  changeMode: (mode) => set(() => ({ mode: mode })),
  changeUnit: (unit) => set(() => ({ unit: unit })),
  changeTimeMode: (timeMode) => set(() => ({ timeMode: timeMode })),
}));

export default useSettignsStore;
