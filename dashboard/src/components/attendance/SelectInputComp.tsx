import React from "react";
import styled from "styled-components";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SelectInputComp = () => {
  return (
    <Wrapper>
      <FormControl className="form" fullWidth>
        <InputLabel className="">Select Class</InputLabel>
        <Select label="select class" className="">
          <MenuItem>ss1</MenuItem>
          <MenuItem>ss2</MenuItem>
          <MenuItem>ss3</MenuItem>
        </Select>
      </FormControl>
    </Wrapper>
  );
};

export default SelectInputComp;

const Wrapper = styled.div``;
