// Imports
const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { users } = require("./database");

// Import Resolvers
const { Query } = require("./resolvers/Query");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
   typeDefs,
   resolvers: {
      Query,
   },
   context: {
      users,
   },
});

// Launches the web server
server.listen().then(({ url }) => {
   console.log(`Server is running at ${url}`);
});
