const User = {
   gender: (parent, __, { genders }) => {
      const userGender = genders.find((gender) => {
         return gender.id === parent.gender;
      });
      console.log(userGender);
      return userGender.gender;
   },
};

module.exports = {
   User,
};
