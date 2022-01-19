import { apolloMainServer } from "apollo";
import { GET_USER } from "apollo/queries/auth.query";
import axios from "axios";
import { IUser } from "interface/user.interface";
import AuthLayout from "layout/AuthLayout";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import styled from "styled-components";
import { SERVER_URL } from "utils/constants";

type IProp = IUser & {
	password: string;
	password2: string;
	userId: string;
};

const AccountPage = ({ user }: { user: IUser }) => {
	const [info, setInfo] = useState<Partial<IProp>>({
		email: user.email,
		password: "",
		password2: "",
		userId: user.id,
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const { password2, password } = info;
		if (password !== password2) return alert("Passwords do not match");
		try {
			const { data } = await axios.post(`${SERVER_URL}/api/v1/auth/register`, {
				password,
				profile: user?.id,
			});
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<AuthLayout>
			<Wrapper>
				<div className="inner container">
					<h1>Welcome {user?.firstName}</h1>
					<form onSubmit={handleSubmit}>
						<div className="form-group mb-3">
							<label htmlFor="password">Password</label>
							<input
								onChange={(e) => setInfo({ ...info, password: e.target.value })}
								type="password"
								className="form-control"
							/>
						</div>
						<div className="form-group mb-3">
							<label htmlFor="confirm-password">Confirm Password</label>
							<input
								onChange={(e) =>
									setInfo({ ...info, password2: e.target.value })
								}
								type="password"
								className="form-control"
							/>
						</div>
						<button className="btn btn-primary">Create Profile</button>
					</form>
				</div>
			</Wrapper>
		</AuthLayout>
	);
};

export default AccountPage;

const Wrapper = styled.div`
	min-height: 100vh;
	background-color: red;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	.inner {
		background-color: yellow;
		min-height: 80vh;
	}
`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const userId = ctx?.query?.userId;
	try {
		const { data } = await apolloMainServer.query({
			query: GET_USER,
			variables: { id: userId },
		});
		const user = data.getUser;
		return {
			props: {
				user,
			},
		};
	} catch (error) {
		console.log(error);
		return {
			props: {
				user: null,
			},
		};
	}
};
