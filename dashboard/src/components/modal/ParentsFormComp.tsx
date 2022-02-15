import { Close } from "@mui/icons-material";
import {
  Box,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { ButtonComp } from "lib/ButtonComp";
import { StyledInputBase } from "lib/InputBaseComp";
import { SelectComp } from "lib/InputComp";
import React from "react";
import styled from "styled-components";

const ParentsFormPage = () => {
  return (
    <Wrapper>
      <Box sx={style}>
        <Grid
          container
          justifyContent={"space-between"}
          sx={{ marginBottom: "1.5rem" }}
        >
          <Grid item>
            <Typography>step 1 of 2</Typography>
          </Grid>
          <Grid item>
            <Close />
          </Grid>
        </Grid>
        <Typography sx={{ color: "#1271BB", fontSize: "1.4rem" }}>
          Parents Details
        </Typography>
        <hr className=" mt-0" />
        <Grid container columnGap={2} sx={{ mb: "1rem" }}>
          <Grid item flex={1}>
            <Typography>Guardian Full Name</Typography>
            <StyledInputBase placeholder="Chris Dan Falana" />
          </Grid>
          <Grid item flex={1}>
            <Typography>Relationship</Typography>
            <FormControl fullWidth>
              <InputLabel>Father</InputLabel>
              <SelectComp label="Father">
                <MenuItem>Father</MenuItem>
                <MenuItem>Father</MenuItem>
                <MenuItem>Father</MenuItem>
              </SelectComp>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container columnGap={2} sx={{ mb: "1rem" }}>
          <Grid item flex={1}>
            <Typography>Email Address</Typography>
            <StyledInputBase placeholder="Chrismark@gmail.com" />
          </Grid>
          <Grid item flex={1}>
            <Typography>Telephone</Typography>
            <StyledInputBase placeholder="09987668886" />
          </Grid>
        </Grid>

        <Grid container columnGap={2} sx={{ mb: "1rem" }}>
          <Grid item flex={1}>
            <Typography>Home Address</Typography>
            <StyledInputBase placeholder="65 Industrial layout saint jones Port Harcourt" />
          </Grid>
        </Grid>

        <Grid container columnGap={2} sx={{ mb: "1rem" }}>
          <Grid item flex={1}>
            <Typography>State Origin</Typography>
            <FormControl fullWidth>
              <InputLabel>Rivers State</InputLabel>
              <SelectComp label="Rivers State">
                <MenuItem>Rivers State</MenuItem>
                <MenuItem>Rivers State</MenuItem>
                <MenuItem>Rivers State</MenuItem>
              </SelectComp>
            </FormControl>
          </Grid>
          <Grid item flex={1}>
            <Typography>State Origin</Typography>
            <FormControl fullWidth>
              <InputLabel>Local Government Area</InputLabel>
              <SelectComp label="Obi Akpor">
                <MenuItem>Obi Akpor</MenuItem>
                <MenuItem>Obi Akpor</MenuItem>
                <MenuItem>Obi Akpor</MenuItem>
              </SelectComp>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container columnGap={2} sx={{ mb: "1rem" }}>
          <Grid item flex={1}>
            <Typography>Employmentm Status</Typography>
            <FormControl fullWidth>
              <InputLabel>Employed </InputLabel>
              <SelectComp label="Employed ">
                <MenuItem>Employed </MenuItem>
                <MenuItem>Employed </MenuItem>
                <MenuItem>Employed </MenuItem>
              </SelectComp>
            </FormControl>
          </Grid>
          <Grid item flex={1}>
            <Typography>Employment Status</Typography>
            <FormControl fullWidth>
              <InputLabel>Occupation</InputLabel>
              <SelectComp label="Occupation">
                <MenuItem>Occupation</MenuItem>
                <MenuItem>Occupation</MenuItem>
                <MenuItem>Occupation</MenuItem>
              </SelectComp>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container justifyContent={"flex-end"}>
          <ButtonComp variant="contained" sx={{ textTransform: "capitalize" }}>
            save
          </ButtonComp>
        </Grid>
      </Box>
    </Wrapper>
  );
};

export default ParentsFormPage;

const Wrapper = styled.div``;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  minHeight: "20vh",
  bgcolor: "white",
  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.25)",
  p: 4,
  paddingTop: 2,
  overflow: "scroll",
};
