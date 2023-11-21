import styled from "styled-components";
import { Colors } from "../../constants/colors";
import { City } from "../../interface/city";
import useCityStore from "../../store/citiesStore";

export default function CityTile({ country, name, lat, lng }: City) {
  const changeSelectedCity = useCityStore((state) => state.changeSelectedCity);
  const selectedCity = useCityStore((state) => state.selectedCity);
  const selected = selectedCity.name === name;
  const Container = styled.button`
    padding: 3px;
    margin: 10px;
    width: 180px;
    background-color: ${selected ? Colors.White : Colors.Black};
    border: 2px solid ${Colors.Blue};
    border-radius: 6px;
  `;

  const Text = styled.p`
    color: ${selected ? Colors.Blue : Colors.White};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `;
  return (
    <Container
      onClick={() =>
        changeSelectedCity({
          country,
          name,
          lat,
          lng,
        })
      }
    >
      <Text>{name}</Text>
    </Container>
  );
}
