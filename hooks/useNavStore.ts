import { create } from "zustand";

type NavStore = {
  screenName: string;
  changeScreen: (name: string) => void;
  goHome: () => void;
};

const useNavStore = create<NavStore>((set) => ({
  screenName: "home",
  changeScreen: (name) =>
    set((state) => ({ screenName: (state.screenName = name) })),
  goHome: () => set((state) => ({ screenName: (state.screenName = "home") })),
}));

export default useNavStore;
