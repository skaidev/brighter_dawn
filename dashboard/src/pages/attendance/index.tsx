import React from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Container,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import AttendanceCard from "components/attendance/AttendanceCard";
import StudentCard from "components/attendance/StudentCard";
import styled from "styled-components";

const TakeAttendComp = () => {
  return (
    <Wrapper className="front">
      <Container className=" d-flex flex-column flex-lg-row attendance">
        <div className="flex-grow-1 attendance-left mt-5">
          <Box className="attendance-left-top">
            <p>Smart Lists:</p>
            <FormControl className="mb-4" fullWidth>
              <InputLabel>Select Class</InputLabel>
              <Select label="select class" className="">
                <MenuItem>ss1</MenuItem>
                <MenuItem>ss2</MenuItem>
                <MenuItem>ss3</MenuItem>
              </Select>
            </FormControl>
            {/* <i className=" fas fa-search"></i> */}
            <form noValidate>
              <TextField label="Search Names, Reg no" fullWidth></TextField>
            </form>
          </Box>
          <StudentCard />
          <Grid container justifyContent="flex-end">
            <Button variant="outlined" className=" mt-2">
              mark all
            </Button>
          </Grid>
        </div>

        <div className="attendance-right flex-grow-1 mt-5">
          <div className=" d-flex right-top">
            <p className="fw-500 fs-24">Student Attendance Record</p>
            <p className="fw-600">Friday, 15/10/2021</p>
          </div>
          <AttendanceCard />
        </div>
      </Container>
    </Wrapper>
  );
};

export default TakeAttendComp;

const Wrapper = styled.div``;
