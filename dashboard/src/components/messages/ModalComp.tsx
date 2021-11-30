import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Modal} from "@mui/material";
import styled from "styled-components";

export default function BasicModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose(): void;
}) {
  return (
    <Wrapper>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MyBox className="style">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </MyBox>
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
`;

const MyBox = styled(Box)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: 'translate(-50%, -50%)';
  width: 400;
  background-color: gray;
  border: 2px solid red;
`;