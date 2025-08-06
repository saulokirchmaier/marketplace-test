import styled from "styled-components";

export const P = styled.p<{
  $color?: "primary" | "secondary";
  $size?: "small" | "medium" | "large";
  $bold?: boolean;
}>`
  color: ${(props) => {
    if (props.$color === "primary") return "#000000";
    if (props.$color === "secondary") return "#56524E";
    return "#000000";
  }};
  font-size: ${(props) => {
    if (props.$size === "small") return "11.8px";
    if (props.$size === "medium") return "13.7px";
    if (props.$size === "large") return "16px";
  }};
  font-weight: ${(props) => {
    if (props.$size === "small") return "500";
    if (props.$size === "medium") return "600";
    if (props.$size === "large") return "600";
  }};

  ${(props) =>
    props.$bold &&
    `
    font-weight: 700;
  `}

  line-height: ${(props) => {
    if (props.$size === "small") return "17.4px";
    if (props.$size === "medium") return "20.3px";
    if (props.$size === "large") return "20.3px";
  }};

  letter-spacing: 0px;
`;
