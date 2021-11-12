import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const HomePage = () => {
	return (
		<div className="container">
			<h1>Home</h1>
			<div className="mb-2">
				<p>Smith rowe</p>
				<p>Jonah Pink</p>
				{/* <button className="btn btn-primary">Edit Row</button> */}
			</div>
			<div className="">
				<Button variant="contained">Edit Row</Button>
			</div>
			<Box className="mt-4">
				{/* <InputLabel>Username</InputLabel> */}
				{/* <TextField label="Username" /> */}
				<TextField label="Username" />
			</Box>
		</div>
	);
};

export default HomePage;
