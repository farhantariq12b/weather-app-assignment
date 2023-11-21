import { create } from "zustand";
import { City } from "../interface/city";
import { getRandomCities } from "../util/common";

type State = {
  citiesList: City[];
  selectedCity: City;
};

type Action = {
  changeSelectedCity: (selectedCity: State["selectedCity"]) => void;
};

const useCityStore = create<State & Action>((set) => ({
  citiesList: getRandomCities(),
  selectedCity: {
    country: "",
    name: "",
    lat: "",
    lng: "",
  },
  changeSelectedCity: (selectedCity) => set(() => ({ selectedCity })),
}));

export default useCityStore;
