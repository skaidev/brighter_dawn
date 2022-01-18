import { MenuItem } from "@mui/material";
import React from "react";
import { SelectComp } from "../lib/InputComp";

const HomePage = () => {
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
