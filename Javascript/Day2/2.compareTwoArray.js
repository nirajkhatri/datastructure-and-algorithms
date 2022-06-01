// Write a function called same, which accept two arrays.
// The function should return true if every value in the array has its corresponding
// value squared in the second array.The frequent of number must be the same

function same(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let el of arr1) {
      for (let a of arr2) {
        if (el * el === a) {
        }
      }
    }
  }
  return false;
}
console.log(same([1, 2, 3], [1, 4, 9]));
// console.log(same([1, 2, 3], [1, 9]));
// console.log(same([1, 2, 1], [4, 4, 1]));
