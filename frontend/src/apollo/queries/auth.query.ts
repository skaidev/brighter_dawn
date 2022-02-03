import { gql } from "@apollo/client";

export const GET_USER = gql`
	query ($id: ID) {
		getUser(id: $id) {
			id
			accountType
			email
			firstName
		}
	}
`;
