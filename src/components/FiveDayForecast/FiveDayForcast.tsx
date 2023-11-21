import styled from "styled-components";
import useCityStore from "../../store/citiesStore";
import useSettignsStore from "../../store/settingsStore";
import { Colors } from "../../constants/colors";
import SingleDayForecast from "./SingleDayForecast";

export default function FiveDayForcast() {
  const theme: string = useSettignsStore((state) => state.mode);
  const cityName = useCityStore((state) => state.selectedCity.name);
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    min-height: 60vh;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${theme === "dark" ? Colors.White : Colors.Black};
  `;
  const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `;

  return (
    <Container>
      <p>{cityName}</p>
      <RowContainer>
        <SingleDayForecast />
        <SingleDayForecast />
        <SingleDayForecast />
      </RowContainer>
    </Container>
  );
}
