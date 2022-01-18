import { Lock } from "@mui/icons-material";
import {
  Box,
  Container,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Grid,
  TableHead,
} from "@mui/material";
import { TextIputBase } from "lib/InputBaseComp";
import { TableCellCompTwo } from "lib/TableCellCompTwo";
import { TableCellComp } from "lib/TableComp";
import { ButtonComp } from "lib/ButtonComp";
import React from "react";
import styled from "styled-components";

const LogInfoPage = () => {
  return (
    <Wrapper>
      <Container className="login">
        <Box className="login-sect">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow className="login-sect-top">
                  <TableCellComp className="p">Account</TableCellComp>
                  <TableCellComp className="p">Login</TableCellComp>
                  <TableCellComp className="p">Password</TableCellComp>
                  <TableCellComp className="p">Lock</TableCellComp>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCellCompTwo>Family 1:</TableCellCompTwo>
                  <TableCellCompTwo>
                    <TextIputBase placeholder="Sampson" fullWidth />
                  </TableCellCompTwo>
                  <TableCellCompTwo>
                    <TextIputBase fullWidth />
                  </TableCellCompTwo>
                  <TableCellCompTwo>
                    <Lock />
                  </TableCellCompTwo>
                </TableRow>
                <TableRow>
                  <TableCellCompTwo>Student:</TableCellCompTwo>
                  <TableCellCompTwo>
                    <TextIputBase placeholder="5089" fullWidth />
                  </TableCellCompTwo>
                  <TableCellCompTwo>
                    <TextIputBase fullWidth />
                  </TableCellCompTwo>
                  <TableCellCompTwo>
                    <Lock />
                  </TableCellCompTwo>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Grid
            container
            justifyContent="flex-end"
            className="login-sect-bottom"
          >
            <ButtonComp variant="contained" className="text-capitalize me-4">
              Save Changes
            </ButtonComp>
            <ButtonComp variant="outlined" className=" text-capitalize">
              cancel
            </ButtonComp>
          </Grid>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default LogInfoPage;

const Wrapper = styled.div`
  .login {
    &-sect {
      border: 0.5px solid #d6d6d6;
      &-top {
        border: 0.5px solid #d6d6d6;
        background-color: #d6e9f7;

        .p {
          font-weight: bold;
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
  }
`;
