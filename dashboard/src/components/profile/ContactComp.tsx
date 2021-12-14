import {
  Box,
  Container,
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import SingleContactForm from "components/contact/SingleContactForm";
import TelFormCard from "components/contact/TelFormComp";
import { ButtonComp } from "lib/ButtonComp";
import { TextIputBase } from "lib/InputBaseComp";
import { TableCellCompTwo } from "lib/TableCellCompTwo";
import { TableCellComp } from "lib/TableComp";
import React from "react";
import styled from "styled-components";

const ContactCompPage = (): JSX.Element => {
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

        <Grid container>
          <Grid item xs={6}>
            <SingleContactForm />
          </Grid>
          <Grid item xs={6}>
            <SingleContactForm />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={6}>
            <Box className="contact-mid1 left">
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCellCompTwo>Relationship:</TableCellCompTwo>
                      <TableCellCompTwo>
                        <TextIputBase fullWidth />
                      </TableCellCompTwo>
                    </TableRow>
                    <TableRow>
                      <TableCellCompTwo>Notes:</TableCellCompTwo>
                      <TableCellCompTwo>
                        <TextareaAutosize
                          minRows={3}
                          className=" form-control"
                        />
                      </TableCellCompTwo>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className="contact-mid1 right">
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCellCompTwo>
                        Roles and permissions:
                      </TableCellCompTwo>
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
            <TelFormCard />
          </Grid>
          <Grid item xs={6}>
            <TelFormCard />
          </Grid>
        </Grid>
        
        <Grid container>
          <Grid item xs={6}>
          <Box className="contact-bottom">
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                <TableCellCompTwo className=" text-center p">Occupation</TableCellCompTwo>
                <TableCellCompTwo className=" text-center p">Employer</TableCellCompTwo>
                </TableRow>
                <TableRow>
                  <TableCellCompTwo>
                    <TextIputBase fullWidth/>
                  </TableCellCompTwo>
                  <TableCellCompTwo>
                    <TextIputBase fullWidth/>
                  </TableCellCompTwo>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
          </Grid>
        </Grid>

        <Grid container justifyContent="flex-end" className="contact-bottom1">
          <ButtonComp variant="contained" className="text-capitalize me-4">Save Changes</ButtonComp>
          <ButtonComp variant="outlined" className=" text-capitalize">cancel</ButtonComp>
        </Grid>
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
    &-mid1 {
      border: 1px solid #d6d6d6;
      background-color: #f9fcfe;
      height: 100%;
    }
    &-bottom {
      border: 1px solid #d6d6d6;
      background-color: #f9fcfe;

      .p {
        font-weight: bold;
      }
    }
    &-bottom1 {
      margin-top: 1rem;
      padding: 0 1rem 1rem 1rem;
      border: 0.5px solid #D6D6D6;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
      background-color: #D6E9F7;
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
    role: "(EnrollMe Contact)",
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
