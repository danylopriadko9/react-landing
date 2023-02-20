import React from 'react';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  NavBth,
  NavBthLink,
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

interface INavbar {
  toggle?: () => void;
}

const Navbar: React.FC<INavbar> = ({ toggle }): JSX.Element => {
  const [scrollNav, setScrollNav] = React.useState<boolean>(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else setScrollNav(false);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', changeNav);
  });

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo onClick={toggleHome} to='/'>
            dolla
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks spy={true} duration={500} smooth={true} to='about'>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks spy={true} duration={500} smooth={true} to='discover'>
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks spy={true} duration={500} smooth={true} to='services'>
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks spy={true} duration={500} smooth={true} to='signup'>
                Sign Up
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBth>
            <NavBthLink spy={true} duration={500} smooth={true} to='signin'>
              Sign In
            </NavBthLink>
          </NavBth>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
