/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

// This using for - in loop
function valuesInObject(obj) {
  // Your code here

  let arr = [];
  for (const key in obj) {
    let value = obj[key];
    arr.push(value);
  }

  return arr;
}


// This using Object.keys()
function valuesInObject2(obj) {
  // Your code here
  return Object.values(obj);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
module.exports = valuesInObject2;
