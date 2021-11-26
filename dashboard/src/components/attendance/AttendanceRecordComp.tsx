import React from "react";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";
import { Print } from "@mui/icons-material";
import styled from "styled-components";
import { ButtonCompTwo } from "lib/ButtonComp";

const AttendanceRecordComp = () => {
  return (
    <Wrapper>
      <div className="record">
        <TableContainer
          color="primary"
          className="record-top"
          component={Paper}
        >
          <Table>
            <TableHead className="record-top-one">
              <TableRow className="record-top-one-first p-3">
                <TableCell className="item">S/N</TableCell>
                <TableCell className="item">Student Name</TableCell>
                <TableCell className="item">Reg No</TableCell>
                <TableCell className="item">Student Class</TableCell>
                <TableCell className="item">
                  Monday <br /> 18/10/21
                </TableCell>
                <TableCell className="item">
                  Tuesday <br />
                  18/10/21
                </TableCell>
                <TableCell className="item">
                  Wednesday <br />
                  18/10/21
                </TableCell>
                <TableCell className="item">
                  Thursday <br />
                  18/10/21
                </TableCell>
                <TableCell className="item">
                  Friday <br />
                  18/10/21
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentData.map((data, i) => (
                <TableRow key={i}>
                  <TableCell>{data.sn}</TableCell>
                  <TableCell>
                    <img src={data.img} alt="" className="me-2" />
                    <span>{data.name}</span>
                  </TableCell>
                  <TableCell>{data.reg}</TableCell>
                  <TableCell>{data.basic}</TableCell>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <img src={data.check} style={{ width: "20px" }} alt="" />
                  </TableCell>
                  <TableCell>
                    <img src={data.check} style={{ width: "20px" }} alt="" />
                  </TableCell>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Grid container justifyContent="flex-end" className=" mt-4 mb-5">
        <ButtonCompTwo
          variant="outlined"
          color="info"
          startIcon={<Print />}
          className="me-4"
        >
          print
        </ButtonCompTwo>
        <ButtonCompTwo variant="contained">next</ButtonCompTwo>
      </Grid>
    </Wrapper>
  );
};

export default AttendanceRecordComp;

const Wrapper = styled.div`
  .record {
    &-top {
      &-one {
        &-first {
          border: 1px solid #1271bb;
          background-color: #1271bb;

          .item {
            color: #fff;
          }
        }
      }
    }
    &-bottom {
      .first {
        /* gap: 1; */
        align-items: center;
        justify-content: space-evenly;
      }
    }
  }
`;

const studentData = [
  {
    sn: 1,
    img: "/images/student.png",
    name: "Obe Sampson",
    reg: 44255,
    basic: "Nursery 2",
    check: "/images/default.png",
  },
  {
    sn: 2,
    img: "/images/student.png",
    name: "Obe Sampson",
    reg: 44255,
    basic: "Nursery 2",
    check: "/images/default.png",
  },
  {
    sn: 3,
    img: "/images/student.png",
    name: "Obe Sampson",
    reg: 44255,
    basic: "Nursery 2",
    check: "/images/default.png",
  },
  {
    sn: 4,
    img: "/images/student.png",
    name: "Obe Sampson",
    reg: 44255,
    basic: "Nursery 2",
    check: "/images/default.png",
  },
  {
    sn: 5,
    img: "/images/student.png",
    name: "Obe Sampson",
    reg: 44255,
    basic: "Nursery 2",
    check: "/images/default.png",
  },
  {
    sn: 6,
    img: "/images/student.png",
    name: "Obe Sampson",
    reg: 44255,
    basic: "Nursery 2",
    check: "/images/default.png",
  },
  {
    sn: 7,
    img: "/images/student.png",
    name: "Obe Sampson",
    reg: 44255,
    basic: "Nursery 2",
    check: "/images/default.png",
  },
  {
    sn: 8,
    img: "/images/student.png",
    name: "Obe Sampson",
    reg: 44255,
    basic: "Nursery 2",
    check: "/images/default.png",
  },
  {
    sn: 9,
    img: "/images/student.png",
    name: "Obe Sampson",
    reg: 44255,
    basic: "Nursery 2",
    check: "/images/default.png",
  },
  {
    sn: 10,
    img: "/images/student.png",
    name: "Obe Sampson",
    reg: 44255,
    basic: "Nursery 2",
    check: "/images/default.png",
  },
];
