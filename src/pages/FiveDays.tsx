import styled from "styled-components";
import NavigationButtons from "../components/NavigationButtons";

export default function FiveDays() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  return (
    <Container>
      <NavigationButtons />
    </Container>
  );
}
