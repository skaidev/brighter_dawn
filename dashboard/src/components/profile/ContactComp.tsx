import {
  Box,
  Container,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { TextIputBase } from "lib/InputBaseComp";
import { TableCellCompTwo } from "lib/TableCellCompTwo";
import { TableCellComp } from "lib/TableComp";
import React from "react";
import styled from "styled-components";

const ContactCompPage = () => {
  return (
    <Wrapper>
      <Container className="contact">
        <div className="contact-head">
          <Typography className="p">Contacts</Typography>
        </div>
        <TableContainer className="contact-mid">
          <Table>
            <TableHead>
              <TableCellComp className="fw-bold">
                Relationship/Name
              </TableCellComp>
              <TableCellComp className="fw-bold">Role</TableCellComp>
              <TableCellComp className="fw-bold">Phone Numbers</TableCellComp>
              <TableCellComp className="fw-bold">Email Addresses</TableCellComp>
            </TableHead>
            <TableBody>
              {contactItems.map((items, i) => (
                <TableRow key={i}>
                  <TableCellComp>
                    {items.title} <br /> {items.name}
                  </TableCellComp>
                  <TableCellComp>{items.role}</TableCellComp>
                  <TableCellComp>{items.tel}</TableCellComp>
                  <TableCellComp>{items.email}</TableCellComp>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box>
          <Typography className=" text-center">Contact Name</Typography>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCellCompTwo>First:</TableCellCompTwo>
                  <TableCellCompTwo>
                    <TextIputBase fullWidth />
                  </TableCellCompTwo>
                </TableRow>
                <TableRow>
                  <TableCellCompTwo>First:</TableCellCompTwo>
                  <TableCellCompTwo>
                    <TextIputBase fullWidth />
                  </TableCellCompTwo>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default ContactCompPage;

const Wrapper = styled.div`
  .contact {
    &-head {
      padding: 1rem;
      border: 1px solid #d6d6d6;
      background-color: #d6e9f7;

      .p {
        font-size: 1.5rem;
      }
    }
    &-mid {
      border: 0.5px solid #d6d6d6;
    }
  }
`;

const contactItems = [
  {
    title: "Aunt:",
    name: "Obe Lucy",
    role: "Authorized for pick up",
    tel: "(307) 555-0133",
    email: "jackson.graham@example.com",
  },
  {
    title: "Dentist:",
    name: "Bright Nnam",
    role: "(EnrollMe Cntact)",
    tel: "(702) 555-0122",
    email: "curtis.weaver@example.com",
  },
  {
    title: "Doctor:",
    name: "Obe Jephtah",
    role: "Not Permitted for pick-up",
    tel: "(684) 555-0102",
    email: "nevaeh.simmons@example.com",
  },
  {
    title: "Doctor:",
    name: "Obe Roselyn",
    role: "(EnrollMe Cntact)",
    tel: "(303) 555-0105",
    email: "sara.cruz@example.com",
  },
];
