import styled from 'styled-components';

export const StyledUl = styled.ul``;
export const StyledLi = styled.li`
  list-style: none;
  margin-right: 10px;
  & b,
  p {
    color: #fff;
  }
  & p {
    width: 100%;
    padding: 0 5px;
    text-align: justify;
    @media (min-width: 768px) {
      /* padding: 10px; */
    }
    @media (min-width: 1280px) {
    }
  }
`;
