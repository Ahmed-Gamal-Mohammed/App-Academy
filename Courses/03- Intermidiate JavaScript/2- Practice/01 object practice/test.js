// let car = {};
// // console.log(car);

// car["color"] = "Black";
// car["Seats"] = 10;
// car["weight"] = "500kg";

// // console.log(car);
// // Using undefined is an olf method in js to check if the key found in an object

// // console.log(car["ndn"] == undefined);

// if(car["sns"] == undefined){
//     // console.log("This is underfiende value");
// }

// // Using in instead of undefined is the modern syntax in the JS
// if(!("candfn" in car)){
//     //console.log("This is not find value");
// }

// // Using variable as Keys

// let newVariable = "color";

// // console.log(car[newVariable]);

// newVariable = "type";
// console.log(car[newVariable]);

// car[newVariable] = "BMW";

// console.log(car);

// // Using Dot Notation to access the keys in the object
// // console.log(car.color);

// car.whole = 4;
// console.log(car);

// let myDog = {
//     name: "Fido",
//     type: "Doge",
//     age: 2,
//     favToyes:["bone", "ball"]
// };
// // console.log(myDog);
// // console.log(myDog.favToyes);

// ===================================================================================================================================//
// =================================================  Iterating Through Objects   ====================================================//
// ===================================================================================================================================//

// let obj = {name: "Rose", cats:4};

// The key we are accessing is assigned to the "currentKey"
// "Variable" on each iteration

// for (let currentKey in obj) {
//     // if u expect that the result will be the value of each currrentKey ==> unfortunetly your expectations is not correct
//     // this will print out names of keys
//     console.log(currentKey);

//     // if you want to access the value for each key so you should do it by yourself
//      let value = obj[currentKey];
//      console.log(value);
//    // console.log(obj[currentKey])

//    // We can not use Dot Notation here because the currentKey is consider as variable and we known that dot notatoin can not use the external
//    // variable... it's dealed with it as exists key, so it returns undefined
// }


// ===================================================================================================================================//
    // =================================================  Method Vs function   ====================================================//
// ===================================================================================================================================//
let dog = {
    name : "Fido"
};

// defining a new key-value pair where the *function name* is the key
// The function itself is the value

dog.bark = function(){    console.log("bark! bark!");   };

dog["speak"] = function(string){   console.log("WOOF " + string + " WOOF!!!");  }

// dog.bark();    // print out bark bark
// dog.speak("Pizza"); // print out    WOOF pizza WOOF!!!


// we can give objects methods when we initialize them:

let dog2 = {
    name : "Rover",
    bark : function(){
        console.log("bork bork bork");
    },
    speak : function(string){
        console.log("WOOF " + string + " WOOF!!!");
    }
};

// dog2.bark();
// dog2.speak("ADGNIGNENPWDNWPODM");

// ===================================================================================================================================//
// =================================================  Useful Object Methods  =========================================================//
// ===================================================================================================================================//

// 1- Object.Keys(obj's name); ====> print the name of keys in this object

// 2- Object.values(obj's name); ====> print the value of each key in this object

// 3- Object.entries(obj's name); ====> print the name of keys in this object with its value


let cat = {name : "Bibo", age: 4, color: "babyblue"};

console.log(Object.keys(cat));   // print out the name of keys

console.log(Object.values(cat)); // print out the value for each key

console.log(Object.entries(cat)); // print out the name of key with its value
