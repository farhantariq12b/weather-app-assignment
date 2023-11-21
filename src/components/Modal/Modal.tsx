import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Colors } from "../../constants/colors";

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

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
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
        console.log("I pressed");
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
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
