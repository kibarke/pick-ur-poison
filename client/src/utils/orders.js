import { gql } from '@apollo/client';

export const ORDER_COCKTAIL = gql`
  query getCocktail {
    cocktail {
      _id
      cocktailTitle
      cocktailIngredients
      doubleShot // what could this be?? 2x shot???
    }
  }
`;

export const ORDER_MOCKTAIL = gql`
  query getMocktail {
    cocktail {
      _id
      mocktailTitle
      mocktailIngredients
      createdAt // what could this be?? like a
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
