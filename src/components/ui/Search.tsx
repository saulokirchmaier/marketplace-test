import styled from "styled-components";
import Image from "next/image";

const SearchContainer = styled.div`
  position: relative;
  width: 419px;
  height: 35px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #000000;
  border-radius: 46px;
  padding: 9px 18px 11px 30px;

  &::placeholder {
  font-size: 12px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0px;
  horizontal-align: center;
  vertical-align: middle;
  }

  &:focus {
    outline: 1px solid #000000;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const Search = ({ placeholder }: { placeholder?: string }) => {
  return (
    <SearchContainer>
      <SearchIcon>
        <Image src="/search-normal.svg" alt="Search" width={12} height={12} />
      </SearchIcon>
      <SearchInput placeholder={placeholder} />
    </SearchContainer>
  );
};
