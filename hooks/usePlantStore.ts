import { Plant, PlantStore } from "@/types/types";
import { create } from "zustand";

const usePlantStore = create<PlantStore>((set) => ({
  plants: [],
  selected: 0,

  addPlant: (plant) =>
    set((state) => {
      const id = state.plants.length + 1;
      const newPlant: Plant = {
        ...plant,
        id,
      };
      return { plants: [...state.plants, newPlant] };
    }),

  removePlant: (id) =>
    set((state) => {
      const newArr = state.plants.filter((plant) => plant.id !== id);
      const corrected = newArr.map((plant, index) => ({
        ...plant,
        id: index + 1,
      }));
      return { plants: corrected };
    }),

  selectPlant: (id) => set((state) => ({ selected: (state.selected = id) })),
}));

export default usePlantStore;
