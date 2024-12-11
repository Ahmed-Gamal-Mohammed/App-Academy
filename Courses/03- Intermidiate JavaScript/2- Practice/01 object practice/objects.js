// This is practice for objects with two ways
//========================================================================================================================================//
// This is brackets notation way

// create an object called car
let car = {};
console.log(car);

car["color"] = "black";
console.log(car);            // prints {color: 'black'}
console.log(car["color"]);  // prints black
console.log(car['seats']); // prints undefiend
car['seats'] = 4;
console.log(car);            // prints {color: 'black', seats: 4}


//========================================================================================================================================//
// accessing not assing key get Undefiened
console.log(car["weight"]);  // undefined

// , we can check if a key exists in an object
console.log(car["weight"] == undefined); // return true
console.log(car["seats"] == undefined); // return false

// it's preferred to use the following way for checking if the key exists in an object or not instead of the above way
console.log("color" in car); // return true
console.log("weight" in car); // return false


//========================================================================================================================================//
// you can use variable to assing in the object
let newVariable = "color";
console.log(newVariable);      // prints color
console.log(car[newVariable]); // prints black

//========================================================================================================================================//
// This is the second way to access and assign keys in an objects
// dot Notation
let dog = {};
dog.color = "black";
console.log(dog);

dog.bark = "Bowowowowo";
console.log(dog);

// wrong ... you can not use variable to assgin or access in dot notation ...
// you can not access using dot notation the object statrt with number like 3key


//========================================================================================================================================//
// you can put values to the object when you initial that
let myDog = {
    name: "Fido",
    type: "Doge",
    age: 2,
    favoriteToys: ["bone", "ball"]
};

console.log(myDog.age); // prints 2
console.log(myDog["favoriteToys"]); // prints ["bone", "ball"]

//==========================================================================================================================================//
//==========================================================================================================================================//
// Iterating Through objects

let obj = {name: "Rose", cats: 4};

for (let key in obj) {
   console.log(key);
};
// prints out
// name
// cats
//=========================================================================================================================================//
// if you want to access the values on the keys
for (ley; key in obj;) {
}

// prints out
// name
// cats
