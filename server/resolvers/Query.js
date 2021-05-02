const fetch = require("node-fetch");
const Query = {
   users: (_, __, { users }) => users,

   user: (_, args, { users }) => {
      let user = users.find((user) => {
         return user.id === args.id;
      });
      return user;
   },

   genders: (_, __, { genders }) => genders,
   gender: (_, args, { genders }) => {
      const gender = genders.find((gender) => {
         return gender.id === args.id;
      });
      return gender;
   },

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
};

module.exports = { Query };
