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
