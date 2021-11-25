import gql from "graphql-tag";


export const GET_TESTIMONIALS = gql`

{
    testimonials{
      name,
      content,
      image{
        url
      }
    }
  }
`;