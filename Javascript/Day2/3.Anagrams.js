// Given two strings, write a function to determine if the second string is
// an anagram of the first.

// function validAnagram(str1, str2) {
//     if (str1.length !== str2.length) {
//       return false;
//     }
//     let obj1 = {};

//     for (let el of str1) {
//       obj1[el] = (obj1[el] || 0) + 1;
//     }
//     for (let el of str2) {
//       if (!obj1[el]) {
//         return false;
//       } else {
//         obj1[el] = obj1[el] - 1;
//       }
//     }

//     return true;
//   }

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let obj1 = {};

  for (let el of str1) {
    obj1[el] = (obj1[el] || 0) + 1;
  }
  for (let el of str2) {
    if (!obj1[el]) {
      return false;
    }
    obj1[el] = obj1[el] - 1;
  }

  return true;
}

// console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
// console.log(validAnagram("rat", "car"));
// console.log(validAnagram("qwerty", "qeywrt"));
