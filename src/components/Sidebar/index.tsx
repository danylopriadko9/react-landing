import React from 'react';
import {
  CloseIcon,
  Icon,
  SidebarBtnWrap,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
} from './SidebarElements';

interface ISidebar {
  toggle: () => void;
  isOpen: boolean;
}

const Sidebar: React.FC<ISidebar> = ({ toggle, isOpen }): JSX.Element => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to='about'>
            About
          </SidebarLink>
          <SidebarLink onClick={toggle} to='discover'>
            Discover
          </SidebarLink>
          <SidebarLink onClick={toggle} to='services'>
            Services
          </SidebarLink>
          <SidebarLink onClick={toggle} to='signup'>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute onClick={toggle} to='signin'>
            Sign In
          </SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
