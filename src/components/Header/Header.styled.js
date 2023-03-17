import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  padding: 10px;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  &.active {
    color: #dc0000;
    border-bottom: 2px solid #dc0000;
  }
  &:hover {
    color: #850000;
  }
  &:focus {
    color: #850000;
  }
`;

export const StyledHeader = styled.header`
  padding: 20px;
  box-shadow: 0px 3px 3px #d6d6d6;
`;
