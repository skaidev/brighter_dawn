import React from "react";
import {
  Grid,
  Container,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";
import AttendanceCard from "components/attendance/AttendanceCard";
import StudentCard from "components/attendance/StudentCard";
import styled from "styled-components";
import SelectInputComp from "components/attendance/SelectInputComp";
import { ButtonComp } from "lib/ButtonComp";
import { SelectComp } from "lib/InputComp";
import { StyledInputBase, TextIputBase } from "lib/InputBaseComp";

const TakeAttendComp = () => {
  return (
    <Wrapper className="front">
      <Container className=" d-flex flex-column flex-lg-row attendance">
        <div className="flex-grow-1 attendance-left mt-5">
          <Box className="attendance-left-top">
            <p>Smart Lists:</p>
            <div className=" mb-4">
              <FormControl fullWidth>
                <InputLabel>Everyone</InputLabel>
                <SelectComp>
                  <MenuItem>Obe Sampson</MenuItem>
                  <MenuItem>Obe Sampson</MenuItem>
                  <MenuItem>Obe Sampson</MenuItem>
                </SelectComp>
              </FormControl>
            </div>
            <form noValidate>
              <StyledInputBase placeholder="Search Names, Reg no" fullWidth />
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
