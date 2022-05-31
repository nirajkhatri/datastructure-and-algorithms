// Typescript introduces emus
// enums are numerical value with human readable labels
// enums contains constant value and constant length

//Normal JS

const ADMIN = 0;
const USER = 1;
const GUEST = 2;

const newUser = {
  name: "Niraj",
  age: 23,
  hobbies: ["Sleeping", "Programming"],
  //ROLE CAN BE ASSIGNED ANY NUMERICAL VALUE OTHER THAN WE DEFINED
  role: ADMIN,
};

// WITH TYPESCRIPT

// default starts with 0
// can give any starting number
enum NewRole {
  ADMIN,
  USER,
  GUEST,
}

// creating new user object
const finalUser = {
  name: "Niraj",
  age: 23,
  hobbies: ["Sleeping", "Programming"],
  //ROLE CAN BE ASSIGNED ANY NUMERICAL VALUE OTHER THAN WE DEFINED
  role: NewRole.ADMIN,
};

// testing ts in function
function validateUser(user: {
  name: string;
  age: number;
  hobbies: string[];
  role: NewRole;
}) {
  // return if users role is admin
  if (user.role === ADMIN) {
    return "I am admin";
  }
  // return if users role is not admin
  return "I am not admin";
}

// executing the validateUser function
console.log(validateUser(finalUser));
