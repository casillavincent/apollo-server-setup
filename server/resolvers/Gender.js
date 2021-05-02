/*
This will return a new list of array that matches the argument,
In this instance the parent will be the gender when you query
on the IDE
*/
const Gender = {
   users: (parent, __, { users }) => {
      return users.filter((user) => {
         return user.gender === parent.id;
      });
   },
};

module.exports = { Gender };
