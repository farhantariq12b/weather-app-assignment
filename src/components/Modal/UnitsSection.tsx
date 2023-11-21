import styled from "styled-components";
import { Colors } from "../../constants/colors";
import useSettignsStore from "../../store/settingsStore";

export default function UnitsSection() {
  const unit = useSettignsStore((state) => state.unit);
  const changeUnit = useSettignsStore((state) => state.changeUnit);
  console.log(unit);
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > p {
      font-size: 18px;
      font-weight: bold;
    }
  `;

  const Button = styled.button<{ $selected?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) =>
      props.$selected ? Colors.White : Colors.Black} !important;
    width: 100px;
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.Blue} !important;
    margin: 0px 0.5rem;
    border-radius: 10px;
    border: 2px solid ${Colors.Blue} !important;
    padding: 4px;
  `;
  const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
  `;
  return (
    <Container>
      <p>Unit</p>
      <RowContainer>
        <Button
          $selected={unit === "imperial"}
          onClick={() => changeUnit("imperial")}
        >
          Imperial
        </Button>
        <Button
          $selected={unit === "metric"}
          onClick={() => changeUnit("metric")}
        >
          Metric
        </Button>
        <Button
          $selected={unit === "standard"}
          onClick={() => changeUnit("standard")}
        >
          Standard
        </Button>
      </RowContainer>
    </Container>
  );
}
