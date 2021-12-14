import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableRow,
  TableBody,
} from "@mui/material";
import { TableCellCompTwo } from "lib/TableCellCompTwo";
import { TextIputBase } from "lib/InputBaseComp";
import React from "react";
import styled from "styled-components";

const SingleContactForm = () => {
  return (
    <Wrapper className="contact">
      <Box className="contact-sect mt-4 pt-3">
        <Typography className=" text-center p">Contact Name</Typography>
        <TableContainer className="top">
          <Table>
            <TableBody>
              <TableRow>
                <TableCellCompTwo>First:</TableCellCompTwo>
                <TableCellCompTwo>
                  <TextIputBase fullWidth />
                </TableCellCompTwo>
              </TableRow>
              <TableRow>
                <TableCellCompTwo>Middle:</TableCellCompTwo>
                <TableCellCompTwo>
                  <TextIputBase fullWidth />
                </TableCellCompTwo>
              </TableRow>
              <TableRow>
                <TableCellCompTwo>Last:</TableCellCompTwo>
                <TableCellCompTwo>
                  <TextIputBase fullWidth />
                </TableCellCompTwo>
              </TableRow>
              <TableRow>
                <TableCellCompTwo>Title:</TableCellCompTwo>
                <TableCellCompTwo>
                  <TextIputBase fullWidth />
                </TableCellCompTwo>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Wrapper>
  );
};

export default SingleContactForm;

const Wrapper = styled.div`
  .contact {
      width: 100%;
    &-sect {
      border: 0.5px solid #d6d6d6;
      background-color: #f9fcfe;

      .p {
        font-weight: bold;
      }

      .top {
          width: 100%;
      }
    }
  }
`;
