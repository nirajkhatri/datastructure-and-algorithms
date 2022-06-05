//Recurring number

function recurringNumber(arr) {
  const hasMap = {};

  for (let i = 0; i < arr.length; i++) {
    if (!hasMap[arr[i]]) {
      hasMap[arr[i]] = 1;
    } else {
      return arr[i];
    }
  }
}
console.log(recurringNumber([2, 5, 5, 2, 3, 5, 1, 2, 4]));
console.log(recurringNumber([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(recurringNumber([2, 3, 4, 5]));
