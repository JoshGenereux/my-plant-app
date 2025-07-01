import { Plant, PlantStore } from "@/types/types";
import { create } from "zustand";

const usePlantStore = create<PlantStore>((set) => ({
  plants: new Map<number, Plant>(),
  nextId: 1,
  selected: 0,

  addPlant: (plant) =>
    set((state) => {
      const id = state.nextId;
      const newPlants = new Map(state.plants);
      newPlants.set(id, { ...plant, id });
      return {
        plants: newPlants,
        nextId: id + 1,
      };
    }),

  removePlant: (id) =>
    set((state) => {
      const currentPlants = new Map(state.plants);
      currentPlants.delete(id);
      return { plants: currentPlants };
    }),

  selectPlant: (id) => set((state) => ({ selected: (state.selected = id) })),
}));

export default usePlantStore;
