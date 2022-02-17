import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { StyledInputBase } from "lib/InputBaseComp";
import { SelectComp } from "lib/InputComp";
import { ButtonComp } from "lib/ButtonComp";
import React from "react";
import styled from "styled-components";
import { ArrowRightAlt, Close } from "@mui/icons-material";

const AddStudentModal = () => {
  return (
    <Wrapper>
      <Box sx={style}>
        <Grid container justifyContent={"space-between"} sx={{marginBottom: "1.5rem"}}>
          <Grid item>
            <Typography>step 1 of 2</Typography>
          </Grid>
          <Grid item>
            <Close />
          </Grid>
        </Grid>
        <Typography sx={{ color: "#1271BB", fontSize: "1.4rem" }}>
          Student
        </Typography>
        <hr className=" mt-0" />
        <Grid container columnGap={2} sx={{ mb: "1rem" }}>
          <Grid item flex={1}>
            <FormControl fullWidth>
              <InputLabel>Everyone</InputLabel>
              <SelectComp label="Everyone">
                <MenuItem>Obe Sampson</MenuItem>
                <MenuItem>Obe Sampson</MenuItem>
                <MenuItem>Obe Sampson</MenuItem>
              </SelectComp>
            </FormControl>
          </Grid>
          <Grid item flex={1}>
            <FormControl fullWidth>
              <InputLabel>Everyone</InputLabel>
              <SelectComp label="Everyone">
                <MenuItem>Obe Sampson</MenuItem>
                <MenuItem>Obe Sampson</MenuItem>
                <MenuItem>Obe Sampson</MenuItem>
              </SelectComp>
            </FormControl>
          </Grid>
          <Grid item flex={1}>
            <FormControl fullWidth>
              <InputLabel>Everyone</InputLabel>
              <SelectComp label="Everyone">
                <MenuItem>Obe Sampson</MenuItem>
                <MenuItem>Obe Sampson</MenuItem>
                <MenuItem>Obe Sampson</MenuItem>
              </SelectComp>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container columnGap={2} sx={{ mb: "1rem" }}>
          <Grid item flex={1}>
            <Typography>First Name </Typography> <br />
            <StyledInputBase placeholder="Chris" />
          </Grid>
          <Grid item flex={1}>
            <Typography>First Name </Typography> <br />
            <StyledInputBase placeholder="Chris" />
          </Grid>
        </Grid>

        <Grid container columnGap={2} sx={{ mb: "1rem" }}>
          <Grid item flex={2}>
            <Typography>Date of Birth</Typography> <br />
            <StyledInputBase placeholder="MM/DD/YY" />
          </Grid>
          <Grid item flex={1}>
            <FormControl>
              <FormLabel>Gender</FormLabel> <br />
              <RadioGroup row>
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container justifyContent={"flex-end"}>
          <ButtonComp
            variant="contained"
            endIcon={<ArrowRightAlt />}
            sx={{ textTransform: "capitalize" }}
          >
            next
          </ButtonComp>
        </Grid>
      </Box>
    </Wrapper>
  );
};

export default AddStudentModal;

const Wrapper = styled.div``;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 500,
  bgcolor: "white",
  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.25)",
  p: 4,
  paddingTop: 2
};
