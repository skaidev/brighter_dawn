import { ArrowBack } from "@mui/icons-material";
import {
  Container,
  Grid,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { ButtonComp } from "lib/ButtonComp";
import { TableCellComp } from "lib/TableComp";
import React from "react";
import styled from "styled-components";

const ProfilePage = () => {
  return (
    <Wrapper>
      <Container className="profile">
        <ButtonComp variant="outlined" startIcon={<ArrowBack />}>
          Back
        </ButtonComp>
        <Box className="profile-card">
          <div className="profile-card-box">
            <div className="top">
              <img src="/images/studentProfile.png" alt="" />
            </div>
            {/* <Typography>Login info</Typography>
            <div className="first d-flex">
              <Typography>Username: 45673</Typography>
              <Typography>Password: 123456</Typography>
              <ButtonComp variant="outlined" className=" mt-0">
                change password
              </ButtonComp>
            </div> */}
          </div>
          <TableContainer>
            <TableRow>
              <TableCellComp>Login info</TableCellComp>
            </TableRow>
            <TableRow>
              <TableCellComp>Username: 45673</TableCellComp>
              <TableCellComp>Password: 123456</TableCellComp>
              <TableCellComp>
                <ButtonComp variant="outlined" className=" mt-0">
                  change password
                </ButtonComp>
              </TableCellComp>
            </TableRow>
          </TableContainer>
          {profileItems.map((profile, i) => (
            <TableContainer key={i}>
              <TableRow>
                <TableCellComp>{profile.title}</TableCellComp>
              </TableRow>
              <TableRow>
                <TableCellComp>{profile.first}</TableCellComp>
                <TableCellComp>{profile.mid}</TableCellComp>
                <TableCellComp>{profile.last}</TableCellComp>
              </TableRow>
              <TableRow>
                <TableCellComp>{profile.job}</TableCellComp>
                <TableCellComp>{profile.edu}</TableCellComp>
                <TableCellComp>{profile.emp}</TableCellComp>
                <TableCellComp>{profile.hire}</TableCellComp>
              </TableRow>
              <TableRow>
                <TableCellComp>{profile.stat}</TableCellComp>
                <TableCellComp>{profile.gen}</TableCellComp>
                <TableCellComp>{profile.birth}</TableCellComp>
                <TableCellComp>{profile.relg}</TableCellComp>
              </TableRow>
            </TableContainer>
          ))}
          {/* <TableContainer className="profile-card-box">
            <TableRow>
              <TableCellComp>Login info</TableCellComp>
            </TableRow>
            <TableRow>
              <TableCellComp>Username: 45673</TableCellComp>
              <TableCellComp>Password: 123456</TableCellComp>
              <TableCellComp>
              <ButtonComp variant="outlined" className=" mt-0">
                change password
              </ButtonComp>
              </TableCellComp>
            </TableRow>
            <Typography>Personal info</Typography>
            <div className="first d-flex">
              <Typography>First name: Obe</Typography>
              <Typography>Middle name: Ndalee</Typography>
              <Typography>Last name: Sampson</Typography>
            </div>
            <div className="first d-flex">
              <Typography>Job Title: Obe</Typography>
              <Typography>Education: Master</Typography>
              <Typography>Employment Type: Full Time</Typography>
              <Typography>Hire Date: 04/12/2021</Typography>
            </div>
            <div className="first d-flex">
              <Typography>Marital Status: Single</Typography>
              <Typography>Gender: Male</Typography>
              <Typography>Birth: 04/02/1992</Typography>
              <Typography>Religion: Christianity</Typography>
            </div>
          </div>
          <div className="profile-card-box">
            <Typography>Contact Info</Typography>
            <div className="first d-flex">
              <Typography>School Email: obendalee@rsu.edu.ng</Typography>
              <Typography>Personal Email: obendalee@gmail.com</Typography>
              <Typography>School Mobile: 08131367090</Typography>
            </div>
            <div className="first d-flex">
              <Typography>Personal Mobile: 08131367090</Typography>
              <Typography>Street: 28 Elekahia Road</Typography>
              <Typography>City: Port Harcourt</Typography>
              <Typography>State: Rivers</Typography>
            </div>
            <Typography>Country: Nigeria</Typography>
          </div>
          <div className="profile-card-box">
            <Typography>Referee Info</Typography>
            <div className="first d-flex">
              <Typography>Emergency: Obe Paulinah</Typography>
              <Typography>Mobile: 08064734822</Typography>
              <Typography>Email: obepaulinah@gmail.com</Typography>
            </div>
          </TableContainer> */}
        </Box>
      </Container>
    </Wrapper>
  );
};

export default ProfilePage;

const Wrapper = styled.div`
  .profile {
    &-card {
      margin: auto;
      margin-top: 2rem;
      margin-bottom: 2rem;
      border: 1px solid rgba(0, 0, 0, 0.25);
      /* padding: 4rem;
      box-shadow: 2px 2px 2px rgba(71, 71, 71, 0.5); */

      &-box {
        padding: 2rem;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
        line-height: 1.6;
        .top {
          display: flex;
          justify-content: center;
          margin-bottom: 4rem;
          img {
            border-radius: 50%;
          }
        }
      }
      .first {
        align-items: center;
        gap: 5rem;
        line-height: 1.6rem;
      }
    }
  }
`;

const profileItems = [
  {
    title: "Personal info",
    first: "First name: Obe",
    mid: "Middle name: Ndalee",
    last: "Last name: Sampson",
    job: "Job Title: Obe",
    edu: "Education: Master",
    emp: "Employment Type: Full Time",
    hire: "Hire Date: 04/12/2021",
    stat: "Marital Status: Single",
    gen: "Gender: Male",
    birth: "Birth: 04/02/1992",
    relg: "Religion: Christianity",
  },
  {
    title: "Contact info",
    first: "School Email: obendalee@rsu.edu.ng",
    mid: "Personal Email: obendalee@gmail.com",
    last: "School Mobile: 08131367090",
    job: "Personal Mobile: 08131367090",
    edu: "Street: 28 Elekahia Road",
    emp: "City: Port Harcourt",
    hire: "State: Rivers",
    stat: "Country: Nigeria",
  },
  {
    title: "Referee info",
    first: "Emergency: Obe Paulinah",
    mid: "Mobile: 08064734822",
    last: "Email: obepaulinah@gmail.com",
  },
];
