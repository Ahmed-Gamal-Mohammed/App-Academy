// First for take user input ,We'll need to get acquainted with the `readline` model
const readline = require("readline");

// Create an interface where we can talk to the user
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// ask the user a question
r1.question("what's up, docs? ", answer =>{

    // print their response
    console.log("you responsed: " + answer);

    // close the interface
    // if its not added the program will not exit
    r1.close();
});

// try to print 'DONE!' after the question
console.log("Done!");
