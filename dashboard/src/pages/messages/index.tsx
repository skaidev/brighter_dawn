import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import styled from "styled-components";

const MessagesPage = () => {
  return (
    <Wrapper>
      <Container className="message mt-5">
        <Box className="message-content">
          <div className="message-content-top">
            <TextField placeholder="Search" fullWidth></TextField>
          </div>
          <div className="message-content-bottom d-flex">
            <FormControl className="first" fullWidth>
              <InputLabel variant="filled">All Messages</InputLabel>
              <Select label="All Messages">
                <MenuItem>All Messages</MenuItem>
                <MenuItem>Sent Messages</MenuItem>
                <MenuItem>Draft Messages</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default MessagesPage;

const Wrapper = styled.div`
  .message {
    &-content {
      &-bottom {
        .first {
          border: none;
        }
      }
    }
  }
`;
