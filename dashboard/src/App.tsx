import React from "react";
import RouterComp from "./routes";
import "./styles/index.scss";
import "./styles/custom.scss";
import { ThemeProvider } from "@mui/material/styles";
import { styledTheme, theme } from "theme";
// import "bootstrap/dist/js/bootstrap.js";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const App = () => {
	return (
		<div>
			<StyledThemeProvider theme={styledTheme}>
				<ThemeProvider theme={theme}>
					<RouterComp isAuth={true} />
				</ThemeProvider>
			</StyledThemeProvider>
		</div>
	);
};

export default App;
