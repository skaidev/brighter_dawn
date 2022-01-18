import React from "react";
import {
  Grid,
  Container,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import AttendanceCard from "components/attendance/AttendanceCard";
import StudentCard from "components/attendance/StudentCard";
import styled from "styled-components";
import SelectInputComp from "components/attendance/SelectInputComp";
import { ButtonComp } from "lib/ButtonComp";

const TakeAttendComp = () => {
  return (
    <Wrapper className="front">
      <Container className=" d-flex flex-column flex-lg-row attendance">
        <div className="flex-grow-1 attendance-left mt-5">
          <Box className="attendance-left-top">
            <p>Smart Lists:</p>
            <div className=" mb-4">
            <SelectInputComp />
            </div>
            {/* <i className=" fas fa-search"></i> */}
            <form noValidate>
              <TextField label="Search Names, Reg no" fullWidth></TextField>
            </form>
          </Box>
          <StudentCard />
          <Grid container justifyContent="flex-end">
            <ButtonComp variant="outlined">mark all</ButtonComp>
          </Grid>
        </div>

        <div className="attendance-right flex-grow-1 mt-5">
          <AttendanceCard />
        </div>
      </Container>
    </Wrapper>
  );
};

export default TakeAttendComp;

const Wrapper = styled.div``;
