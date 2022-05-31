//  Arrays in typescript

// normal js array
let hobbies = ["Niraj", "23"];

let favouriteActivites: string[];

//cannot assign type string to type array
// favouriteActivites = "Sleeping";

// adding string and number in string type array
// number is not assignable to type string
// favouriteActivites = ["string", 23];

// what to use multiple data type use any type -- any type should be used carefully
// any remove the benefit of typescript

let newFavouriteActivities: any[];
newFavouriteActivities = ["string", 1];
