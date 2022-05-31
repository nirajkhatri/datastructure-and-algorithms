//Objects in typerscript

//generic object declaration
// object or {}
const person: object = {
  name: "Niraj",
  age: 23,
};

console.log(person);

//specific object declaration
const newPerson: {
  name: string;
  age: number;
} = {
  name: "Niraj",
  age: 23,
};

console.log(newPerson);

//better syntax
// typescript automatically infer types
const anotherPerson = {
  name: "Niraj",
  age: 2,
};
