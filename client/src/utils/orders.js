import { gql } from '@apollo/client';

export const ORDER_COCKTAIL = gql`
  query getCocktail {
    cocktail {
      _id
      cocktailTitle
      cocktailIngredients
      doubleShot 
      price
    }
  }
`;

export const ORDER_MOCKTAIL = gql`
  query getMocktail {
    cocktail {
      _id
      mocktailTitle
      mocktailIngredients
      price
    }
  }
`;

// export const ORDER_MOCKTAIL = gql`
//   query getSingleThought($thoughtId: ID!) {
//     thought(thoughtId: $thoughtId) {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//         createdAt
//       }
//     }
//   }
// `;
