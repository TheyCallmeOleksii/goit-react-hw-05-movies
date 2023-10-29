import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledDiv = styled.div`
  /* margin-top: 20px; */
  padding: 10px;

  @media (min-width: 768px) {
    padding: 40px;
  }
  @media (min-width: 1280px) {
  }
`;
export const StyledLink = styled(Link)`
  color: #fff;
  border: 1px solid black;
  border-radius: 4px;
  background-color: black;
  padding: 2px 4px;
  text-decoration-line: none;
`;
export const StyledBox = styled.div`
  margin-top: 10px;

  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 1280px) {
  }
`;
export const StyledH1 = styled.h1`
  color: #fff;
  @media (min-width: 768px) {
    padding: 0 20px;
  }
`;
export const StyledP = styled.p`
  color: #fff;
  @media (min-width: 768px) {
    padding: 0 20px;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
`;
export const StyledItem = styled.li``;

export const StyledLinkComment = styled(Link)`
  margin-left: 10px;
  color: #fff;
  text-decoration: none;
`;
