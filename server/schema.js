const { gql } = require("apollo-server");

const typeDefs = gql`
   type User {
      id: ID!
      name: String!
      email: String!
      password: String!
      age: Int!
      gender: Gender!
   }

   type Gender {
      id: ID!
      gender: String!
      slug: String!
      users: [User!]!
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
      genders: [Gender!]
      gender(id: ID!): Gender!
   }
`;

module.exports = { typeDefs };
