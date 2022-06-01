// accept sorted array
// count unique values in the array
// array can contain negative

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let firstPointer = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[firstPointer] < arr[i]) {
      arr[firstPointer + 1] = arr[i];
      firstPointer++;
    }
  }

  return firstPointer + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 5, 3, 4, 4, 5, 6]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 4]));
