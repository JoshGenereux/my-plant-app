import { ImageSourcePropType } from "react-native";
import { create } from "zustand";

type Plant = {
  name: string;
  id: number;
  type: string;
  info: string;
  image?: ImageSourcePropType | string;
};

type PlantStore = {
  plants: Plant[];
  nextId: number;
  selected: number;
  addPlant: (plant: Omit<Plant, "id">) => void;
  removePlant: (id: number) => void;
  selectPlant: (id: number) => void;
};

const usePlantStore = create<PlantStore>((set) => ({
  plants: [],
  nextId: 1,
  selected: 0,
  addPlant: (plant) =>
    set((state) => {
      const id = state.nextId;
      return {
        plants: [...state.plants, { ...plant, id }],
        nextId: id + 1,
      };
    }),
  removePlant: (id) =>
    set((state) => ({
      plants: state.plants.filter((p) => p.id !== id),
    })),
  selectPlant: (id) => set((state) => ({ selected: (state.selected = id) })),
}));

export default usePlantStore;
