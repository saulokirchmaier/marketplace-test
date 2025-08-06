import Image from "next/image";
import styled from "styled-components";

const MenuButtonStyled = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  padding: 5px;
  @media (max-width: 1440px) {
    display: block;
  }
`;

export const MenuButton = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <MenuButtonStyled onClick={toggleMenu}>
      <Image src="/menu.svg" alt="menu" width={24} height={24} />
    </MenuButtonStyled>
  );
};
