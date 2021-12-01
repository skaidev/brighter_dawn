import {
  AttachmentRounded,
  FormatBold,
  FormatItalicOutlined,
  FormatUnderlined,
} from "@mui/icons-material";
import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { ButtonComp } from "lib/ButtonComp";
import { InputComp, SelectComp } from "lib/InputComp";
import React from "react";
import styled from "styled-components";

const SingleMessagePage = () => {
  return (
    <Wrapper>
      <Container className="header mb-5">
        <Typography className="text mt-3">Smart Lists:</Typography>
        <div className="header-content d-flex mt-3">
          <div className="left">
            <FormControl fullWidth>
              <InputLabel>Select Class</InputLabel>
              <SelectComp placeholder="select class">
                <MenuItem>ss1</MenuItem>
                <MenuItem>ss2</MenuItem>
                <MenuItem>ss3</MenuItem>
              </SelectComp>
            </FormControl>
          </div>
          <div className="mid ">
            <FormControl fullWidth>
              <InputLabel>Select Class</InputLabel>
              <SelectComp placeholder="select class">
                <MenuItem>ss1</MenuItem>
                <MenuItem>ss2</MenuItem>
                <MenuItem>ss3</MenuItem>
              </SelectComp>
            </FormControl>
          </div>
          <div className="right">
            <InputComp
              placeholder="Search Names, Reg no and click on enter button"
              fullWidth
            />
          </div>
        </div>
        <div className="header-desc d-flex mt-5">
          <div className="first">
            <p>Subject</p>
          </div>
          <div className="second">
            <InputComp placeholder="Enter subject here" fullWidth />
            <TextareaAutosize
              minRows={9}
              style={{ width: 870 }}
              className=" mt-5 pt-2 px-2"
              placeholder="Enter your message here....."
            ></TextareaAutosize>
            <div className="icons px-3">
              <div>
                <FormatBold />
                <FormatItalicOutlined />
                <FormatUnderlined />
              </div>
              <div>
                <AttachmentRounded />
              </div>
            </div>
          </div>
        </div>
        <Grid container justifyContent="flex-end">
          <ButtonComp variant="outlined" className=" me-2">
            Save as Draft
          </ButtonComp>
          <ButtonComp variant="contained">Send</ButtonComp>
        </Grid>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .header {
    .text {
      text-decoration: underline;
    }
    &-content {
      gap: 1rem;
      .left {
        flex: 1;
      }
      .mid {
        flex: 1;
      }
      .right {
        flex: 2;
      }
    }
    &-desc {
      .first {
        width: 25%;
      }
      .second {
        width: 75%;

        .icons {
          display: flex;
          justify-content: space-between;
          position: relative;
          bottom: 2.2rem;
        }
      }
    }
  }
`;

export default SingleMessagePage;
