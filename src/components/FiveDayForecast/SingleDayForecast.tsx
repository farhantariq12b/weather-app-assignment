import WeatherIcons from "../WeatherIcons";
import useSettignsStore from "../../store/settingsStore";
import { Colors } from "../../constants/colors";
import styled from "styled-components";
import { unitSign } from "../../util/common";

export default function SingleDayForecast(data: any) {
  const theme: string = useSettignsStore((state) => state.mode);
  const unit = useSettignsStore((state) => state.unit);
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
      <WeatherIcons
        weather={data?.weather?.[0].main || ""}
        description={data?.weather?.[0].description || ""}
      />
      <ForcastDetails>
        H:{`${data?.main?.temp_max || ""}${unitSign(unit)}`}/L:
        {`${data?.main?.temp_min || ""}${unitSign(unit)}`}
      </ForcastDetails>
    </Container>
  );
}
