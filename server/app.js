// Imports
const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { users, genders } = require("./database");

// Import Resolvers
const { Query } = require("./resolvers/Query");
const { Gender } = require("./resolvers/Gender");
const { User } = require("./resolvers/User");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
   typeDefs,
   resolvers: {
      Query,
      Gender,
      User,
   },
   context: {
      users,
      genders,
   },
});

// Launches the web server
server.listen().then(({ url }) => {
   console.log(`Server is running at ${url}`);
});
