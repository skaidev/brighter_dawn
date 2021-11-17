import gql from "graphql-tag";

export const GET_EVENTS = gql`
  query ($limit: Int, $start: Int) {
    events(limit: $limit, start: $start, sort: "createdAt:DESC") {
      id
      title
      date
      slug
      body
      description
      createdAt
      image {
        url
      }
    }
  }
`;

export const GET_EVENT = gql`
  query GetEvent($slug: String) {
    events(where: { slug: $slug }) {
      title
      slug
      createdAt
      date
      body
      gallery {
        url
      }
      image {
        url
      }
    }
  }
`;
