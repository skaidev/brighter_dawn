import {
  Container,
  Typography,
  Box,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  Grid,
} from "@mui/material";
import { ButtonComp } from "lib/ButtonComp";
import { TableCellCompTwo } from "lib/TableCellCompTwo";
import React from "react";
import styled from "styled-components";

const ProfileNoteComp = () => {
  return (
    <Wrapper>
      <Container>
        <Box className="note">
          <div className="note-top">
            <Typography className="p">Student Notes</Typography>
          </div>
          <TableContainer className="note-mid">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCellCompTwo className="p">
                    ***STILL NEED TO COLLECT IMMUNIZATION RECORDS***
                  </TableCellCompTwo>
                </TableRow>
                <TableRow>
                  <TableCellCompTwo className="p">
                    Basketball approval pending physical results.
                  </TableCellCompTwo>
                </TableRow>
                <TableRow>
                  <TableCellCompTwo className="p">
                    9/3/2020: Out sick - doctor’s note received
                  </TableCellCompTwo>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Grid container justifyContent="flex-end" className="note-bottom">
            <ButtonComp variant="contained" className=" text-capitalize">Add note</ButtonComp>
          </Grid>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default ProfileNoteComp;

const Wrapper = styled.div`
  .note {
    &-top {
      padding: 1rem;
      border: 1px solid #d6d6d6;
      background-color: #d6e9f7;
      .p {
        font-size: 1.5rem;
      }
    }
    &-mid {
      .p {
        color: #004b81;
      }
    }
    &-bottom {
      margin-top: 1rem;
      padding: 0 1rem 1rem 1rem;
      border: 0.5px solid #d6d6d6;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
      background-color: #d6e9f7;
    }
  }
`;
