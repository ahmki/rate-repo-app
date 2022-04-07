import { gql } from "@apollo/client";

/* Added id to query so repository rendering 
flatlist can have a unique key for every item */
export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          description
          language
          ownerAvatarUrl
          id
        }
      }
    }
  }
`;

export const GET_AUTHORIZED_USER = gql`
  query {
    me {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  query ($id: ID!) {
    repository(id: $id) {
      id
      ownerAvatarUrl
      fullName
      description
      language
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;