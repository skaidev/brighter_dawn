import {
  AddBox,
  CheckBox,
  CheckBoxOutlineBlank,
  Delete,
} from "@mui/icons-material";
import {
  Container,
  Typography,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import StudentCard from "components/attendance/StudentCard";
import { InputComp, SelectComp } from "lib/InputComp";
import React from "react";
import styled from "styled-components";

const StudentsPage = () => {
  return (
    <Wrapper className="student">
      <Container>
        <Box className="student-section">
          <Typography className="top">Smart Lists:</Typography>
          <div>
            <FormControl fullWidth>
              <InputLabel>Everyone</InputLabel>
              <SelectComp>
                <MenuItem>Obe Sampson</MenuItem>
                <MenuItem>Obe Sampson</MenuItem>
                <MenuItem>Obe Sampson</MenuItem>
              </SelectComp>
            </FormControl>
          </div>
          <InputComp className="bottom" fullWidth>
            Search Names
          </InputComp>
        </Box>
        <div className="student-card">
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
        </div>
        <div className="base d-flex">
          <div className=" d-flex">
            <AddBox />
            <Typography>Add</Typography>
          </div>
          <div className=" d-flex">
            <Delete />
            <Typography>Delete</Typography>
          </div>
          <CheckBox />
          <CheckBoxOutlineBlank />
        </div>
      </Container>
    </Wrapper>
  );
};

export default StudentsPage;

const Wrapper = styled.div`
  .student {
    &-section {
      margin-top: 3rem;
      padding: 1rem;
      border: 1px solid #e5e5e5;
      border-radius: 8px;

      .top {
        text-decoration: underline;
        margin-bottom: 1rem;
      }

      .bottom {
        margin-top: 1.5rem;
      }
    }

    &-card {
      height: 30rem;
      overflow: scroll;
    }

	.base {
		justify-content: space-evenly;
	}
  }
`;
