import styled from 'styled-components';

export const StyledH3 = styled.h3`
  color: #fff;
`;
export const StyledName = styled.b`
  color: #fff;
  display: flex;
`;
export const StyledCharacter = styled.p`
  color: #fff;
`;
export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 10px;
    gap: 10px;
  }
  @media (min-width: 1280px) {
  }
`;
export const StyledItem = styled.li`
  width: 150px;

  @media (min-width: 768px) {
    width: 159px;
  }
  @media (min-width: 1280px) {
  }
`;

export const StyledImg = styled.img`
  &:hover {
    transform: scale(1.02) translateZ(0);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 20px orange;
    cursor: pointer;
  }
`;
