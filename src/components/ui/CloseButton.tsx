import styled from "styled-components";

const CloseButtonStyled = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = ({ onClose }: { onClose: () => void }) => {
  return (
    <CloseButtonStyled onClick={onClose}>
      <img src="/close.svg" alt="close" width={24} height={24} />
    </CloseButtonStyled>
  );
};