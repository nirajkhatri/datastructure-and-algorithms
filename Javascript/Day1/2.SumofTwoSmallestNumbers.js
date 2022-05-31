//using algorithm

function sumTwoSmallestNumbers(numbers) {
  //array to store the lowestNumbers
  let lowestNumber = [];

  //looping through the given
  for (let i = 0; i < numbers.length; i++) {
    if (lowestNumber.length === 0) {
      lowestNumber.push(numbers[i]);
    } else if (lowestNumber.length === 1) {
      lowestNumber.push(numbers[i]);
    } else if (lowestNumber.length === 2) {
      lowestNumber.sort((a, b) => a - b);
      if (numbers[i] < lowestNumber[1]) {
        lowestNumber.pop();
        lowestNumber.push(numbers[i]);
      }
    }
  }

  let sum = 0;

  for (let a = 0; a < lowestNumber.length; a++) {
    sum += lowestNumber[a];
  }
  return sum;
}

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));

//latest and easy

function sumTwoSmallestNumbersModern(numbers) {
  let finalNumber = numbers.sort((a, b) => a - b);
  return finalNumber[0] + finalNumber[1];
}

console.log(sumTwoSmallestNumbersModern([15, 28, 4, 2, 43]));

//My New Way of Implementing
