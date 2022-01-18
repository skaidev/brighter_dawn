import React from "react";
import styled from "styled-components";
import {
  Grid,
  Checkbox,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Container,
} from "@mui/material";
import { ButtonComp } from "lib/ButtonComp";

const AttendanceCard = () => {
  return (
    <Wrapper>
      <Container>
        <TableContainer className="attendance">
          <TableHead className=" right-top">
            <TableRow className="right-top-row">
              <TableCell className=" first">
                Student Attendance Record
              </TableCell>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell className="fw-600 first">Friday, 15/10/2021</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* <TableRow>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell className="attendance-desc">
                Select all
                <span>
                  <Checkbox />
                </span>
              </TableCell>
            </TableRow> */}
            {attends.map((attend, i) => (
              <TableRow className="attendance-top" key={i}>
                <TableCell>
                  <img src={attend.img} className=" me-2" alt="" />{" "}
                  <span>{attend.name}</span>
                </TableCell>
                <TableCell />
                <TableCell />
                <TableCell>{attend.basic}</TableCell>
                <TableCell />
                <TableCell>
                  <Grid container justifyContent="flex-end">
                    <Checkbox />
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
        <Grid container justifyContent="flex-end">
          <ButtonComp variant="contained">submit</ButtonComp>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default AttendanceCard;

const Wrapper = styled.div`
  .attendance {
    &-desc {
      color: ${(prop) => prop.theme.palette.primary.main};
    }
    .right-top {
      &-row {
        .first {
          color: ${(prop) => prop.theme.palette.primary.light};
        }
      }
    }
  }
`;

const attends = [
  {
    img: "/images/student.png",
    name: "Obe Sampson Ndalee",
    basic: "Nursery 2",
  },
  {
    img: "/images/student.png",
    name: "Obe Sampson Ndalee",
    basic: "Nursery 2",
  },
  {
    img: "/images/student.png",
    name: "Obe Sampson Ndalee",
    basic: "Nursery 2",
  },
  {
    img: "/images/student.png",
    name: "Obe Sampson Ndalee",
    basic: "Nursery 2",
  },
];
