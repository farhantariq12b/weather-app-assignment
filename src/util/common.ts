import { City } from '../interface/city';
import cities from 'cities.json';

export function getRandomCities() {
  const citiesArray: City[] = cities as City[];
  // Shuffle the cities array
  for (let i = citiesArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [citiesArray[i], citiesArray[j]] = [citiesArray[j], citiesArray[i]];
  }
  // Select the first 18 cities from the shuffled array
  const selectedCities = citiesArray.slice(0, 18);
  return selectedCities;
}
