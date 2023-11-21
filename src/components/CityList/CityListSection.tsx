import styled from "styled-components";
import CityTile from "./CityTile";
import { City } from "../../interface/city";
import useCityStore from "../../store/citiesStore";

export default function CitiesSection() {
  const cities = useCityStore((state) => state.citiesList);
  const filterValue = useCityStore((state) => state.filterValue);

  const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1280px;
    min-height: 23.8vh;
    height: fit-content;
  `;

  return (
    <ListContainer>
      {cities
        .filter((item) => {
          if (!filterValue) return true;
          if (
            item.name.toLowerCase().includes(filterValue.toLowerCase()) ||
            item.name.includes(filterValue)
          ) {
            return true;
          }
        })
        .map((city: City, i: number) => (
          <CityTile key={i} {...city} />
        ))}
    </ListContainer>
  );
}
