const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ask question one
// r1.question("What's up, docs? ", firstAnswer =>{
//     console.log(firstAnswer + " is up.");
// });


// // ask question two
// r1.question("What's down, clown? ", secondAnswer =>{
//     console.log(secondAnswer, " is down");
//     r1.close();
// });

// // The code above is broken and will never ask the second question. Like you can probably guess, this is because the question method is asynchronous.

// To make it run perfect
// ask question one
rl.question("What's up, doc? ", firstAnswer => {
    console.log(firstAnswer + " is up.");

    // only after the user responds to question one, then ask question two
    rl.question("What's down, clown? ", secondAnswer => {
      console.log(secondAnswer + " is down.");
      rl.close();
    });
});
