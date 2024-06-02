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
          mocktailName
          mocktailPrice
        }
        cocktail {
          cocktailName
          cocktailPrice
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
      mocktailPrice
    }
  }
`

export const QUERY_MOCKTAIL = gql`
query Mocktail($id: ID!) {
    mocktail(_id: $id) {
      _id
      mocktailName
      mocktailIngredients
      mocktailPrice
    }
  }
`

export const QUERY_ALL_COCKTAILS = gql`
query getCocktails {
    cocktails {
      _id
      cocktailName
      cocktailIngredients
      cocktailPrice
    }
  }
`
export const QUERY_COCKTAIL = gql`
query Cocktail($id: ID!) {
    cocktail(_id: $id) {
      _id
      cocktailName
      cocktailIngredients
      cocktailPrice
    }
  }
`