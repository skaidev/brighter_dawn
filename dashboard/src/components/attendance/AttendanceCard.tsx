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
  Table,
  Box,
} from "@mui/material";
import { ButtonComp } from "lib/ButtonComp";
import { TableCellComp } from "lib/TableComp";

const AttendanceCard = () => {
  return (
    <Wrapper>
      <Container>
        <Box className="top">
          <div>Student Attendance Record</div>
          <div>Friday, 15/10/2021</div>
        </Box>
        <TableContainer className="attendance">
          <Table>
            {/* <TableHead className=" right-top">
              <TableRow className="right-top-row">
                <TableCellComp className=" first">
                  Student Attendance Record
                </TableCellComp>
                <TableCellComp className="fw-600 first">
                  Friday, 15/10/2021
                </TableCellComp>
              </TableRow>
            </TableHead> */}
            <TableBody>
              {attends.map((attend, i) => (
                <TableRow className="attendance-top" key={i}>
                  <TableCellComp>
                    <img src={attend.img} className=" me-2" alt="" />{" "}
                    <span>{attend.name}</span>
                  </TableCellComp>
                  <TableCellComp>{attend.basic}</TableCellComp>
                  <TableCellComp>
                    <Grid container justifyContent="flex-end">
                      <Checkbox />
                    </Grid>
                  </TableCellComp>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
  .top {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border: 1px solid #1271bb;
    background-color: #1271bb;
    color: #fff;
  }
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
