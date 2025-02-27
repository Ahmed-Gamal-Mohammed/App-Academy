JavaScript comes with [built-in errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) that are thrown whenever your code violates certain conditions. You can throw these errors in your own functions, or even create your own to alert users when they are using your code incorrectly. You can also "catch" errors that you expect to be handled gracefully without a system crash.

## JavaScript Errors
In JavaScript the `Error` constructor function is responsible for creating different instances of `Error` objects
The `Error` object is how JavaScript deals with runtime errors and the type of error created and thrown will attempt to communicate why that error occurred 
### Creating your own errors
Since the `Error` constructor is just a constructor function we can use it to create new `Error` object instances with the following syntax:
```node.js
new Error([message[, fileName[, lineNumber]]])
```
As seen above you can optionally supply a `message` , `fileName` and `lineNumber` where the error occurred 
The `Error` constructor is also somewhat unique in that you can call it with or without the `new` keyword and it will return a new `Error` object
```node.js
const first = new Error("Iam Error);
const second = Error("Iam, too , Error");

console.log(first); // Iam Error
console.log(second); // Iam, too , Error 
```
Let's take a look at what we can do with our newly created Error object 
### Throwing your own errors
Using the keyword `throw` you can throw your own runtime errors that will stop program execution.

Let's take a look at the syntax for `throw`:
```node.js
function giveMeNumber(num) {
  if (typeof num !== "number") {
    throw new Error("Give me a number!");
  } else {
    return "yay number!";
  }
}

console.log(giveMeNumber(1)); // prints "yay number!";
console.log(giveMeNumber("apple")); // Uncaught Error: Give me a number!
console.log(giveMeNumber(1)); // doesn't get run
```

Now as we can see in the above example throwing an error is a powerful tool that stops program execution. If we wanted to throw an error _without_ stopping program execution we can use a `try...catch` block.

Let's look at the syntax for using the `try...catch` block syntax:
```node.js
try {
  // statements that will be attempted to here
} catch (error) {
  // if an error is thrown it will be "caught"
  // allowing the program to continue execution
  // these statements will be run and the program will continue!
}
```

We normally use `try...catch` blocks with functions that might throw an error. Let's look at an example where an error _will not_ be thrown:

```node.js
function safeDivide(a, b) {
  if (b === 0) {
    throw new Error("cannot divide by zero");
  } else {
    return a / b;
  }
}

try {
  console.log(safeDivide(30, 5)); // prints 6
} catch (error) {
  console.error(error.name + ": " + error.message);
}

console.log("hello"); // prints hello
```
**Note**: We can use `console.error` instead of `console.log` to make logged errors more noticeable.

Those are the basics of creating and throwing your own errors. You can `throw` your newly created `Error` to stop program execution or use a `try...catch` block to catch your error and continue running your code

### Catching known errors
You can combine `try...catch` with JavaScript's built-in errors to catch specific types of errors using `instanceof`:

**Important!** One thing to note about Syntax Errors is that many of them can't be caught using `try` `catch` blocks.

For instance, the following code will throw a `SyntaxError` and no matter how hard you try, you can't catch it.
```node.js
try {
    if (true { // throws "SyntaxError: Unexpected token '{'"
        console.log("SyntaxErrors are the worst!");
    }
} catch (e) {
    console.log(e);
}
```
The missing parenthesis after `true` will throw a `SyntaxError` but can't be caught by the `catch` block.

This is because this kind of `SyntaxError` happens at _compile time_ not _run time_. Any errors that happen at _compile time_ can't be caught using `try` `catch` blocks.

## finally
It turns out that you can have one more block on the _try-catch block_. It is the **finally block**. The _finally block_ runs whether or not an error occurs. It _always_ runs.
```node.js
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
```

Try running `trySafeDivide` with 1 and 0. The code in the `finally` block will run no matter what, even though the function returns in the `catch` block.
## How do I best use this?

At this point, you may be asking yourself, "Self, since errors can occur everywhere, shouldn't I just wrap _all_ of my code in these _try-catch blocks_?"

No. No, you shouldn't.

Every **try-catch block** introduces another slow-down in your code. If you're writing code that you want to run as fast as possible, then you write as few _try-catch blocks_ as possible. Also, it makes the code pretty cluttered with all of the indentation and curly braces. When at all possible, you should write **defensive code** which checks for bad values before errors get thrown in your code.

Error messages are not your enemy! Like a good editor, error messages tell you exactly where the flaws in your code are and in many cases, how to fix them. Code that fails silently is likely to sneak into production and cause hidden problems that are hard to find.

Learning to read error messages will help you write better code and debug much faster