import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query Users {
    users {
      username
      email
      dateofbirth
    }
  }
`
export const QUERY_USER = gql`
query User {
    user {
      _id
      username
      email
      dateofbirth
      cart {
        mocktail {
          name
          price
        }
        cocktail {
          name
          price
        }
      }
    }
  }
`


export const QUERY_ALL_MOCKTAILS = gql`
query getMocktails {
    mocktails {
      _id
      ingredients
      name
      price
    }
  }
`

export const QUERY_MOCKTAIL = gql`
query Mocktail($id: ID!) {
    mocktail(_id: $id) {
      _id
      name
      ingredients
      price
    }
  }
`

export const QUERY_ALL_COCKTAILS = gql`
query getCocktails {
    cocktails {
      _id
      name
      ingredients
      price
    }
  }
`
export const QUERY_COCKTAIL = gql`
query Cocktail($id: ID!) {
    cocktail(_id: $id) {
      _id
      name
      ingredients
      price
    }
  }
`