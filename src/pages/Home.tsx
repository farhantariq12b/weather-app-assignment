import styled from "styled-components";
import CurrentWeather from "../components/CurrentForcast/CurrentForcast";
import NavigationButtons from "../components/NavigationButtons";

export default function Home() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 69.95vh;
  `;
  return (
    <Container>
      <CurrentWeather />
      <NavigationButtons />
    </Container>
  );
}
