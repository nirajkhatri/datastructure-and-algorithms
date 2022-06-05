function binarySearch(arr, num) {
  let firstPointer = 0;
  let lastPointer = arr.length - 1;

  if (arr[firstPointer] === num) firstPointer;
  if (arr[lastPointer] === num) lastPointer;

  let middlePointer = Math.ceil((firstPointer + lastPointer) / 2);

  while (arr[middlePointer] !== num && firstPointer <= lastPointer) {
    if (arr[middlePointer] < num) firstPointer = middlePointer + 1;
    else lastPointer = middlePointer - 1;

    middlePointer = Math.ceil((firstPointer + lastPointer) / 2);
  }
  return arr[middlePointer] === num ? middlePointer : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14], 4));
