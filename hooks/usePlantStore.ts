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
  addPlant: (plant: Plant) => void;
  removePlant: (id: number) => void;
};

const usePlantStore = create<PlantStore>((set) => ({
  plants: [],
  addPlant: (plant) => set((state) => ({ plants: [...state.plants, plant] })),
  removePlant: (id) =>
    set((state) => ({
      plants: state.plants.filter((p) => p.id !== id),
    })),
}));

export default usePlantStore;
