import styled from "styled-components";
import { useState, useEffect } from "react";
import { Logo } from "./ui/Logo";
import { Search } from "./ui/Search";
import { Box } from "./ui/Box";
import { Button } from "./ui/Button";
import { P } from "./ui/P";
import { Modal } from "./ui/Modal";

const HeaderContainer = styled.div`
  width: 100%;
  height: 71px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1297px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Navigation = styled(Box)`
  width: 338px;
  @media (max-width: 1439px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  padding: 5px;
  @media (max-width: 1439px) {
    display: block;
  }
`;

const DesktopActions = styled(Box)`
  @media (max-width: 1439px) {
    display: none;
  }
`;

const MobileNavigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const SearchWrapper = styled.div`
  @media (max-width: 1439px) {
    display: none;
  }
`;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1440);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo />
        <SearchWrapper>
          <Search placeholder="Search SaaS/AI, Apps, Agencies, and more" />
        </SearchWrapper>
        <Navigation $justifyContent="space-between">
          <P $color="secondary" $size="small">Categories</P>
          <P $color="secondary" $size="small">Agencies</P>
          <P $color="secondary" $size="small">Freelancers</P>
          <P $color="secondary" $size="small">Students</P>
          <P $color="primary" $size="small" $bold>Hire Us</P>
        </Navigation>
        <DesktopActions $gap={7}>
          <Button $size="small" onClick={() => console.log("clicked")}>Sign Up</Button>
          <Button $outlined $size="small" onClick={() => console.log("clicked")}>
            Login
            <img src="/login.svg" alt="login" />
          </Button>
        </DesktopActions>
        <MenuButton onClick={toggleMenu}>
          <img src="/menu.svg" alt="menu" width={24} height={24} />
        </MenuButton>

        <Modal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          <MobileNavigation>
            <Search placeholder="Search SaaS/AI, Apps, Agencies, and more" />
            <P $color="secondary" $size="small">Categories</P>
            <P $color="secondary" $size="small">Agencies</P>
            <P $color="secondary" $size="small">Freelancers</P>
            <P $color="secondary" $size="small">Students</P>
            <P $color="primary" $size="small" $bold>Hire Us</P>
            <Button $size="small" onClick={() => console.log("clicked")}>Sign Up</Button>
            <Button $outlined $size="small" onClick={() => console.log("clicked")}>
              Login
              <img src="/login.svg" alt="login" />
            </Button>
          </MobileNavigation>
        </Modal>
      </HeaderContent>
    </HeaderContainer>
  );
};
