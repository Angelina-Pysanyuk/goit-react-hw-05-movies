import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;

  padding: 8px 0;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: black;
  text-decoration: none;
  font-size: 19px;
  font-weight: 500;
  text-transform: uppercase;
  :hover {
    color: #850000;
  }
`;

export const BackLink = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
