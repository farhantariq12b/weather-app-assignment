import styled from "styled-components";
import NavigationButtons from "../components/NavigationButtons";
import FiveDayForcast from "../components/FiveDayForecast/FiveDayForcast";

export default function FiveDays() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 69.95vh;
  `;
  return (
    <Container>
      <FiveDayForcast />
      <NavigationButtons />
    </Container>
  );
}
