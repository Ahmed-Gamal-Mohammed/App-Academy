// You can use the variable as keys
let car = {color: "Black", seats: 5};
console.log(car);

let newVariable = "color";
console.log(newVariable); // ===> it will print out color because the value of newVariable now is string named color

console.log(car[newVariable]); // ==> print out black (because the value of newVariable is color and color is a key which its value is balck)

// what if we change the value of newVariable to weight and try to access newVariable in car
newVariable = "weight";
console.log(newVariable); // print out weight
console.log(car[newVariable]);// ==> print out undefind because newVariable's value now is weight and weight not in the object

// for make it can be accessed you need to assgin the value of newVariable in the car object
car[newVariable] = 3242;
// now if you try to access the newVarible you will get the value of weight key
console.log(car[newVariable]); // ==> print out 3242

// if you print out all keys and its values now you will get the follwoing  { color: 'Black', seats: 5, weight: 3242 }
console.log(car);
