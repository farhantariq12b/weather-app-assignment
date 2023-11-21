import styled from 'styled-components';
import { Colors } from '../../constants/colors';

interface NavBarProps {
  openModal: () => void;
}
export default function NavBar({ openModal }: NavBarProps) {
  const NavBar = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    /* background-color: ${Colors.Cyan}; */
  `;

  const Button = styled.button`
    min-width: 100px;
    padding: 8px 16px;
    background-color: ${Colors.Black};
    border-radius: 4px;
    border: none;
    font-size: 24px;
    cursor: pointer;
  `;

  return (
    <NavBar>
      <p>2</p>
      <Button onClick={openModal}>Setting</Button>
    </NavBar>
  );
}
