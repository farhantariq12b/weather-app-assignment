import styled from "styled-components";
import Icons from "./Icons";
import { getWeatherIcon } from "../util/common";
import useSettignsStore from "../store/settingsStore";
import { Colors } from "../constants/colors";

export default function WeatherIcons() {
  const theme = useSettignsStore((state) => state.mode);
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const WeatherTitle = styled.p`
    font-size: 1.2rem;
    color: ${theme === "dark" ? Colors.White : Colors.Black};
  `;
  const IconString = getWeatherIcon("");
  return (
    <Container>
      <Icons src={IconString} height={150} width={100} />
      <WeatherTitle>Title</WeatherTitle>
    </Container>
  );
}
