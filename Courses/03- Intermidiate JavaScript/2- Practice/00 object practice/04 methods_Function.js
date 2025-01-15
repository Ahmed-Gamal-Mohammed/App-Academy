let dog = {
    name : "Fido"
};

// defining a new key-value pair where the *function name* is the key
// the function itself is the value
dog.bark = function(){
   return "bark! bark!";
};

// This is the same thing as above just using bracket notation
dog["speack"] = function(string){
    console.log("WOOF " + string + "WOOF!!!");
};
let temp = dog.bark();
console.log(temp);
dog.speack("Pizza");


// aditionally we can give objects methods when we initalize them
let dog2 = {
    name : "Rover",
    bark: function(){
        return "bark! bark!"
    },
    speack: function(string){
        console.log("WOOF " + string + "WOOF!!!");
    }
};

let doo = dog2.bark();
console.log(doo);
