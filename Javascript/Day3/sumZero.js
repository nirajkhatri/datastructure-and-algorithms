// write a function called sumZero which accepts a sorted
// array of integers the function should find the first pair
// where the sum is 0. Return an array that includes both
// values that sum to zero or undefined if a pair does not exist

// function sumZero(arr) {
//   let pointerOne = arr[0];
//   let secondPointer = 0;

//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (!(pointerOne + arr[i])) {
//       secondPointer = arr[i];
//       return [pointerOne, secondPointer];
//     } else {
//       pointerOne = arr[i] + 1;
//     }
//   }
// }

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-2, 0, 1, 3]));
// console.log(sumZero([1, 2, 3]));

// function sumZero(arr) {
//   let leftPointer = 0;
//   let rightPointer = arr.length - 1;
//   for (let i = 0; i <= arr.length; i++) {
//     let sum = arr[rightPointer] + arr[leftPointer];
//     if (sum === 0) {
//       return [arr[leftPointer], arr[rightPointer]];
//     } else if (sum > 0) {
//       rightPointer--;
//     } else {
//       leftPointer++;
//     }
//   }
// }

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-2, 0, 1, 3]));
// console.log(sumZero([1, 2, 3]));

// write a function called sumZero which accepts a sorted
// array of integers the function should find the first pair
// where the sum is 0. Return an array that includes both
// values that sum to zero or undefined if a pair does not exist

//  -- Niraj Khatri

function sumZero(arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    let sum = arr[leftPointer] + arr[rightPointer];

    if (sum === 0) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
