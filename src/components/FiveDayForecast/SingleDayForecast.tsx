import WeatherIcons from "../WeatherIcons";
import useSettignsStore from "../../store/settingsStore";
import { Colors } from "../../constants/colors";
import styled from "styled-components";

export default function SingleDayForecast() {
  const theme: string = useSettignsStore((state) => state.mode);

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 1rem;
  `;
  const ForcastDetails = styled.p`
    text-align: center;
    font-size: 1.2rem;
    margin: 0.1rem 0 !important;
    color: ${theme === "dark" ? Colors.White : Colors.Black};
  `;
  return (
    <Container>
      <WeatherIcons />
      <ForcastDetails>
        H:{1}ºC/L:{2}ºC
      </ForcastDetails>
    </Container>
  );
}
