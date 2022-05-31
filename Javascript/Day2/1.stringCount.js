//Write a function which takes in a string and returns counts of each character in the string

// 1. How does the function look like ?
// Normal function that takes an string input
// function characterCounter(str) {}

// 2. What the function should do ?
// take string input and return count of each character in string
// which data structure should it return ...
// ... -- array || object || anyother data structure which one you are comfortable
// function characterCounter(str) {
//     // return Object
// return {a:1,b:1}
//   }

// 3. How to convert string to object ?
// convert ? -- take a step back
// where should i store the returning data -- initialize the variable and return it
// ok done!
// function characterCounter(str) {
// storing the returning data
//   let count = { a: 1, b: 2 };
//   // return Object
//   return count;
// }

// 4. How to check through all string values?
// -- May be i should use loop ? (before DSA learning general programming knowledge is required)
// -- lets try looping (IMPORTANT : Loop will most time give O(n) time and space complexity)
// -- done

// function characterCounter(str) {
//   // storing the returning data
//   let count = {};
//   //   looping through the give string
//   for (let i = 0; i < str.length; i++) {}
//   // return Object
//   return count;
// }

// -- can i push element into count object ?

// function characterCounter(str) {
//     // storing the returning data
//     let count = {};
//     //   looping through the give string
//     for (let i = 0; i < str.length; i++) {
//       //   pushing into the count object
//       count.push(str[i]);
// -- ### -- Cannot use push function in object
//     }
//     // return Object
//     return count;
//   }

// -- ok if push doesnot work then how can i add items into the object ?
// if you dont know do some research and understand how to add Objects dont copy paste others code

// function characterCounter(str) {
//     // storing the returning data
//     let count = {};
//     //   looping through the give string
//     for (let i = 0; i < str.length; i++) {
//       //  adding each string item into the object

//       count[i] = str[i];

//     -- we can add object like this does it give us desired data structure ?
//     -- NO

//     }
//     // return Object
//     return count;
//   }

// -- How to achieve desigred data structure ?

// function characterCounter(str) {
//   // storing the returning data
//   let count = {};
//   //   looping through the give string
//   for (let i = 0; i < str.length; i++) {
//     //  adding each string item into the object
//     count[str[i]] = 0;

//     // -- Does above solution give desigred data structure ?
//     //  -- YES but not quite
//     //  -- object value count is always zero
//   }
//   // return Object
//   return count;
// }

// -- Should change value -- 0 on the basis of existince of character on the object
// -- How to check the existance of something(i.e our case character) in the object ?

// function characterCounter(str) {
//   // storing the returning data
//   let count = {};
//   //   looping through the give string
//   for (let i = 0; i < str.length; i++) {
//     //  adding each string item into the object
//     count[str[i]] = 0;
//   }
//   //   with this we can check if character exist in object or not
//   console.log(count.hasOwnProperty("d"));

//   // return Object
//   return count;
// }

// -- Now we can check if the property exist in the object or not
// -- How to increment value if existed or add new Character if it doesnot exits
// -- Should we use control flow statement ?
// -- Lets try with simplest control flow statement {if--else} to check, increment or insert the character
// -- if key exist increment its value by 1
// -- if key doesnot exist add into object and set its value to 1

// function characterCounter(str) {
//   // storing the returning data
//   let count = {};
//   //   looping through the give string
//   for (let i = 0; i < str.length; i++) {
//     //   checking if key exists in count Object
//     if (count.hasOwnProperty(str[i])) {
//       // incrementing the value of character by 1 if exists in object
//       count[str[i]] = count[str[i]] + 1;
//     } else {
//       // adding the character to count object and setting it to 1
//       count[str[i]] = 1;
//     }
//   }

//   // return Object
//   return count;
// }

// -- THE ABOVE CODE GIVES THE DESIGRED RESULT
// -- BUT DOES YOUR ALGORITHM FINISHED YET?
// -- INPUT VALIDATION?CHARACTER VALIDATION?SPACES?SPECIAL CHARACTER?
// -- NOW IS THE CODE SANITIZATION PART

function characterCounter(str) {
  // valiating the string
  if (typeof str === "string") {
    // storing the returning data
    let count = {};
    //   looping through the give string
    for (let i = 0; i < str.length; i++) {
      //   converting all character to lowerCase first
      let letter = str[i].toLowerCase();
      //   checking if key exists in count Object
      if (count.hasOwnProperty(letter)) {
        // incrementing the value of character by 1 if exists in object
        count[letter] = count[letter] + 1;
      } else if (/^[a-z]$/.test(letter)) {
        // /^[a-z]+$/.test(letter) check if the letter belongs to a-z
        //   remove any special character and white space
        // adding the character to count object and setting it to 1
        count[letter] = 1;
      } else {
        // in Javscript else block doesnot have condition checking
      }
    }

    // return Object
    return count;
  } else {
    return "Please Enter Valid String";
  }
}
console.log(characterCounter("#@NiRAj092"));
