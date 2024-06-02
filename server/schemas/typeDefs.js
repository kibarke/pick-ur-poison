const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    dateofbirth: String!
    cart: [Cart]
  }

  type Mocktail {
    _id: ID
    mocktailName: String
    mocktailIngredients: String
    mocktailPrice: Float
  }

  type Cocktail {
    _id: ID
    cocktailName: String
    cocktailIngredients: String
    cocktailPrice: Float
  }

  type Cart {
    mocktail: [Mocktail]
    cocktail: [Cocktail]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user: User
    mocktails: [Mocktail]
    mocktail(_id: ID!): Mocktail
    cocktails: [Cocktail]
    cocktail(_id: ID!): Cocktail
    cart(_id: ID!): Cart
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, dateofbirth: String!): Auth
    login(email: String!, password: String!): Auth
    createCart(mocktail: ID!, cocktail: ID!): Cart
  }

`;

module.exports = typeDefs;
