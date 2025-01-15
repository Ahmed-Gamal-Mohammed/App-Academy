// Utilizing Rest Paramenter
// JavaScript as we know can accept more parameters
// To use rest parameter you use ... then the name of the array
// the argument will be contained within
function tester(... restOfArg){
    // ...
}


function logArguments(...allArguments){
    console.log(allArguments); // Will print all paramters all in array
}

logArguments("apple",24,24213);  // [ 'apple', 24, 24213 ]

function adder(num1, ...othernums){
    console.log("This First number is: ", + num1);
    console.log("This is other nums: ", othernums);


    let sum = num1;

    // Captures all other arguments into an array and adds them to our sum
    othernums.forEach(function(num){
        //  انت بتعدي علي كل عنصى في الارراي وبتجمعه
        sum += num;
    });

    console.log("The Sum is: ", + sum);
}

adder(43, 23, 42 ,1);


// ======================================================================================================================================//
// =============================================    Utilizing Spread Syntax    ==========================================================//
// ======================================================================================================================================//

let numArray = [1,2,3];

// here we are taking numArray and *spreading* it into a new array

let moreNums = [...numArray, 4,5,6];

console.log(moreNums); // [1,2,3,4,5,6]
// previosly we use concat method to spread values

// We can also spread Objects
let colors = {red: "Scarlet", blue: "awuamarine"};
let newColor = {...colors};

console.log(colors);  // {red: "Scarlet", blue: "awuamarine"}
console.log(newColor); // {red: "Scarlet", blue: "awuamarine"}

let colors2 = {green: "forset", yellow:"sunflower"};

let moreColor = {...colors,...colors2};

console.log(moreColor); // {red: "Scarlet", blue: "awuamarine", green: "forset", yellow:"sunflower" }


// Spreading Arguments
function speak(verb, noun){
    console.log("I Like to go " + verb + " With " + noun + ".");
}

const words = ["Running", "Ahmed"];
speak(...words);
