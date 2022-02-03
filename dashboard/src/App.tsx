import { ThemeProvider } from "@mui/material/styles";
import { client } from "apollo";
import { GET_ME } from "apollo/queries/auth.query";
import { UserAtom } from "atom/user.atom";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
// import "bootstrap/dist/js/bootstrap.js";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { styledTheme, theme } from "theme";
import { TOKEN_NAME } from "utils/constants";
import RouterComp from "./routes";
import "./styles/custom.scss";
import "./styles/index.scss";

const App = () => {
	const [user, setUser] = useRecoilState(UserAtom);
	const [isAuth, setIsAuth] = useState(Boolean(Cookies.get(TOKEN_NAME)));
	const token = Cookies.get(TOKEN_NAME);

	useEffect(() => {
		const getUser = async () => {
			try {
				const { data } = await client.query({ query: GET_ME });
				setUser(data.me);
				setIsAuth(true);
			} catch (error) {
				console.log(error);
				Cookies.remove(TOKEN_NAME);
			}
		};
		if (token) {
			setIsAuth(true);
			getUser();
		}
	}, [user, token]);

	console.log(isAuth);
	return (
		<div>
			<StyledThemeProvider theme={styledTheme}>
				<ThemeProvider theme={theme}>
					<RouterComp isAuth={isAuth as unknown as boolean} />
				</ThemeProvider>
			</StyledThemeProvider>
		</div>
	);
};

export default App;
