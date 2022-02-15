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
import { TextIputBase } from "lib/InputBaseComp";
import { ButtonComp } from "lib/ButtonComp";
import { TableCellCompTwo } from "lib/TableCellCompTwo";
import React from "react";
import styled from "styled-components";

const AddressPage = () => {
  return (
    <Wrapper>
      <Grid container className="address-content">
        <Grid item xs={6}>
          <Box className="top">
            <Typography className=" text-center p">Primary Address</Typography>
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCellCompTwo>Desc:</TableCellCompTwo>
                    <TableCellCompTwo>
                      <TextIputBase fullWidth />
                    </TableCellCompTwo>
                  </TableRow>
                  <TableRow>
                    <TableCellCompTwo>Name:</TableCellCompTwo>
                    <TableCellCompTwo>
                      <TextIputBase fullWidth />
                    </TableCellCompTwo>
                  </TableRow>
                  <TableRow>
                    <TableCellCompTwo>Street:</TableCellCompTwo>
                    <TableCellCompTwo>
                      <TextIputBase fullWidth />
                    </TableCellCompTwo>
                  </TableRow>
                  <TableRow>
                    <TableCellCompTwo>City:</TableCellCompTwo>
                    <TableCellCompTwo>
                      <TextIputBase fullWidth />
                    </TableCellCompTwo>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className="top">
            <Typography className=" text-center p">
              Secondary Address
            </Typography>
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCellCompTwo>Desc:</TableCellCompTwo>
                    <TableCellCompTwo>
                      <TextIputBase fullWidth />
                    </TableCellCompTwo>
                  </TableRow>
                  <TableRow>
                    <TableCellCompTwo>Name:</TableCellCompTwo>
                    <TableCellCompTwo>
                      <TextIputBase fullWidth />
                    </TableCellCompTwo>
                  </TableRow>
                  <TableRow>
                    <TableCellCompTwo>Street:</TableCellCompTwo>
                    <TableCellCompTwo>
                      <TextIputBase fullWidth />
                    </TableCellCompTwo>
                  </TableRow>
                  <TableRow>
                    <TableCellCompTwo>City:</TableCellCompTwo>
                    <TableCellCompTwo>
                      <TextIputBase fullWidth />
                    </TableCellCompTwo>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={6}>
          <Box className="top">
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCellCompTwo className="text-center p">
                      School District/Town of Residence
                    </TableCellCompTwo>
                  </TableRow>
                  <TableRow>
                    <TableCellCompTwo>
                      <TextIputBase fullWidth />
                    </TableCellCompTwo>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className="top">
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCellCompTwo className="text-center p">
                      Former School
                    </TableCellCompTwo>
                  </TableRow>
                  <TableRow>
                    <TableCellCompTwo>
                      <TextIputBase fullWidth />
                    </TableCellCompTwo>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>

      <Grid container justifyContent="flex-end" className="bottom">
        <ButtonComp variant="contained" className="text-capitalize me-4">
          Save Changes
        </ButtonComp>
        <ButtonComp variant="outlined" className=" text-capitalize">
          cancel
        </ButtonComp>
      </Grid>
    </Wrapper>
  );
};

export default AddressPage;

const Wrapper = styled.div`
  .top {
    padding-top: 1rem;
    border: 0.5px solid #d6d6d6;
    background-color: #f9fcfe;

    .p {
      font-weight: bold;
    }
  }

  .bottom {
    margin-top: 1rem;
    padding: 0 1rem 1rem 1rem;
    border: 0.5px solid #d6d6d6;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    background-color: #d6e9f7;
  }
`;
