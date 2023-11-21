import styled from 'styled-components';
import { Colors } from '../../constants/colors';
import { City } from '../../interface/city';

interface CityTileProps {
  country: string;
  name: string;
  lat: string;
  lng: string;
  onChange: (city: City) => void;
  selected: boolean;
}
export default function CityTile({
  country,
  name,
  lat,
  lng,
  onChange,
  selected,
}: CityTileProps) {
  const Container = styled.button`
    padding: 3px;
    margin: 10px;
    width: 150px;
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
        onChange({
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
