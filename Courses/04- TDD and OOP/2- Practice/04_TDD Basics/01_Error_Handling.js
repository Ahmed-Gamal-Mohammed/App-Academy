// Create your own error
const first_error = new Error("Iam first error");
// you can create it without using new keyword
const second_error = Error("Iam the second error");


// Throwing your own errors
function giveNumber(num){
    if (typeof num !== "number") {
        throw new Error("Give me a number!");
    } else {
        console.log("Yey number");
    }

}


giveNumber(1);
//giveNumber("Apple"); // cause an Error


// try and catch
function saveDivde(num1,num2){
    if (num2 === 0) {
        throw new Error("cannot divide by zero");
      } else {
        return num1 / num2;
    }
}

try {
    console.log(saveDivde(30,0)); // prints 6

} catch (error) {
    console.error(error.name + ": " + error.message);
}

// The above way to handel the Error make the program continue normally
console.log("Hello");





function callThatArg(arg) {
    arg(); // this will cause a TypeError because callThatArg is being passed a number
  }

  try {
    callThatArg(42);
    console.log("call successful"); // this line never executes
  } catch (error) {
    if (error instanceof TypeError) {
      console.error(`Wrong Type: ${error.message}`); // prints: Wrong Type: arg is not a function
    } else {
      console.error(error.message); // prints out any errors that aren't TypeErrors;
    }
  }

  console.log("done"); // prints: done



function trySafeDivide(n) {
    try {
        console.log(safeDivide(30, n));
    } catch (error) {
        console.error(error.name + ": " + error.message); // Error: cannot divide by zero
        return;
    } finally {
        console.log("This will always run");
    }
}
trySafeDivide(1);
trySafeDivide(0);
