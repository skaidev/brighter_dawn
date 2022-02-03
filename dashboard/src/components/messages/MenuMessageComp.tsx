import * as React from "react";
import { Button, Menu, MenuItem  } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import styled from "styled-components";

const MenuMessageComp = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Wrapper>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className=" text-capitalize btn px-0 pe-3"
        endIcon={<ArrowDropDown />}
      >
        All Messages
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>All Messages</MenuItem>
        <MenuItem onClick={handleClose}>Sent Messages</MenuItem>
        <MenuItem onClick={handleClose}>Draft Messages</MenuItem>
      </Menu>
    </Wrapper>
  );
};

export default MenuMessageComp;

const Wrapper = styled.div`
    .btn {
        color: black;
    }
`;
