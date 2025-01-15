// normal initalization for an object
let dog = {};

// you can assign and access the keys inside the object using dot notation
dog.bark = "Bowowowowowo";
console.log(dog.bark); // ==> print out Bowowowowowo
console.log(dog); // ==> print out {bark: "Bowowowowowo"}


// dot notation can not access and assgining  keys that start with number like 1key
// object.1key ===> it's not work

// while object["1key"]; work
// object["1key"] = 32; // also work
//=========================================================================================================================================


let myDog = {};
myDog.name = "Fido";

// let's use a variable as our key and some bracket notation:
let myKey = "name";
console.log(myDog); // print out {name: "Fido"};
console.log(myDog[myKey]); // print out Fido

// what if we try to use the variable in dot notation
// the below is interpreted as myDog["myKey"]
console.log(myDog.myKey); // prints undefind
// the above prints undefined because it consider that myKey is already a key of the object not its value is the key
