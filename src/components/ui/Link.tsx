import styled from "styled-components";

export const Link = styled.a<{
  $color?: "primary" | "secondary";
  $size?: "small" | "medium" | "large";
  $bold?: boolean;
}>`
  color: ${(props) => {
    if (props.$color === "primary") return "#000000";
    if (props.$color === "secondary") return "#000000B5";
    return "#000000";
  }};
  font-size: ${(props) => {
    if (props.$size === "small") return "12px";
    if (props.$size === "medium") return "15.6px";
    if (props.$size === "large") return "16px";
  }};
  font-weight: ${(props) => {
    if (props.$size === "small") return "500";
    if (props.$size === "medium") return "500";
    if (props.$size === "large") return "700";
  }};

  ${(props) =>
    props.$bold &&
    `
    font-weight: 700;
  `}

  line-height: ${(props) => {
    if (props.$size === "small") return "100%";
    if (props.$size === "medium") return "23.2px";
    if (props.$size === "large") return "23.2px";
  }};
  letter-spacing: 0px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
