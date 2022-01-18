import React from "react";
import {
  Container,
  Box,
  Typography,
} from "@mui/material";
import { CalendarTodayOutlined } from "@mui/icons-material";
import styled from "styled-components";
import AttendanceCard from "components/attendance/AttendanceCard";
import AttendanceRecordComp from "components/attendance/AttendanceRecordComp";
import SelectInputComp from "components/attendance/SelectInputComp";
import { InputComp } from "lib/InputComp";

const ViewAttend = () => {
  return (
    <Wrapper className="view">
      <Container className="view-record">
        <Box className="view-record-top mt-5">
          <p>Smart Lists:</p>
          <div className="view-record-mid d-flex flex-lg-row justify-content-lg-center flex-column">
            <div className=" flex-grow-1 p-0">
              <SelectInputComp />
            </div>
            <div className=" flex-grow-2">
              <InputComp
                placeholder="Search Names, Reg no"
                className=""
                fullWidth
              ></InputComp>
            </div>
            <div className=" flex-grow-3">
              <InputComp placeholder="13/10/2020" fullWidth></InputComp>
            </div>
            <div className=" flex-grow-3">
              <InputComp placeholder="18/10/2021" fullWidth></InputComp>
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
