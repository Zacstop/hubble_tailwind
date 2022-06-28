import React from 'react';
import {
  Image,
  Logo,
  Nav,
  NavItem,
  NavItems,
  StyledHeader,
} from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Button } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';
import { Link } from 'react-scroll';
import { slide as Menu } from 'react-burger-menu';
import styles from './styles/Menu.styled';
import { useMediaQuery } from 'react-responsive';

export default function Header() {
  const deviceSize = {
    mobile: 640,
    tablet: 768,
    laptop: 1024,
    desktop: 1280,
    widescreen: 1536,
  };
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <StyledHeader>
      <Nav>
        <Logo src="./images/logo.svg" alt="/" />
        {isMobile ? (
          <Menu right styles={styles}>
            <NavItems>
              <NavItem>
                <Link to="/home">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/">Explore</Link>
              </NavItem>
              <NavItem>
                <Link to="/">Every thing</Link>
              </NavItem>
            </NavItems>
          </Menu>
        ) : (
          <NavItems>
            <NavItem>
              <Link to="/home">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/">Explore</Link>
            </NavItem>
            <NavItem>
              <Link to="/">Every thing</Link>
            </NavItem>
          </NavItems>
        )}
        <Button>Try It Free</Button>
      </Nav>

      <Container>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="/" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
