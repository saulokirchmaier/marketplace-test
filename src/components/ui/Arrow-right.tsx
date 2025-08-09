import styled from "styled-components";

const ArrowRightStyled = styled.img`
  width: 4.8px;
  height: 8px;
`;

export const ArrowRight = () => {
  return <ArrowRightStyled src="/arrow-right.svg" alt="arrow-right" />
}
