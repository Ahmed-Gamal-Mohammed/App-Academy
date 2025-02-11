const readline = require("readline");

const r1 = readline.createInterface({
    input:  process.stdin,
    output:  process.stdout
});

r1.question("what's up, doc? ", handelResponseOne);

function handelResponseOne(firstAnswer){
    console.log(firstAnswer + " is up.");
    r1.question("What's down, clown? ", handelResponseTwo);
}

function handelResponseTwo(secondAnswer){
    console.log(secondAnswer + " is up.");
    r1.question("What's left, jeff? ", handelResponseThree);
}

function handelResponseThree(ThirdAnswer){
    console.log(ThirdAnswer + " is left.");
    r1.close();
}
