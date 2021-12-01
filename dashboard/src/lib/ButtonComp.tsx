import { Button } from "@mui/material";
import styled from "styled-components";


export const ButtonComp = styled(Button)`
    &.MuiButton-root,.MuiButton-contained, .MuiButtonBase-root {
        box-shadow: none;
        margin-top: 1rem;
    } 
`;

export const ButtonCompTwo = styled(Button)`
    &.MuiButton-root,.MuiButton-contained, .MuiButtonBase-root {
        border-radius: 8px;
    }
`;



