import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from "@mui/material";
import { DoneAll } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import SingleMessageComp from "components/messages/SingleMessageComp";

const MessagesPage = () => {
  return (
    <Wrapper>
      <Container className="message mt-5 d-flex">
        <div className="message-left">
          <Box className="message-left-content">
            <div className="message-left-content-top p-3">
              <TextField placeholder="Search" fullWidth></TextField>
            </div>
            <div className="message-left-content-bottom d-flex mt-1 px-3">
              <FormControl variant="standard" className="first pb-2">
                <InputLabel className="first-top">All Messages</InputLabel>
                <Select label="All Messages">
                  <MenuItem>All Messages</MenuItem>
                  <MenuItem>Sent Messages</MenuItem>
                  <MenuItem>Draft Messages</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Box>
          <TableContainer component={Paper} className="message-left-table">
            <Table>
              <TableBody>
                {studentCard.map((card, i) => (
                  <TableRow key={i}>
                    <TableCell className=" d-flex top">
                      <img src={card.image} alt="" />
                      <p>
                        {card.name} <br /> {card.desc}
                      </p>
                    </TableCell>
                    <TableCell>{card.time} <br /> <DoneAll /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="message-right">
          <Grid container justifyContent="flex-end">
            <Button variant="contained" className=" text-capitalize">
              new message
            </Button>
          </Grid>
          <SingleMessageComp />
        </div>
      </Container>
    </Wrapper>
  );
};

export default MessagesPage;

const Wrapper = styled.div`
  .message {
    &-left {
      width: 40%;
      &-content {
        border: 0.5px solid rgba(119, 119, 119, 0.35);

        &-top {
          border-bottom: 0.5px solid rgba(119, 119, 119, 0.35);
        }
        &-bottom {
          .first {
            padding-left: 8.3rem;
            /* padding-right: 1rem; */
            &-top {
              border: none;
            }
          }
        }
      }

      &-table {
        .top {
          img {
            width: 3.125rem;
            height: 3.125rem;
            border-radius: 50%;
            margin-right: 1rem;
          }
        }
      }
    }

    &-right {
      width: 60%;
    }
  }
`;

const studentCard = [
  {
    image: "/images/student.png",
    name: "Obe Sampson",
    desc: "Amet minim mollit non deserunt",
    time: "1  min ago",
  },
  {
    image: "/images/student_2.png",
    name: "Obe Sampson",
    desc: "Amet minim mollit non deserunt",
    time: "1  min ago",
  },
  {
    image: "/images/student.png",
    name: "Obe Sampson",
    desc: "Amet minim mollit non deserunt",
    time: "1  min ago",
  },
  {
    image: "/images/student.png",
    name: "Obe Sampson",
    desc: "Amet minim mollit non deserunt",
    time: "1  min ago",
  },
  {
    image: "/images/student_2.png",
    name: "Obe Sampson",
    desc: "Amet minim mollit non deserunt",
    time: "1  min ago",
  },
  {
    image: "/images/student.png",
    name: "Obe Sampson",
    desc: "Amet minim mollit non deserunt",
    time: "1  min ago",
  },
];