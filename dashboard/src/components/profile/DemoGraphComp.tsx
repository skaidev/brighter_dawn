import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ButtonComp } from "lib/ButtonComp";
import { TextIputBase } from "lib/InputBaseComp";
import { InputCompTwo } from "lib/InputComp";
import { TableCellComp } from "lib/TableComp";
import React from "react";
import styled from "styled-components";

const DemoGraphCompPage = () => {
  return (
    <Wrapper>
      <Container className="demograph">
        <div className="demograph-top d-flex">
          <Typography>Obe Sampson Ndalee</Typography>
          <ButtonComp variant="outlined">Edit Obe’s Info</ButtonComp>
        </div>
        <TableContainer className="demograph-mid">
          <Table>
            <TableBody>
              <TableRow>
                <TableCellComp>
                  First name:
                  <TextIputBase placeholder="Sampson" className=" mx-2" />
                </TableCellComp>
                <TableCellComp>
                  Middle name:{" "}
                  <TextIputBase placeholder="Ndalee" className=" mx-2" />
                </TableCellComp>
                <TableCellComp>
                  Last name:{" "}
                  <TextIputBase placeholder="Obe" className=" mx-2" />
                </TableCellComp>
                <TableCellComp>
                  Class: <TextIputBase placeholder="JSS1" className=" mx-2" />
                </TableCellComp>
              </TableRow>
              <TableRow>
                <TableCellComp>
                  Status:{" "}
                  <TextIputBase placeholder="Re-enrollment" className=" mx-2" />
                </TableCellComp>
                <TableCellComp>
                  Tags: <TextIputBase placeholder="Add..." className=" mx-2" />
                </TableCellComp>
                <TableCellComp>
                  Student ID:{" "}
                  <TextIputBase placeholder="4099" className=" mx-2" />
                </TableCellComp>
                <TableCellComp>
                  Family ID:{" "}
                  <TextIputBase placeholder="1089" className=" mx-2" />
                </TableCellComp>
              </TableRow>
              <TableRow>
                <TableCellComp>
                  Gender: <TextIputBase placeholder="Male" className=" mx-2" />
                </TableCellComp>
                <TableCellComp>
                  Birth:{" "}
                  <TextIputBase placeholder="30/11/1999" className=" mx-2" />
                </TableCellComp>
                <TableCellComp>
                  Mobile:{" "}
                  <TextIputBase placeholder="08131367090" className=" mx-2" />
                </TableCellComp>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Box className="demograph-midtwo d-flex">
          <div className="demograph-left">
            <TableContainer className="demograph-left-bottom">
              <Table>
                <TableHead className="head">
                  <TableRow>
                    <TableCell>Subjects</TableCell>
                    <TableCell>Class</TableCell>
                    <TableCell>Subjects</TableCell>
                    <TableCell>Class</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gradeItems.map((grade, i) => (
                    <TableRow key={i}>
                      <TableCell>{grade.title}</TableCell>
                      <TableCell>{grade.desc}</TableCell>
                      <TableCell>{grade.subject}</TableCell>
                      <TableCell>{grade.term}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="demograph-left-base d-flex mt-0">
              <ButtonComp variant="contained" className=" text-capitalize">
                Edit Row
              </ButtonComp>
              <ButtonComp variant="outlined" className=" mx-3 text-capitalize">
                Delete row
              </ButtonComp>
            </div>
          </div>
          <div className="demograph-right">
            <img src="/images/demoStudent.png" alt="" />
          </div>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default DemoGraphCompPage;

const Wrapper = styled.div`
  .demograph {
    &-top {
      align-items: center;
      justify-content: space-between;
    }
    &-mid {
      margin-top: 1rem;
      border: 0.5px solid #d6d6d6;
      background-color: #f9fcfe;
    }

    &-midtwo {
        /* align-items: center; */
        margin-top: 1rem;
      .demograph-left {
          flex: 4;
        &-bottom {
          border: 0.5px solid #d6d6d6;

          .head {
            background-color: #d6e9f7;
          }
          .one {
            border-right: 0.5px solid #d6d6d6;
          }
        }
      }
      .demograph-right {
          flex: 1;
          
          img {
              width: 100%;
              object-fit: cover;
              /* height: 100%; */
          }
      }
    }
  }
`;

const gradeItems = [
  {
    title: "Mathematics",
    desc: "SS 2",
    subject: "Chemistry",
    term: "SS 2",
  },
  {
    title: "English Language",
    desc: "SS 2",
    subject: "Financial Acounting",
    term: "SS 2",
  },
  {
    title: "History",
    desc: "SS 2",
    subject: "Christian Religious Studies",
    term: "SS 2",
  },
];
