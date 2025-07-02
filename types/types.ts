import { ImageSourcePropType } from "react-native";

export type Plant = {
  id: number;
  name: string;
  type: string;
  info: string;
  image?: ImageSourcePropType | string;
};

export type PlantStore = {
  plants: Plant[];
  selected: number;
  addPlant: (plant: Plant) => void;
  removePlant: (id: number) => void;
  selectPlant: (id: number) => void;
};

export type NavStore = {
  screenName: string;
  changeScreen: (name: string) => void;
  goHome: () => void;
};
