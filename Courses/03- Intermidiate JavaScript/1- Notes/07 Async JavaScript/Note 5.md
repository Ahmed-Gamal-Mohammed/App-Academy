# User Input with Readline
## Node's readline module
To take user input. We'll need to get acquainted with the `readline` model 
```jsx
// Import the readline module into our file 
const readline = require("readline");
```

The `readline` variable is an object that contain all of the methods we can use from the module
```jsx
const readline = require("readline");

// Create an interface where we can talk to the user 

const r1 = readline.createInterface({
	input:  process.stdin,
	output: process.stdout
});
```

The details of what `createInterface` does aren't super-duper important, but here is the short story: it allows us to read and print information from the terminal 


Now that we have the setup out of the way, let's ask the user something!
Referencing the docs, We can use the `question` method on our interface 
```jsx
const readline = require("readline");

const r1 = readline.createInterface({
	input:  process.stdin,
	output: process.stdout
});

r1.question("what's up docs? ", answer => {
	// print their response 
	console.log("You responsed " + answer);

	// close the interface
	// must added to finish the interface, if not added the             interface will not exit 
	r1.close();
})
```

```jsx
// Output
what's up docs? Ahmed
You responsed Ahmed
```

**Notice** `question` method accepts two arguments: a question message to display and a callback 

`r1.close()` => is invoked after the question is answered to close the interface, if we don't close the interface 

Let's emphasize a critical point: the `question` method is asynchronous! Similar to how we illustrated the asynchronous nature of `setTimeout`, let's add a print statement after we call `rl.question`:
```jsx
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's up, doc? ", answer => {
  console.log("you responded: " + answer);
  rl.close();
});

// try to print 'DONE!' after the question
console.log("DONE!");
```
If we respond 'nothing much', the total output would be:

```
What's up, doc? DONE!
nothing much
you responded: nothing much
```
Oops. It looks like the 'DONE!' message was printed out before the user finished entering their response because the `question` method is asynchronous. We'll introduce a pattern for overcoming this issue next.

## Callback Chaining 
In our last example, We saw how the asynchronous behavior of the `question`
method can lead to issues if we want to perform a command directly after the user enters their response. 
The fix for this is trivial (Some would even say "low-tach"). Simply put the command you want to follow at the end of the callback. In other word, the following code guarantees that we print "Done!" after the user enters their response 

```jsx
// this code is a partial snippet from previous example

r1.question("What's up, docs? "), answer => {
	console.log("you responsed: " + answer);

	r1.close();
	console.log("DONE!");
} 

// prints out 

what's up, docs?  ahmed 
you responed: ahmed
DONE!
```
In general, when we want a command to occur directly "after" a callback is invoked asynchronously, we'll really have to place that command inside of the callback. This is a simple pattern, but one that we'll turn to often.

Imagine that we want to ask the user two questions in succession. That is, we want to ask question one, get their response to question one, then ask question two, and finally get their response to question two. The following code will **not** meet this requirement:

```jsx
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask question one
rl.question("What's up, doc? ", firstAnswer => {
  console.log(firstAnswer + " is up.");
});

// ask question two
rl.question("What's down, clown? ", secondAnswer => {
  console.log(secondAnswer + " is down.");
  rl.close();
});
```

The code above is broken and will never ask the second question. Like you can probably guess, this is because the `question` method is asynchronous. Specifically, the first call to `question` will occur and before the user can enter their response, the second call to `question` also occurs. This is bad because our program is still trying to finish the first question. Since we want to ask question two only after the user responds to question one, we'll have to use the pattern from before. That is, we should ask question two within the response callback for question one:

```jsx
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask question one
rl.question("What's up, doc? ", firstAnswer => {
  console.log(firstAnswer + " is up.");

  // only after the user responds to question one, then ask question two
  rl.question("What's down, clown? ", secondAnswer => {
    console.log(secondAnswer + " is down.");
    rl.close();
  });
});
```

If we respond to the questions with 'the sky' and 'the ground', the total output is:

```jsx
What's up, doc? the sky
the sky is up.
What's down, clown? the ground
the ground is down.
```

Nice! The program works as intended. The pattern we utilized is known as _callback chaining_. While callback chaining allows us to perform a series of asynchronous functions one after the other, if we don't manage our code neatly, we can end up with a mess. Extending this pattern to three questions, we can begin to see the awkward, nested structure:

```jsx
// this code is a partial snippet from previous examples

rl.question("What's up, doc? ", firstAnswer => {
  console.log(firstAnswer + " is up.");

  rl.question("What's down, clown? ", secondAnswer => {
    console.log(secondAnswer + " is down.");

    rl.question("What's left, Jeff? ", thirdAnswer => {
      console.log(thirdAnswer + " is left.");
      rl.close();
    });
  });
});
```

This overly nested structure is known colloquially in the JavaScript community as ["callback hell"](http://callbackhell.com/). Don't worry! A way to refactor this type of code for more readability is to use named functions instead of passing anonymous functions. Here is an example of such a refactor:

```jsx
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's up, doc? ", handleResponseOne);

function handleResponseOne(firstAnswer) {
  console.log(firstAnswer + " is up.");
  rl.question("What's down, clown? ", handleResponseTwo);
}

function handleResponseTwo(secondAnswer) {
  console.log(secondAnswer + " is down.");
  rl.question("What's left, Jeff? ", handleResponseThree);
}

function handleResponseThree(thirdAnswer) {
  console.log(thirdAnswer + " is left.");
  rl.close();
}
```

Run the code above to check out our final product! Ah, much better. By using named functions to handle the responses, our code structure appears flatter and easier to read.

Callback chaining is a very common pattern in JavaScript, so get used to it! As a rule of thumb, prefer to use named functions when creating a callback chain longer than two. Later in the course, we'll learn about recent additions to JavaScript that help reduce "callback hell" even further, so stay tuned!