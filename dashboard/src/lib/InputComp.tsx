import React from "react";
import styled from "styled-components";
import {
  FormControl,
  InputLabel,
  Select,
  TextField,
  MenuItem,
} from "@mui/material";

export const InputComp = styled(TextField)`
  &.MuiSelect-select .MuiSelect-outlined .MuiOutlinedInput-input {
    padding: 0;
  }
`;

const InputCompSelect = () => {
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

export default InputCompSelect;

const Wrapper = styled.div``;
