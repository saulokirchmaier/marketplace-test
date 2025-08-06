import styled from "styled-components";
import { ReactNode, useEffect } from "react";
import { CloseButton } from "./CloseButton";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  max-width: 350px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClose={onClose} />
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};
