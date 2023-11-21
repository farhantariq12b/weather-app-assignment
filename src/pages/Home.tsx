import { Link } from 'react-router-dom';
import { routes } from '../constants/routes';
import styled from 'styled-components';

export default function Home() {
  const Container = styled.div`
    height: 600px;
  `;
  return (
    <Container>
      Home
      <Link to={routes.fiveDay} />
    </Container>
  );
}
