function addNumberJavascript(num1, num2) {
  //null in javsacript is not a number -- its a object
  console.log(num2 === null);

  //checking if num1 and num2 are of type number
  if ((typeof num1 && typeof num2) === "number") {
    //return sum if both input are number
    return num1 + num2;
  }
  //Return if input is not number throw -- error
  throw new Error("Invalid Number");
}

//executing the addNumberJavascript function with (2,4) parameter
console.log(addNumberJavascript(2, 4));

//function with ts that only take number as an input
function addNumber(num1: number, num2: number) {
  //return sum of two number
  return num1 + num2;
}

//executing the addNumber function with (2,4) parameter
console.log(addNumber(2, 4));
