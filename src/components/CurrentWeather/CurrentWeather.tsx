import styled from "styled-components";
import useCityStore from "../../store/citiesStore";
import WeatherIcons from "../WeatherIcons";
import useSettignsStore from "../../store/settingsStore";
import { Colors } from "../../constants/colors";

export default function CurrentWeather() {
  const theme: string = useSettignsStore((state) => state.mode);
  const cityName = useCityStore((state) => state.selectedCity.name);
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${theme === "dark" ? Colors.White : Colors.Black};
  `;
  const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `;

  const ForcastDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > p {
      font-size: 1.2rem;
      margin: 0.1rem 0 !important;
      color: ${theme === "dark" ? Colors.White : Colors.Black};
    }
  `;
  return (
    <Container>
      <p>{cityName}</p>
      <RowContainer>
        <WeatherIcons />
        <ForcastDetailsContainer>
          <p>Temp:</p>
          <p>Feels Like:</p>
          <p>Humidity:</p>
          <p>Sunrise:</p>
          <p>Sunset:</p>
        </ForcastDetailsContainer>
      </RowContainer>
    </Container>
  );
}
