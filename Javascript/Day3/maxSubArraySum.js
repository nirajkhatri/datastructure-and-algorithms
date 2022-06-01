// write a function called maxSubarrySum which accepts
// an array of integers and a number called n.
// this function should calculate the maximum sum of n consecutive elements in array

function maxSubarrySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let tracker = 0;
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
  return tracker;
}

console.log(maxSubarrySum([1, 2, 5, 2, 8, 1, 5], 2));
// console.log(maxSubarrySum([1, 2, 5, 2, 8, 1, 5], 4));
// console.log(maxSubarrySum([4, 2, 6, 2], 1));
// console.log(maxSubarrySum([4, 2, 1, 6, 2], 4));
// console.log(maxSubarrySum([], 4));
// 10 17 6
