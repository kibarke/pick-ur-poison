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
query User($username: String!) {
    user(username: $username) {
      _id
      username
      email
      dateofbirth
      cart {
        mocktail {
          mocktailName
          moctailPrice
        }
        cocktail {
          cocktailName
          coctailPrice
        }
      }
    }
  }
`


export const QUERY_ALL_MOCKTAILS = gql`
query getMocktails {
    mocktails {
      _id
      mocktailIngredients
      mocktailName
      moctailPrice
    }
  }
`

export const QUERY_MOCKTAIL = gql`
query Mocktail($id: ID!) {
    mocktail(_id: $id) {
      _id
      mocktailName
      mocktailIngredients
      moctailPrice
    }
  }
`

export const QUERY_ALL_COCKTAILS = gql`
query getCocktails {
    cocktails {
      _id
      cocktailName
      cocktailIngredients
      coctailPrice
    }
  }
`
export const QUERY_COCKTAIL = gql`
query Cocktail($id: ID!) {
    cocktail(_id: $id) {
      _id
      cocktailName
      cocktailIngredients
      coctailPrice
    }
  }
`