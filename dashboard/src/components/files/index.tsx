import {
  Box,
  Container,
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { ButtonComp } from "lib/ButtonComp";
import { TableCellComp } from "lib/TableComp";
import React from "react";
import styled from "styled-components";

const FileCompPage = () => {
  return (
    <Wrapper>
      <Container>
        <Box className="file">
          <div className="file-head">
            <Typography className="text-center p">Student Files</Typography>
          </div>
          <TableContainer className="file-mid">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCellComp className="text-center b">
                    Student Photos
                  </TableCellComp>
                </TableRow>
                <TableRow>
                  <TableCellComp className="pt-5">
                    <Grid container justifyContent="flex-end">
                      <ButtonComp
                        variant="outlined"
                        className=" text-capitalize"
                      >
                        Add new
                      </ButtonComp>
                    </Grid>
                  </TableCellComp>
                </TableRow>
                <TableRow>
                  <TableCellComp className="text-center b">
                    Administrative Files
                  </TableCellComp>
                </TableRow>
                <TableRow>
                  <TableCellComp className="pt-5">
                    <Grid container justifyContent="flex-end">
                      <ButtonComp
                        variant="outlined"
                        className=" text-capitalize b"
                      >
                        Add new
                      </ButtonComp>
                    </Grid>
                  </TableCellComp>
                </TableRow>
                <TableRow>
                  <TableCellComp className="text-center">
                    Enrollment Files
                  </TableCellComp>
                </TableRow>
                <TableRow>
                  <TableCellComp className="pt-5">
                    <Grid container justifyContent="flex-end">
                      <ButtonComp
                        variant="outlined"
                        className=" text-capitalize"
                      >
                        Add new
                      </ButtonComp>
                    </Grid>
                  </TableCellComp>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default FileCompPage;

const Wrapper = styled.div`
  .file {
    border: 1px solid #d6d6d6;
    &-head {
      padding: 1rem;
      border: 1px solid #d6d6d6;
      background-color: #d6e9f7;

      .p {
        font-size: 1.5rem;
      }
    }
    &-mid {
      .b {
        background-color: #f9fcfe;
      }
    }
  }
`;
