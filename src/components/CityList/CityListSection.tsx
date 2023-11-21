import styled from "styled-components";
import CityTile from "./CityTile";
import { City } from "../../interface/city";
import useCityStore from "../../store/citiesStore";

export default function CitiesSection() {
  const cities = useCityStore((state) => state.citiesList);

  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Container>
      {cities.map((city: City, i: number) => (
        <CityTile key={i} {...city} />
      ))}
    </Container>
  );
}
