//Write a function which takes in a string and returns counts of each character in the string

// 1.restate problem

// countChar('aaaa') -- {a:4,b:0,c:0......?}
// countChar('hello') -- {h:1, e:1, l:2, o:1}

// 2.Validate input

// what about spacing ?
// Uppercase -- lowercase
// isInput -- empty string ?? null :undfined :erro:empty object
// input type -- number ?null??

// 3.BreakDown Into Smaller Problem
// write down the steps you are going to follow -- layout

// function charCount(str: string) {
//   //do something
//   // return a object with key that are lower case -- convert upper to lower and count as value
// }

function charCount(str: string) {
  //   make object to return at end
  //   loop through the string, for each character
  // if char is a number/string and is a key in object add one to count
  // else add char only if char is number/string  to object and set count 1
  //   else if is something else (space,period,etc) dont do anything
  //   return the object
}
