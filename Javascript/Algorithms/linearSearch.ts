function linerSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return true;
  }
  return false;
}

console.log(linerSearch([1, 2, 5, 6, 7, 9], 2));
