import {
  Button,
  Checkbox,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const HomePage = () => {
  return (
    <section className="container attendance">
      <Box className="attendance-card mt-5">
        <p>Smart Lists:</p>
        <FormControl className=" form-control">
          <InputLabel id="demo-simple-select-disabled-label">
            Select Class
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            label="select class"
            className=""
          >
            <MenuItem>ss1</MenuItem>
            <MenuItem>ss2</MenuItem>
            <MenuItem>ss3</MenuItem>
          </Select>
        </FormControl>

        {/* <i className=" fas fa-search"></i> */}
        <TextField
          placeholder="Search Names, Reg no"
          className=" form-control mt-3"
        ></TextField>
      </Box>
		<div className=" d-flex">
		<FormControlLabel
          control={<Checkbox defaultChecked />}
          label="0be Sapmson"
        />
        <p>SS2 Student</p>
		</div>
      
    </section>
  );
};

export default HomePage;
