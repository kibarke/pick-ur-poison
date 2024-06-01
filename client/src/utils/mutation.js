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

