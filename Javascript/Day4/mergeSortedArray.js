function mergerSortedArray(arr1, arr2) {
  const mergedArray = [];
  let firstPointer = arr1[0];
  let secondPointer = arr2[0];
  let i = 0;
  let y = 0;
  while (firstPointer || secondPointer) {
    if (!secondPointer || firstPointer < secondPointer) {
      mergedArray.push(firstPointer);
      firstPointer = arr1[i];
      i++;
    } else {
      mergedArray.push(secondPointer);
      secondPointer = arr2[y];
      y++;
    }
  }

  return mergedArray;
}

console.log(mergerSortedArray([0, 3, 4, 31], [4, 6, 30]));
