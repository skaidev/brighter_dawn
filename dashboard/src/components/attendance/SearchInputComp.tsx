import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import styled from "styled-components";
import { StyledInputBase } from "lib/InputBaseComp";

const SearchInputComp = () => {
  return (
    <Wrapper className=" mt-2">
      <Search>
        <SearchIconWrapper>
          <SearchIcon style={{ color: "black" }} />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search Names" />
      </Search>
    </Wrapper>
  );
};

export default SearchInputComp;

const Wrapper = styled.div``;

const Search = styled("div")`
  position: relative;
  border-radius: 8px;
  width: 100%;
`;

const SearchIconWrapper = styled("div")`
  padding: 0.5rem;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 997;
`;