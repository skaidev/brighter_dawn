import { MenuItem } from "@mui/material";
import BasicModal from "components/messages/ModalComp";
import { ButtonComp } from "lib/ButtonComp";
import React, { useState } from "react";
import { SelectComp } from "../lib/InputComp";

const HomePage = () => {
  const [open,setOpen] = useState(false)
  return (
    <div>
      <SelectComp fullWidth>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </SelectComp>
    
    </div>
  );
};

export default HomePage;
