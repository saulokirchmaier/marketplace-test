import styled from "styled-components";

export const Box = styled.div<{
  $direction?: "row" | "column";
  $gap?: number;
  $backgroundColor?: string;
  $padding?: number;
  $margin?: number;
  $justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
  $alignItems?: "center" | "flex-start" | "flex-end";
}>`
  background: ${(props) => props.$backgroundColor || "transparent"};
  display: flex;
  flex-direction: ${(props) => props.$direction};
  gap: ${(props) => props.$gap}px;
  padding: ${(props) => props.$padding || 0}px;
  margin: ${(props) => props.$margin || 0}px;
  justify-content: ${(props) => props.$justifyContent || "center"};
  align-items: ${(props) => props.$alignItems || "center"};
`;
