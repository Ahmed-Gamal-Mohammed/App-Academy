One way of measuring your code's efficiency is to run a function and time how long it takes to complete. You can use these results to benchmark the relative performance of your function with various inputs.
## Computer Safety
As a result of pushing your computer's limits, you _should_ run into situations where you cross past those limits. Don't worry! JavaScript is pretty safe. You won't do any damage to your computer by playing with code.
### ctrl + c: Halt code execution
What do you do if your code is running way too long? Maybe you have an infinite loop, or your numbers are just way too big. At any time, you can halt code execution by typing `ctrl + c`.

Start by opening a Node console by typing `node` into your terminal. Try writing some code that will take a long time to run. For example, try running a for-loop from 0 to 1 trillion.
```node.js
for (let n = 0 ; n <= 1000000000000 ; n++) {
  // Do nothing
}
```
As this runs, your terminal will halt, preventing new commands from being issued. This can be a problem. Fortunately, you can hit `ctrl + c` at any time to exit out of any program currently executing in the terminal. This works in almost any command-line program. `ctrl + c` is your safety net.

In case `ctrl + c` does not work, you should also be able to force quit out of the terminal.
### Memory crashes
Modern computers are pretty good at isolating processes so it's rare to crash your computer from writing code

For example, try opening Node and adding 1 trillion integers to an array and see what happens.
```node.js
let arr = [];
for (let n = 0 ; n <= 1000000000000 ; n++) {
  arr.push(n);
}
```
You should see an error like `FATAL ERROR: invalid array length Allocation failed - JavaScript heap out of memory`. FATAL ERROR sounds bad but all it means is that the program ran out of memory so it killed the process. There is no harm to your actual computer.
### Danger: Modifying your filesystem
One area where you can actually do serious damage to your computer is by modifying your filesystem. This includes creating or deleting important files on your hard drive, or downloading malicious software from the internet.

Be aware of what download, don't blindly copy/paste from Stack Overflow without understanding what you are doing and be EXTRA careful when deleting system files, particularly from the command line.
## Timing your code
Say you have written a function, `addNums(n)` that adds up every positive integer from 1 to n.
```node.js
function addNums(n) {
  total = 0;
  for (let i = 1 ; i <= n ; i++) {
    total += i;
  }
  return total;
}
```
How long does this function take to run? It depends on the value of `n`. You will learn two JavaScript methods, `console.time()` and `Date.now()` to find out.
### `console.time()`
[console.time()](https://developer.mozilla.org/en-US/docs/Web/API/Console/time) is a built-in function for measuring how long an operation takes. Open up a node terminal and type `console.time("Timer 1")` to start the timer. Wait a few seconds and type `console.timeLog("Timer 1")` to see how many seconds have elapsed. You can log multiple times, then type `console.timeEnd("Timer 1")` to stop.

```node.js
console.time("Timer 1");

// wait a few seconds

console.timeLog("Timer 1");  // Timer 1: 5.446s

// Wait a bit more

console.timeEnd("Timer 1");  // Timer 1: 10.069s
```
This is a very clean way to get timing benchmarks. You can use this to calculate the runtime of your code. Let's see how long it takes to add up all numbers from one to one million.
```node.js
console.time("addNums");
addNums(1000000);
console.timeEnd("addNums");
```

While `console.time` is convenient for quick tests, the label and the time unit at the end make the data difficult to chart on a graph. Next, you will learn another way to track timing data, which can be easily charted in Google Sheets.
### `Date.now()`
Type `Date.now()` into a Node terminal and you will receive a large integer. This number represents the number of milliseconds (1/1000th of a second) since the morning of January 1st, 1970, a time also known as the Unix Epoch.

You can use this function to calculate the runtime of your code by storing the start time, running your code, then taking the difference of the end and start times. Let's see how many milliseconds it takes to add up all numbers from one to one million:
```node.js
startTime = Date.now();
addNums(1000000);
endTime = Date.now();

console.log(startTime);  // 1608078573750
console.log(endTime);    // 1608078573765
```
Taking the difference between the end and start times will tell you how long the code took to run.
```node.js
console.log(`Runtime: ${endTime - startTime}ms`);  // Runtime: 15ms
```

At 15 milliseconds, this function will appear to return instantly. For comparison, movie frames update every 42ms (24 frames per second) while high-end video games update every 17ms (60 frames per second). In that brief moment, the computer was able to perform one million addition operations. Not bad!
## Visualizing performance
It can help to visualize your code's performance on a graph. You can do this using Google Sheets.

```node.js
let increment = 1000000;
for (let n = increment ; n <= 10 * increment ; n += increment) {
  startTime = Date.now();
  addNums(n);
  endTime = Date.now();

  console.log(`${endTime - startTime}`);
}
```

This code will run `addNums` 10 times, in increments of 1 million. Running this code will print out the time, in milliseconds, it takes to add nums 1 through 1 million, 2 million, 3 million, etc.
```terminal
20
28
32
35
44
51
60
68
80
90
```

Copy/paste these values into a Google Sheet, highlight them, then click the `Insert` menu and select `Chart` to display a graph of the runtimes.
