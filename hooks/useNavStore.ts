import { NavStore } from "@/types/types";
import { create } from "zustand";

const useNavStore = create<NavStore>((set) => ({
  screenName: "home",

  changeScreen: (name) =>
    set((state) => ({ screenName: (state.screenName = name) })),

  goHome: () => set((state) => ({ screenName: (state.screenName = "home") })),
}));

export default useNavStore;
