import styled from "styled-components";
import { useState, useEffect } from "react";
import { Logo } from "./ui/Logo";
import { Search } from "./ui/Search";
import { Box } from "./ui/Box";
import { Button } from "./ui/Button";
import { Modal } from "./ui/Modal";
import { Link } from "./ui/Link";
import { MenuButton } from "./ui/MenuButton";

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
  height: 35px;
  max-width: 1297px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Navigation = styled(Box)`
  width: 338px;
  @media (max-width: 1440px) {
    display: none;
  }
`;

const MediaBox = styled(Box)`
  @media (max-width: 1440px) {
    display: none;
  }
`;

const MobileNavigation = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo />
        <MediaBox>
          <Search placeholder="Search SaaS/AI, Apps, Agencies, and more" />
        </MediaBox>
        <Navigation $justifyContent="space-between">
          <Link $color="secondary" $size="small" href="#">Categories</Link>
          <Link $color="secondary" $size="small" href="#">Agencies</Link>
          <Link $color="secondary" $size="small" href="#">Freelancers</Link>
          <Link $color="secondary" $size="small" href="#">Students</Link>
          <Link $color="primary" $size="small" $bold href="#">Hire Us</Link>
        </Navigation>
        <MediaBox $gap={7}>
          <Button $size="small" onClick={() => console.log("clicked")}>Sign Up</Button>
          <Button $outlined $size="small" onClick={() => console.log("clicked")}>
            Login
            <img src="/login.svg" alt="login" />
          </Button>
        </MediaBox>
        <MenuButton toggleMenu={toggleMenu} />

        <Modal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          <MobileNavigation $gap={20} $justifyContent="flex-start" $alignItems="center">
            <Search placeholder="Search SaaS/AI, Apps, Agencies, and more" />
            <Box $direction="column" $gap={12}>
              <Link $color="secondary" $size="small" href="#">Categories</Link>
              <Link $color="secondary" $size="small" href="#">Agencies</Link>
              <Link $color="secondary" $size="small" href="#">Freelancers</Link>
              <Link $color="secondary" $size="small" href="#">Students</Link>
              <Link $color="primary" $size="small" $bold href="#">Hire Us</Link>
            </Box>
            <Box $direction="column" $gap={12}>
              <Button $size="small" onClick={() => console.log("clicked")}>Sign Up</Button>
              <Button $outlined $size="small" onClick={() => console.log("clicked")}>
                Login
                <img src="/login.svg" alt="login" />
              </Button>
            </Box>
          </MobileNavigation>
        </Modal>
      </HeaderContent>
    </HeaderContainer>
  );
};
