import { useEffect, useState } from 'react';
import { getRandomCities } from '../../util/common';
import styled from 'styled-components';
import CityTile from './CityTile';
import { City } from '../../interface/city';

export default function CitiesSection() {
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<City>({
    country: '',
    name: '',
    lat: '',
    lng: '',
  });
  useEffect(() => {
    setCities(getRandomCities());
  }, []);

  function setCity(city: City): void {
    console.log(city);
    setSelectedCity(city);
  }

  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Container>
      {cities.map((city: City, i: number) => (
        <CityTile
          key={i}
          {...city}
          onChange={setCity}
          selected={city.name === selectedCity.name}
        />
      ))}
    </Container>
  );
}
