import gql from "graphql-tag";

export const GET_ARTICLES = gql`
	{
		articles {
			id
			title
			slug
			description
			image {
				url
			}
		}
	}
`;

export const GET_ARTICLE = gql`
	query ($slug: String) {
		articles(where: { slug: $slug }) {
			id
			title
			slug
			description
			image {
				url
			}
			content
		}
	}
`;
