//if variable is declared with initial value doesnot need to assign type manually
// type inference works automatically here

const PI = 3.14;
let number = 0;

//variable declared with out value need to be assigned type
// normal js
let num1;
num1 = 0;
num1 = "test";

// typescript
let num2: number;
num2 = 0;

// raise error - cannot assign string to typeof number variable
// num2 = "test";
