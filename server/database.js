/*
----------------------------------------
         Users
----------------------------------------
*/
const users = [
   {
      id: "001",
      name: "Vincent C",
      email: "vincent_c@email.com",
      password: "6daPB&gxE4j:9u^<z_6n",
      age: 25,
      gender: "01",
   },
   {
      id: "002",
      name: "Brandon W",
      email: "brandon_w123@email.com",
      password: "Zu))mcnvM%Vj9cT&$5BT",
      age: 23,
      gender: "01",
   },
   {
      id: "003",
      name: "Crystal M",
      email: "crystal_m@email.com",
      password: "m!ex:/Qpg6fqHHwE2PJ&",
      age: 43,
      gender: "02",
   },
   {
      id: "004",
      name: "James R",
      email: "jamesr005@email.com",
      password: "rFE_ng*GY42QPx^PpAX",
      age: 20,
      gender: "03",
   },
   {
      id: "005",
      name: "Mary R",
      email: "mary_r555@email.com",
      password: "Ca,B}v_M5@rVK`T5tx:4",
      age: 47,
      gender: "02",
   },
   {
      id: "006",
      name: "Melissa W",
      email: "melissa_w_3434@email.com",
      password: "Ea,BDFe4v_M5@rVK`T5tx:4",
      age: 47,
      gender: "02",
   },
];

/*
----------------------------------------
         Gender
----------------------------------------
*/
const genders = [
   {
      id: "01",
      gender: "male",
      slug: "male",
   },
   {
      id: "02",
      gender: "female",
      slug: "female",
   },
   {
      id: "03",
      gender: "non binary",
      slug: "non-binary",
   },
];

// Exports
module.exports = {
   users,
   genders,
};
