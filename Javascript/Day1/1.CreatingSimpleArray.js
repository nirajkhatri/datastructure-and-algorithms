//implementing array with class

class MyArray {
  constructor() {
    //initializing the length  = 0 and data to empty object
    //data can be equal to {} -- object or [] -- array as per the choice
    this.length = 0;
    this.data = {};
  }

  get() {
    //getting and returning the data object
    return this.data;
  }

  push(element) {
    //add element to the last of object
    this.data[this.length] = element;

    //increase the length of the object
    this.length++;

    //return the new Array by adding the element
    return this.data;
  }

  pop() {
    //deleting the last item from array
    delete this.data[this.length - 1];

    //decrementing the length
    this.length--;

    //returning the new updated data
    return this.data;
  }
}

const newArray = new MyArray();
console.log(newArray.get());
console.log(newArray.push(2));
console.log(newArray.push(2));
console.log(newArray.push(2));
console.log(newArray.push(2));
console.log(newArray.length);
console.log(newArray.pop());
console.log(newArray.length);
