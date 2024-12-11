// Iterating Through objects

let obj = {name: "Rose", cats: 4};

// for (let key in obj) {
//    console.log(key);
// }

// prints out keys not values in the keys
// name the cats


// for (let key in obj) {
//     let value = obj[key];
//     console.log(value);
// }
// prints out values in the keys
// Rose .... 4

//===========================================================================================================================================//
// why you can not use dot notation to access values in the key
// the following loop prints undefined twice why?
// because its consider that currentKey is accutlly name of one keys in the object, but its not true so its prints out undefined
// for (let currentKey in obj) {
//     //let value = obj[key];
//     console.log(obj.currentKey);
// }

//===========================================================================================================================================//
//===========================================================================================================================================//
// methods is just a key-value pair where the key is the function name and the value is the function definition

let dog = {name: "Fido"};

// defining a new key-value pair where the *function name* is the key
// the function itself is the value

dog.bark = function(){  return("bark bark!!");  };

// this is the same thing as above just using Bracket Notation

dog["speak"] = function(string){  return("WOOF " + string + " WOOF!!!");  };

console.log(dog.bark());
console.log(dog.speak("pizza"));

// We can give object methods when initiaize them:
let dogs = {
    name: "Rover",

    bark: function(){
        console.log("bork bork!");
    },

    speak: function(string){
        console.log("BOOORK " + string + " BOOOORK!!!");
    }
};

dogs.bark();
dogs.speak("burrito");


// this for printing all values in the object
console.log(Object.values(dogs));

// // this for printing all keys in the object
console.log(Object.keys(dogs));

// this for printing all keys with its values in the object
console.log(Object.entries(dogs));
