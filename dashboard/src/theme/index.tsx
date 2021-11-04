import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#1271bb",
		},
		success: {
			main: "#28a745",
		},
		error: {
			main: "#ff0000",
		},
	},
	typography: {
		fontFamily: ["Lato", "sans-serif"].join(","),
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					paddingLeft: "4%",
					paddingRight: "4%",
					borderRadius: 0,
				},
			},
		},

		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: 0,
				},
			},
		},
		MuiTextField: {
			defaultProps: {
				size: "small",
			},
		},
	},
});
