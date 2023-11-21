import styled from "styled-components";
import { Colors } from "../../constants/colors";
import ThemeSwitch from "../../assets/weather-icons/theme-switch.svg";
import CloseIcon from "../../assets/weather-icons/close-circle.svg";
import Icons from "../Icons";
import useSettignsStore from "../../store/settingsStore";
import Clock from "../Clock";
import { useState } from "react";
import useCityStore from "../../store/citiesStore";

interface NavBarProps {
  openModal: () => void;
}
export default function NavBar({ openModal }: NavBarProps) {
  const changeMode = useSettignsStore((state) => state.changeMode);
  const theme = useSettignsStore((state) => state.mode);
  const changeFilter = useCityStore((state) => state.changeFilter);

  const [showTextField, setShowTextField] = useState(false);
  function toggleTextField() {
    setShowTextField((prev) => !prev);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeFilter(event.target.value);
  };

  const NavBar = styled.nav`
    display: flex;
    width: 100%;
    max-width: 1280px;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  `;

  const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  `;

  const Button = styled.button`
    min-width: 100px;
    background-color: ${theme === "dark" ? Colors.Black : Colors.White};
    color: ${theme === "dark" ? Colors.White : Colors.Black};
    border: none;
    font-size: 1.25rem;
    font-weight: bold;
    cursor: pointer;
  `;

  const TextFieldContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${theme === "dark" ? Colors.Black : Colors.White};
    border: 2px solid ${Colors.Blue};
    border-radius: 4px;
    padding: 0 0.5rem;
    ::placeholder {
      color: ${theme === "dark" ? Colors.White : Colors.Black};
    }
  `;
  const TextField = styled.input`
    color: ${theme === "dark" ? Colors.White : Colors.Black};
    outline: none;
    background-color: ${theme === "dark" ? Colors.Black : Colors.White};
    border: none;
    height: 30px;
  `;

  return (
    <NavBar>
      <Clock />
      <RightContainer>
        {!showTextField ? (
          <Button onClick={toggleTextField}>Search</Button>
        ) : (
          <TextFieldContainer>
            <TextField
              type="text"
              placeholder="Search"
              onChange={handleChange}
            />
            <Icons
              src={CloseIcon}
              width={20}
              height={20}
              color={Colors.Blue}
              onChange={toggleTextField}
            />
          </TextFieldContainer>
        )}
        <Button onClick={openModal}>Setting</Button>
        <Icons
          src={ThemeSwitch}
          width={30}
          height={30}
          color={Colors.Blue}
          onChange={changeMode}
        />
      </RightContainer>
    </NavBar>
  );
}
