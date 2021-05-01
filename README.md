# Apollo Server + GraphQL setup

-  A boilerplate code for a simple Apollo Server setup with GraphQL integration
-  Refer [here](https://www.apollographql.com/docs/apollo-server/getting-started/) to see the basic setup documentation

## Concepts

1. Setup a server with an IDE to view schema and documentation
1. Working with resolvers and custom resolvers
1. Entity Relationships
1. Fetching from a RESTful API data source

## Install dependencies and packages

```javascript
$ npm init -y
$ npm install --save-dev nodemon
$ npm install apollo-server-express graphql express
```

## App.js example

```javascript
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
```

## Using a RESTful data source

```javascript
const fetch = require("node-fetch");
const Query = {
   users: (parent, args, { users }) => users,
   user: (parent, args, { users }) => {
      let user = users.find((user) => {
         return user.id === args.id;
      });
      return user;
   },
   catFacts: async () => {
      const endpoint = await fetch("https://cat-fact.herokuapp.com/facts");
      const data = await endpoint.json();
      console.log(data);
      return data;
   },
};

module.exports = { Query };
```
