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
    moctailPrice: Int
  }

  type Cocktail {
    _id: ID
    cocktailName: String
    cocktailIngredients: String
    coctailPrice: Int
  }

  type Cart {
    user: [User]
    mocktail: [Mocktail]
    cocktail: [Cocktail]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, dateofbirth: String!): Auth
    login(email: String!, password: String!): Auth
    }

`;

module.exports = typeDefs;
