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
import { TableCellCompTwo } from "lib/TableCellCompTwo";
import React from "react";
import styled from "styled-components";

const AddressPage = () => {
  return (
    <Wrapper>
      <Container className="address">
        <Grid container className="address-content">
          <Grid item xs={6}>
            <Box className="left">
              <Typography className=" text-center">Primary Address</Typography>
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
            <Box className="right">
              <Typography className=" text-center">
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
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
        </Grid>

        <Box>
        <Grid container>
                  <Grid item xs={3}>
                  <TableContainer>
                  <Table>
                      <TableBody>
                          <TableRow>
                          <TableCellCompTwo>City:</TableCellCompTwo>
                          <TableCellCompTwo>
                              <TextIputBase fullWidth/>
                          </TableCellCompTwo>
                          </TableRow>
                      </TableBody>
                  </Table>
              </TableContainer>
                  </Grid>
                  <Grid item xs={3}>
                  <TableContainer>
                  <Table>
                      <TableBody>
                      <TableRow>
                          <TableCellCompTwo>City:</TableCellCompTwo>
                          <TableCellCompTwo>
                              <TextIputBase fullWidth/>
                          </TableCellCompTwo>
                          </TableRow>
                      </TableBody>
                  </Table>
              </TableContainer>
                  </Grid>
                  <Grid item xs={3}>
                  <TableContainer>
                  <Table>
                      <TableBody>
                      <TableRow>
                          <TableCellCompTwo>City:</TableCellCompTwo>
                          <TableCellCompTwo>
                              <TextIputBase fullWidth/>
                          </TableCellCompTwo>
                          </TableRow>
                      </TableBody>
                  </Table>
              </TableContainer>
                  </Grid>
                  <Grid item xs={3}>
                  <TableContainer>
                  <Table>
                      <TableBody>
                      <TableRow>
                          <TableCellCompTwo>City:</TableCellCompTwo>
                          <TableCellCompTwo>
                              <TextIputBase fullWidth/>
                          </TableCellCompTwo>
                          </TableRow>
                      </TableBody>
                  </Table>
              </TableContainer>
                  </Grid>
              </Grid>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default AddressPage;

const Wrapper = styled.div`
  .address {
    &-content {
      padding-top: 1rem;
      border: 0.5px solid #d6d6d6;
      background-color: #f9fcfe;
    }
  }
`;
