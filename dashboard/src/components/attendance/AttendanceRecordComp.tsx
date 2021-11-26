import React from "react";
import {
  Box,
  Checkbox,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Grid,
} from "@mui/material";
import { Print } from "@mui/icons-material";
import styled from "styled-components";

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
        <Button
          variant="outlined"
          color="info"
          startIcon={<Print />}
          className="btn_1 me-4"
        >
          print
        </Button>
        <Button variant="contained" className="btn_2">next</Button>
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
          align-items: center;
          justify-content: space-evenly;
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

  .btn_1 {
    border-color: #E5E5E5;
    border-radius: 8px;
    color: #777777;
  }

  .btn_2 {
    border-radius: 8px;
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