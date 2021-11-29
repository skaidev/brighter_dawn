// import { ModalComp } from "lib/ModalComp";
import BasicModal from "components/messages/ModalComp";
import { ButtonComp } from "lib/ButtonComp";
import React, { useState } from "react";

const HomePage = () => {
  const [open,setOpen] = useState(false)
  return (
    <div>
      <ButtonComp onClick={()=>setOpen(true)}>Open</ButtonComp>
      <BasicModal open={open} onClose={()=>setOpen(false)} />
    </div>
  );
};

export default HomePage;
