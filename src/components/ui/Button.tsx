import styled from "styled-components";

export const Button = styled.button<{
  $outlined?: boolean;
  $size?: "small" | "large";
  $disabled?: boolean;
}>`
  background: ${(props) => (props.$outlined ? "white" : "#000000")};
  color: ${(props) => (props.$outlined ? "#000000" : "white")};
  font-size: ${(props) => (props.$size === "small" ? 12 : 14.5)}px;

  line-height: ${(props) => (props.$size === "small" ? "100%" : "17.4px")};
  width: ${(props) => (props.$size === "small" ? 115 : 202)}px;
  height: ${(props) => (props.$size === "small" ? 35 : 48)}px;
  padding: ${(props) => (props.$size === "small" ? "9px 18px 11px 10px" : "10px 44px 10px 44px")};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: 500;
  font-family: var(--font-inter);
  border: 1px solid #000000;
  border-radius: 46px;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.$outlined ? "#f0f0f0" : "#000000C0")};
  }

  ${(props) =>
    props.$disabled &&
    `
    background: #696a6c;
    color: #FFFFFF;
    border: 1px solid #696a6c;
    &:hover {
      background: #696a6c;
      cursor: not-allowed;
    };
  `}
`;
