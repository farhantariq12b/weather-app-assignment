import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Colors } from "../../constants/colors";
import UnitsSection from "./UnitsSection";
import TimeSection from "./TImeSection";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 400px;
  border: 2px solid ${Colors.Blue};
  border-radius: 10px;
  background-color: ${Colors.Black};
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: ${Colors.White};
  p {
    margin-bottom: 1rem;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.Black};
  width: 130px;
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.Blue};
  margin: 0px 0.5rem;
  border-radius: 10px;
  border: 2px solid ${Colors.Blue};
  line-height: 1.6;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
`;

interface ModalProps {
  showModal: boolean;
  toggle: () => void;
}

export const Modal: React.FC<ModalProps> = ({ showModal, toggle }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === e.target) {
      toggle();
    }
  };

  const keyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && showModal) {
        toggle();
      }
    },
    [showModal, toggle]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper>
            <ModalContent>
              <h4>Settings</h4>
              <UnitsSection />
              <TimeSection />
              <RowContainer>
                <Button onClick={toggle}>Cancle</Button>
                <Button onClick={toggle}>Save</Button>
              </RowContainer>
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
