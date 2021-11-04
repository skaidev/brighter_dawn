import React from "react";
import RouterComp from "./routes";
import "./styles/index.scss";
import "./styles/custom.scss";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "theme";
import "bootstrap/dist/js/bootstrap.js";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<RouterComp isAuth={true} />
		</ThemeProvider>
	);
};

export default App;
