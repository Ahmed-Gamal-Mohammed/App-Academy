// initialize an object
let car = {};
console.log(car); // ===> empty one

//=========================================================================================================================================

// setting keys and values
// bracket notation
// ===> Take in your mind that the keys must be string ===>  value can be any type
car["color"] = "black";
car["seats"] = 5;
//=========================================================================================================================================

// accessing keys and values using bracket notation
console.log(car["color"]); // ==> print out the value of color
console.log(car["seats"]);
console.log(car);

//=========================================================================================================================================
// if you try to access not found key ==> undefind is the output
console.log(car["Weight"]); // ====> print out undefied

//=========================================================================================================================================

// you can use undefind in checking if there is some keys in the object or not
console.log(car["color"] == undefined); // ==> print out false ==>  because the color exist key in the car object
console.log(car["weight"] == undefined); //==> print out true

//=========================================================================================================================================

// also in the modern js you can use (in) instead of (== undefind) to check if key in the object or not
console.log("color" in car); // ==> print out true
console.log("weight" in  car); // ===> print out false
