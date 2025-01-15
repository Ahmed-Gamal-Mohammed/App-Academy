// Destructuring objects into variables

let obj = {name: "Apples", bread: ["tabby", "Short hair"]};

// take care that you should define this variable inside the two curly brackets as objects, and should include the same name now
let {name, bread} = obj;
console.log(name);
console.log(bread);


// What if you want to put diff names ..... Use the following syntax

let objs = {Apple: "red", banana:"yellow"};

let {Apple: newApple, banana: newbanana} = objs;
console.log(newApple, "     " , newbanana);


// what if nested objects?
let user = {
    userId: 1,
    favoriteAnimal: "hippo",
    fullName: {
      fname: "Rose",
      lname: "K"
    }
};

// accessing values *with* destructuring
let {
    userId,
    fullName: { fname, lname }
} = user;

console.log(userId, fname, lname); // prints out:
// 1 "Rose" "K"
