let secretNumber = 1;
let numAttempts = 5;
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// return a randome number between the min and max (max inclusive)
function randomInRange(min, max){
    // make the min value to ceil , to be decimal number
    const minCeiled = Math.ceil(min);
    // make the max value to floor , to be decimal number
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// This is the main function
// This function ask range from the user.. and call other function inside it
function askRange(){
    rl.question("Enter a max number: ", max_number => {
        let max_num = Number(max_number);
        rl.question("Enter a min number: ", min_number => {
            let min_num = Number(min_number);

            if (isNaN(min_num) || isNaN(max_num)) {
                console.log("Invalid input. Please enter numeric values.");
                askRange();
                return;
            }

            if (min_num > max_num) {
                console.log("Minimum number cannot be greater than the maximum number. Try again.");
                askRange();
                return;
            }

            console.log(`I am thinking of a number between ${min_num} and ${max_num}...`);
            secretNumber = randomInRange(min_num, max_num);
            askGuess();

        });
    });
}

// This function for check if Guess is true or false
function checkGuess(number){
    number = Number(number);
    if(number > secretNumber){
        console.log("Too high.");
        return false;
    }else if(number < secretNumber){
        console.log("Too Low.");
        return false;
    }else{
        console.log("Correct!");
        return true;
    }
}

// This function for asking user for guess
// if the guess isn't true, will ask user till guess the correct answer
function askGuess() {
    rl.question("Enter a guess: ", (guess) => {
      guess = Number(guess);
      if (isNaN(guess)) {
        console.log("Invalid input. Please enter a number.");
        askGuess();
        return;
      }
      const isCorrect = checkGuess(guess);
      if (isCorrect) {
        console.log("YOU WON!");
        rl.close();
      } else {
        numAttempts--;
        if (numAttempts === 0) {
          console.log("You Lose.");
          rl.close();
        } else {
          askGuess(); // Ask again if attempts remain
        }
      }
    });
}

function askLimit() {
    rl.question("Enter the number of attempts: ", (attempts) => {
      numAttempts = Number(attempts);
      askRange(); // Proceed to ask for range
    });
}
function start_Game(){
    askLimit();
}

start_Game();
