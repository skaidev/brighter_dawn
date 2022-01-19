import { useMutation } from "@apollo/client";
import { FormControl, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import { LOGIN } from "apollo/queries/auth.query";
import Cookies from "js-cookie";
import { ButtonComp } from "lib/ButtonComp";
import React, { useState } from "react";
import styled from "styled-components";
import { TOKEN_NAME } from "utils/constants";

const LoginPage = () => {
	const [info, setInfo] = useState({ email: "", password: "" });
	const [login, { loading, error }] = useMutation(LOGIN);
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const { data } = await login({ variables: info });
			Cookies.set(TOKEN_NAME, data.login.token);
			Cookies.set("user_id", data.login.id);
			window.location.href = "/";
		} catch (err) {
			if (error?.graphQLErrors) {
				alert(error?.graphQLErrors?.[0].message);
			}
			console.log(err);
		}
	};
	return (
		<Wrapper>
			<Container>
				<div className="inner">
					<form onSubmit={handleSubmit}>
						<FormControl fullWidth sx={{ mb: 2 }}>
							<TextField
								onChange={(e) => setInfo({ ...info, email: e.target.value })}
								type="email"
								label="Email"
								required
							/>
						</FormControl>
						<FormControl fullWidth sx={{ mb: 2 }}>
							<TextField
								onChange={(e) => setInfo({ ...info, password: e.target.value })}
								type="password"
								label="Password"
								required
							/>
						</FormControl>
						<ButtonComp disabled={loading} type="submit" variant="contained">
							{loading ? "Processing" : "Login"}
						</ButtonComp>
					</form>
				</div>
			</Container>
		</Wrapper>
	);
};

export default LoginPage;

const Wrapper = styled.div`
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	.inner {
		height: 80vh;
	}
`;
