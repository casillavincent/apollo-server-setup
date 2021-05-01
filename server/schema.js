const { gql } = require("apollo-server");

const typeDefs = gql`
   type User {
      id: ID!
      name: String!
      email: String!
      password: String!
      age: Int!
   }

   type CatFact {
      id: ID!
      text: String!
      source: String!
      type: String!
   }

   type Query {
      users: [User!]
      user(id: ID!): User!
      catFacts: [CatFact!]
   }
`;

module.exports = { typeDefs };
