//Write a function which takes in a string and returns counts of each character in the string

//checking if character lies in a - z
function validStrChecker(char: string): Boolean {
  let code = char.charCodeAt(0);
  return code > 64 && code < 123;
}

//character counter function
function charCounter(str: string) {
  let count = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (validStrChecker(char)) {
      count[char] = ++count[char] || 1;
    }
  }
  return count;
}

console.log(charCounter("#@NiIiRAj092"));
