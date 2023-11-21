import styled from "styled-components";
import CityTile from "./CityTile";
import { City } from "../../interface/city";
import useCityStore from "../../store/citiesStore";

export default function CitiesSection() {
  const cities = useCityStore((state) => state.citiesList);

  const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1280px;
  `;

  return (
    <ListContainer>
      {cities.map((city: City, i: number) => (
        <CityTile key={i} {...city} />
      ))}
    </ListContainer>
  );
}
