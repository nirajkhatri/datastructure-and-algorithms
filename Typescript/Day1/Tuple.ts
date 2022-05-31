// Typescript introduce new datatype called tuple
// Tuples are array of fixed length with fixed data type

// 1. we need an array that only store exactly two value
// Normal Array
const Role = [2, "author"];
// can push new element
Role.push(3);
// can change existing array
Role[1] = "niraj";
console.log(Role);

// Tuple
// [number,string] -> this marks tuple
let newRole: [number, string] = [3, "Niraj"];
// push is exceptional
// console.log(newRole.push("test"));
console.log((newRole = [4, "niraj"]));
console.log(newRole);
