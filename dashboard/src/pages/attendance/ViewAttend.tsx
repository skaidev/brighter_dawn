import React from "react";
import {
  Container,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { CalendarTodayOutlined } from "@mui/icons-material";
import styled from "styled-components";
import AttendanceCard from "components/attendance/AttendanceCard";
import AttendanceRecordComp from "components/attendance/AttendanceRecordComp";

const ViewAttend = () => {
  return (
    <Wrapper className="view">
      <Container className="view-record">
        <Box className="view-record-top mt-5">
          <p>Smart Lists:</p>
          <div className="view-record-mid d-flex flex-lg-row justify-content-lg-center flex-column">
            <div className=" flex-grow-1 p-0">
              <FormControl className="form" fullWidth>
                <InputLabel className="">Select Class</InputLabel>
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
                className=""
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
        <Typography className="mt-5 mb-3 fw-500 fs-24">Student Attendance Record</Typography>
        <AttendanceRecordComp />
      </Container>
    </Wrapper>
  );
};

export default ViewAttend;

const Wrapper = styled.div`
  .view-record {
    &-mid {
      .form {
        padding: 0!important;
      }
    }
  }
`;
