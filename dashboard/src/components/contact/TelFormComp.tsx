import { Table, TableBody, TableContainer, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import { TextIputBase } from "lib/InputBaseComp";
import { TableCellCompTwo } from "lib/TableCellCompTwo";
import React from "react";
import styled from "styled-components";

const TelFormCard = () => {
  return (
    <Wrapper className="contact">
      <Box className="contact-sect">
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCellCompTwo className=" text-center p">
                  Phone Numbers
                </TableCellCompTwo>
                <TableCellCompTwo className=" text-center p">
                  Extensions/Notes
                </TableCellCompTwo>
              </TableRow>
              <TableRow>
                <TableCellCompTwo>
                  <TextIputBase fullWidth />
                </TableCellCompTwo>
                <TableCellCompTwo>
                  <TextIputBase fullWidth />
                </TableCellCompTwo>
              </TableRow>
              <TableRow>
                <TableCellCompTwo>
                  <TextIputBase fullWidth />
                </TableCellCompTwo>
                <TableCellCompTwo>
                  <TextIputBase fullWidth />
                </TableCellCompTwo>
              </TableRow>
              <TableRow>
                <TableCellCompTwo>
                  <TextIputBase fullWidth />
                </TableCellCompTwo>
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

export default TelFormCard;

const Wrapper = styled.div`
    .contact {
        &-sect {
            border: 0.5px solid #d6d6d6;
            background-color: #f9fcfe;

            .p {
              font-weight: bold;
            }
        }
    }
`;
