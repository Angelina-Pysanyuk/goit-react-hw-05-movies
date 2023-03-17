import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </StyledHeader>
      <Outlet />
    </>
  );
};

export default Header;
