import gql from "graphql-tag";

export const GET_EVENTS = gql`
    {
        events {
            id
            title
			date
			slug
			
            description
            image {
				url
			}
        }
    }
`

export const GET_EVENT = gql`
query GetEvent($slug:String) {
	events(where:{slug:$slug}) {
	  title
	  slug
	  createdAt
	  date
	  body
		gallery{
      url
    }
	  image {
		  url
	  }
	}
  }
`;