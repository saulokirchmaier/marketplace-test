import styled from "styled-components";

export const Box = styled.div<{
  $direction?: "row" | "column",
  $gap?: number,
  $backgroundColor?: string,
  $padding?: number,
  $justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around',
  $alignItems?: 'center' | 'flex-start' | 'flex-end'
}>`
  background: ${(props) => props.$backgroundColor || 'transparent'};
  display: flex;
  flex-direction: ${(props) => props.$direction};
  gap: ${(props) => props.$gap}px;
  padding: ${(props) => props.$padding || 8}px;
  justify-content: ${(props) => props.$justifyContent || 'center'};
  align-items: ${(props) => props.$alignItems || 'center'};
`;
