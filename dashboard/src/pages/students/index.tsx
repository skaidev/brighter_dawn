import {
  AddBoxOutlined,
  ArrowRightAlt,
  CheckBoxOutlineBlankOutlined,
  CheckBoxOutlined,
  DeleteOutlined,
} from "@mui/icons-material";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Typography,
} from "@mui/material";
import SearchInputComp from "components/attendance/SearchInputComp";
import StudentCard from "components/attendance/StudentCard";
import ParentsFormPage from "components/modal/ParentsFormComp";
import AddStudentModal from "components/modal/StudentFormComp";
import { ButtonComp } from "lib/ButtonComp";
import { SelectComp } from "lib/InputComp";
import React, { useState } from "react";
import styled from "styled-components";
import SingleStudentComp from "./[id]";

const StudentsPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [page, setPage] = useState(0);

  const PageDisplay = () => {
    if (page === 0) {
      return <AddStudentModal />;
    } else {
      return <ParentsFormPage />;
    }
  };

  return (
    <Wrapper className="student">
      <Grid container columnGap={3}>
        <Grid item flex={1}>
          <Box className="student-section">
            <Typography className="top">Smart Lists</Typography>
            <div>
              <FormControl fullWidth>
                <InputLabel>Everyone</InputLabel>
                <SelectComp label="Everyone">
                  <MenuItem>Obe Sampson</MenuItem>
                  <MenuItem>Obe Sampson</MenuItem>
                  <MenuItem>Obe Sampson</MenuItem>
                </SelectComp>
              </FormControl>
            </div>
            <SearchInputComp />
          </Box>
          <ButtonComp
            onClick={handleOpen}
            variant="contained"
            sx={{ marginBottom: "2rem", textTransform: "capitalize" }}
          >
            add student
          </ButtonComp>
          <Modal open={open} onClose={handleClose}>
            {PageDisplay()}
          </Modal>
          <div className="student-card">
            <StudentCard />
          </div>
          {/* <Box className="base d-flex">
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
					</Box> */}
        </Grid>
        <Grid item flex={2}>
          <SingleStudentComp />
        </Grid>
      </Grid>
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
