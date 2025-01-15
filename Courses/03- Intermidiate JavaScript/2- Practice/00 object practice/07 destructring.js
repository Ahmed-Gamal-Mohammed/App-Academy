// Destructuring data into variables
let numArray = [10,20];

let[firstE1, secondE2] = numArray;
console.log("This first Element is: ",firstE1,"\nThe Second one is: ", secondE2);

// We can alternatively declare our variables before destructuring as well
let animalArray = ["tiger", "hippo"];

let animal1, animal2;

[animal1,animal2] = animalArray;
console.log("\nThis first Animal is: ",animal1,"\nThe Second one is: ", animal2);


// You can swap variable using destructuring
let num1 = 50;
let num2 = 100;
console.log("Num1 value is: ", num1, "\nNum2 value is: ",num2);

[num1,num2] = [num2,num1];
console.log("\nNum1 value is: ", num1, "\nNum2 value is: ",num2);


//
