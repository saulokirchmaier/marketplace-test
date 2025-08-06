import styled from "styled-components";

export const P = styled.p<{
  $color?: "primary" | "secondary" | "white";
  $size?: "small" | "medium" | "large" | "extraLarge";
  $bold?: boolean;
}>`
  color: ${(props) => {
    if (props.$color === "primary") return "#000000";
    if (props.$color === "secondary") return "#56524E";
    if (props.$color === "white") return "#FFFFFF";
    return "#000000";
  }};
  font-size: ${(props) => {
    if (props.$size === "small") return "11.8px";
    if (props.$size === "medium") return "13.7px";
    if (props.$size === "large") return "15.9px";
    if (props.$size === "extraLarge") return "22.5px";
  }};
  font-weight: ${(props) => {
    if (props.$size === "small") return "500";
    if (props.$size === "medium") return "600";
    if (props.$size === "large") return "700";
    if (props.$size === "extraLarge") return "700";
  }};

  ${(props) =>
    props.$bold &&
    `
    font-weight: 700;
  `}

  line-height: ${(props) => {
    if (props.$size === "small") return "17.4px";
    if (props.$size === "medium") return "20.3px";
    if (props.$size === "large") return "23.2px";
    if (props.$size === "extraLarge") return "28.75px";
  }};

  letter-spacing: 0px;
`;
