import styled from "styled-components";
import { Select, TextareaAutosize, TextField } from "@mui/material";

export const InputComp = styled(TextField)`
	&.MuiOutlinedInput-input,
	.MuiInputBase-input,
	.MuiInputBase-inputSizeSmall,
	.css-1udluuh-MuiInputBase-input-MuiOutlinedInput-input {
		padding: 0.85rem;
	}
`;

export const InputCompTwo = styled(TextField)`
	&.MuiOutlinedInput-input,
	.MuiInputBase-input,
	.MuiInputBase-inputSizeSmall,
	.css-1udluuh-MuiInputBase-input-MuiOutlinedInput-input {
		padding: 0 0.4rem 0.4rem 0.6rem;
		width: 6.375rem;
		border-radius: 5px;
	}
`;

export const SelectComp = styled(Select)`
	&.MuiSelect-select,
	.MuiSelect-outlined,
	.MuiOutlinedInput-input,
	.MuiInputBase-input {
		padding-bottom: 0.7rem;
		border-radius: 0;
	}
`;
