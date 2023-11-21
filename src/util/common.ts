import { City } from "../interface/city";
import cities from "cities.json";
import UnknownIcon from "../assets/weather-icons/unknown.svg";
import ClearIcon from "../assets/weather-icons/weather-clear.svg";
import CloudyIcon from "../assets/weather-icons/weather-cloudy.svg";
import FogIcon from "../assets/weather-icons/weather-fog.svg";
import HailIcon from "../assets/weather-icons/weather-hail.svg";
import LightningRainyIcon from "../assets/weather-icons/weather-lightning-rainy.svg";
import LightningIcon from "../assets/weather-icons/weather-lightning.svg";
import NightIcon from "../assets/weather-icons/weather-night.svg";
import PartlyCloudIcon from "../assets/weather-icons/weather-partly-cloudy.svg";
import PouringIcon from "../assets/weather-icons/weather-pouring.svg";
import SnowyHeavyIcon from "../assets/weather-icons/weather-snowy-heavy.svg";
import SnowyRainyIcon from "../assets/weather-icons/weather-snowy-rainy.svg";
import SnowyIcon from "../assets/weather-icons/weather-snowy.svg";
import SunnyIcon from "../assets/weather-icons/weather-sunny.svg";
import SunsetDownIcon from "../assets/weather-icons/weather-sunset-down.svg";
import SunsetUpIcon from "../assets/weather-icons/weather-sunset-up.svg";
import SunsetIcon from "../assets/weather-icons/weather-sunset.svg";
import WindyVariantIcon from "../assets/weather-icons/weather-windy-variant.svg";
import WindyIcon from "../assets/weather-icons/weather-windy.svg";

export function getRandomCities() {
  const citiesArray: City[] = cities as City[];
  for (let i = citiesArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [citiesArray[i], citiesArray[j]] = [citiesArray[j], citiesArray[i]];
  }
  const selectedCities = citiesArray.slice(0, 18);
  return selectedCities;
}

export function getWeatherIcon(weather: string) {
  switch (weather) {
    case "clear":
      return ClearIcon;
    case "fog":
      return FogIcon;
    case "cloudy":
      return CloudyIcon;
    case "hail":
      return HailIcon;
    case "lightningrainy":
      return LightningRainyIcon;
    case "lightning":
      return LightningIcon;
    case "night":
      return NightIcon;
    case "partlycloud":
      return PartlyCloudIcon;
    case "pouring":
      return PouringIcon;
    case "snowyheavy":
      return SnowyHeavyIcon;
    case "snowyrainy":
      return SnowyRainyIcon;
    case "snowy":
      return SnowyIcon;
    case "sunny":
      return SunnyIcon;
    case "sunsetdown":
      return SunsetDownIcon;
    case "sunsetup":
      return SunsetUpIcon;
    case "sunset":
      return SunsetIcon;
    case "windyvariant":
      return WindyVariantIcon;
    case "windy":
      return WindyIcon;

    default:
      return UnknownIcon;
  }
}
