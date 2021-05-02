# Apollo Server + GraphQL setup

-  A boilerplate code for a simple Apollo Server setup with GraphQL integration
-  Refer [here](https://www.apollographql.com/docs/apollo-server/getting-started/) to see the basic setup documentation

## Concepts

1. Setup a server with an IDE to view schema and documentation
1. Working with resolvers and custom resolvers
1. Entity Relationships
1. Fetching from a RESTful API data source
1. Normalize incoming data from RESTful data sources

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

## Setup ESLint

```
$ npm install eslint
$ npx eslint --init
$ npx eslint ./js/scripts.js
```

## Normalize Incoming Data

> Since the incoming data doesnt match the schema I established, I needed to normalize the data so that it is identical to the schema. The map method will go through the iterable items and set them into a new array of objects in "normalizedData"

```javascript
catFacts: async () => {
      const endpoint = await fetch("https://cat-fact.herokuapp.com/facts");
      const data = await endpoint.json();

      const normalizedData = data.map((fact) => {
         const objData = {
            id: fact._id,
            type: fact.type,
            text: fact.text,
            source: fact.source,
         };
         return objData;
      });

      console.log(normalizedData);
      return normalizedData;
   },
```
