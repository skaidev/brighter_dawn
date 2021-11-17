import gql from "graphql-tag";

export const GET_ARTICLES = gql`
	query ($limit:Int,$start:Int){
		articles (limit:$limit,start:$start,sort:"createdAt:DESC") {
			id
			title
			slug
			description
			createdAt
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
