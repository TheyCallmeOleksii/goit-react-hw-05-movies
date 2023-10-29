import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border: 1px solid black;
  border-radius: 4px;
  text-decoration: none;
  background-color: black;
  color: #fff;
  margin-right: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  &.active {
    color: white;
    font-weight: 10px;
    background-color: red;
  }
`;
export const StyledDNav = styled.nav`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-right: 10px;
`;
export const StyledLogo = styled.img`
  width: 100px;
  position: absolute;
  text-align: center;
  margin-top: 6px;
  margin-left: 19px;
  margin-bottom: 6px;
`;
export const StyledP = styled.p`
  text-decoration-line: none;
  color: #fff;
  margin: 0;
`;
