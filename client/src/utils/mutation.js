import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      email
      password
    }
    token
  }
}
`;

export const ADD_USER = gql`
mutation AddUser($email: String!, $dateofbirth: String!, $username: String!, $password: String!) {
  addUser(email: $email, dateofbirth: $dateofbirth, username: $username, password: $password) {
    user {
      username
    }
    token
  }
}
`;

// nts - thinking of ideas to twist this for cocktail
export const ORDER_COCKTAIL = gql`
  mutation addThought($thoughtText: String!, $thoughtAuthor: String!) {
    addThought(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

// nts- thinking of ideas to twist this for mocktail 
export const ORDER_MOCKTAIL = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
