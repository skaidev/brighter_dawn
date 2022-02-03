import { gql } from "@apollo/client";

export const GET_AUTH_USERS = gql`
	{
		getAuthUsers {
			id
			email
		}
	}
`;

export const GET_ME = gql`
	{
		me {
			id
			firstName
			lastName
			email
			accountType
		}
	}
`;

export const LOGIN = gql`
	mutation Login($email: String, $password: String) {
		login(email: $email, password: $password) {
			id
			token
			isActive
		}
	}
`;
