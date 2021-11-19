import React from "react";
import {
  Container,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { CalendarTodayOutlined } from "@mui/icons-material";
import styled from "styled-components";

const ViewAttend = () => {
  return (
    <Wrapper className="view">
      <Container className="view-record">
        <Box className="view-record-top mt-5">
          <p>Smart Lists:</p>
          <div className="view-record-mid d-flex">
            <div className=" flex-grow-1">
              <FormControl fullWidth>
                <InputLabel className="py-0">Select Class</InputLabel>
                <Select label="select class" className="">
                  <MenuItem>ss1</MenuItem>
                  <MenuItem>ss2</MenuItem>
                  <MenuItem>ss3</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className=" flex-grow-2">
              <TextField
                placeholder="Search Names, Reg no"
                fullWidth
              ></TextField>
            </div>
            <div className=" flex-grow-3">
              <TextField placeholder="13/10/2020" fullWidth></TextField>
            </div>
            <div className=" flex-grow-3">
              <TextField placeholder="18/10/2021" fullWidth></TextField>
            </div>
          </div>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default ViewAttend;

const Wrapper = styled.div``;
