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

export const ADD_CART = gql`
mutation Mutation($mocktail: ID!, $cocktail: ID!) {
  createCart(mocktail: $mocktail, cocktail: $cocktail) {
    mocktail {
      _id
      name
      price
    }
    cocktail {
      _id
      name
      price
    }
  }
}
`
export const REMOVE_MOCKTAIL = gql`
mutation Mutation($cartId: ID!, $mocktailId: ID!) {
  removeMocktail(cartId: $cartId, mocktailId: $mocktailId) {
    _id
    name
  }
}
`
export const REMOVE_COCKTAIL = gql`
mutation Mutation($cartId: ID!, $cocktailId: ID!) {
  removeCocktail(cartId: $cartId, cocktailId: $cocktailId) {
    _id
    name
  }
}
`