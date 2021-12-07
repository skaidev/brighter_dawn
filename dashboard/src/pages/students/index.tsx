import {
  AddBoxOutlined,
  CheckBoxOutlineBlankOutlined,
  CheckBoxOutlined,
  DeleteOutlined,
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
import { SelectComp } from "lib/InputComp";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import SearchInputComp from "components/attendance/SearchInputComp";

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
          <SearchInputComp />
        </Box>
        <Link to="/singlestudent">
          <div className="student-card">
            <StudentCard />
            <StudentCard />
            <StudentCard />
            <StudentCard />
          </div>
        </Link>
        <Box className="base d-flex">
          <div className=" d-flex">
            <AddBoxOutlined style={{ color: "white" }} />
            <Typography className="desc">Add</Typography>
          </div>
          <div className=" d-flex">
            <DeleteOutlined style={{ color: "white" }} />
            <Typography className="desc">Delete</Typography>
          </div>
          <CheckBoxOutlined style={{ color: "white" }} />
          <CheckBoxOutlineBlankOutlined style={{ color: "white" }} />
        </Box>
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

      .icon {
        position: relative;
        bottom: 2.5rem;
      }
    }

    &-card {
      height: 30rem;
      overflow: scroll;
    }
  }
  .base {
    justify-content: space-around;
    padding: 0.5rem;
    border: 1px solid #1271bb;
    background-color: #1271bb;

    .desc {
      color: #fff;
    }
  }
`;
