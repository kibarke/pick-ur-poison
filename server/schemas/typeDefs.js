// insert strings documents schemas functions\
// const typeDefs = `
// type Comment {
//     _id: ID
//     commentText: String
//     createdAt: String
//   }
//   `
//   module.exports = typeDefs;

const typeDefs = `
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;
