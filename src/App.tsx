import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
//Routes constants import.
import { routes } from "./constants/routes";
//Css Import
//Components import
import NavBar from "./components/NavBar/NavBar";
import CitiesSection from "./components/CityList/CityListSection";
import { Modal } from "./components/Modal/Modal";
//Pages Import.
import Home from "./pages/Home";
import FiveDays from "./pages/FiveDays";
import { Colors } from "./constants/colors";
import useSettignsStore from "./store/settingsStore";

function App() {
  const theme = useSettignsStore((state) => state.mode);
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: ${theme === "dark" ? Colors.Black : Colors.White};
  `;

  return (
    <Container>
      <BrowserRouter>
        <NavBar openModal={openModal} />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.fiveDay} element={<FiveDays />} />
        </Routes>
        <CitiesSection />
      </BrowserRouter>
      <Modal showModal={showModal} toggle={openModal} />
    </Container>
  );
}

export default App;
