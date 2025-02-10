# Intro to Asynchronous JS
## Synchronous vs asynchronous code
### Synchronous
If code is **synchronous**, that means that there is an inherent order among the commands and this order of execution is _guaranteed_.
Here is a simple example of synchronous code:
```jsx
console.log("one");
console.log("two");
console.log("three");
```
This seems trivial, but it is important to recognize. It is guaranteed that 'one' will be printed before 'two' and 'two' will be printed before 'three'. Taking this a step further, you also know that the order of execution may not always simply be the positional order of the lines in the code:
```jsx
let foo = function() {
  console.log("two");
};

console.log("one");
foo();
console.log("three");
```
Although the command `console.log("two")` appears before `console.log("one")` in terms of the line numbers of the script, we know that this code will still print 'one', 'two', 'three' because we understand the rules of JavaScript evaluation. Although the execution may jump around to different line numbers as we call and return from functions, the above code is still synchronous. The above code is synchronous because we can predict with total certainty the relative order of the print statements.
### Asynchronous
If code is **asynchronous**, that means that there is no guarantee in the total order that commands are executed. Asynchronous is the opposite of synchronous.

Since this is our first encounter with asynchronicity, we'll need to introduce a new function to illustrate this behavior. The [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) method will execute a callback after a given amount of time. We can pass a callback and an amount of time in milliseconds as arguments to the method:

```jsx
setTimeout(function() {
  console.log("time is up!");
}, 1500);
```
If we execute the above code, 'time is up!' will print after about one and a half seconds. Paste the above code to a `.js` file and execute it to see this behavior for yourself!

Let's add some other print statements into the mix:
```jsx
console.log("start");

setTimeout(function() {
  console.log("time is up!");
}, 1500);

console.log("end");
```
If we execute the above snippet, we will see the output in this order inside of our terminal:
```jsx
start
end
time is up!
```

Surprised? Although we call the function `setTimeout`, it does not block execution of the lines after it (like `console.log("end")`). That is, while the timer ticks down for the `setTimeout` we will continue to execute other code. This is because `setTimeout` is **asynchronous**!

#### Can't believe it's async?
The healthy skeptic may notice that we defined the term _asynchronous_ code as code where there is no guaranteed order among its commands - but, couldn't we just specify timeout periods such that we _could_ orchestrate some order to the code? The skeptic may write the following code arguing that we can predict a print order of 'first' then 'last':
```jsx
setTimeout(function() {
  console.log("last");
}, 3000);

setTimeout(function() {
  console.log("first");
}, 1000);
```
Surely if we wait 3 seconds for 'last' and only 1 second for 'first', then we'll see 'first' then 'last', right? By providing sufficiently large timeout periods, hasn't the skeptic proven `setTimeout` to be synchronous?

The answer is a resounding **no; we cannot treat `setTimeout` as synchronous under any circumstance**. The reason is that the time period specified to `setTimeout` is not exact, rather it is the _minimum_ amount of time that will elapse before executing the callback (cue the title of this article). If we set a timeout with 3 seconds, then we could wait 3 seconds, or 3.5 seconds, or even 10 seconds before the callback is invoked. If there is no guaranteed timing, then it is asynchronous. The following snippet illustrates this concept succinctly:

```jsx
console.log("first");

setTimeout(function() {
  console.log("second");
}, 0);

console.log("third");
```
This would print the following order:
```jsx
first
third
second
```
Although we specify a delay of 0 milliseconds, the callback is not invoked immediately, because the actual delay may be more than 0. This unintuitive behavior is well known, in fact there is a [full section in the docs for setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Reasons_for_delays_longer_than_specified) devoted to this nuance. The reasons for this discrepancy are not important for now. However, do take away the fact that `setTimeout` is indeed asynchronous, no matter how hard we try to fight it.

> [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) is just one example of asynchronous behavior. Another asynchronous function is
>  [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval), which will continually execute a callback after a number of milliseconds, repeatedly.

## Why do we need asynchronous code?
We know how you are feeling. Asynchronous code seems intimidating. Before this article, you've written exclusively synchronous code and have gotten quite far using just that - so why do we need asynchronous code? The truth of the matter is that the environment in which we run our applications is full of uncertainty; there is seldom a guarantee of when actions occur, how long they will take, or even if they will happen at all. A software engineer can write the code, but they can't write the circumstances in which their code will run (we can dream). Here are a few practical scenarios where asynchronous code is a necessity:
- When we request data from an external server over a network, we cannot predict when we will get receive a response back. The timing is susceptible to latency due to the amount of traffic on the network, the server being busy handling other requests, and much more.
- When we expect a user to interact with our programs by hitting a key, clicking a button, or scrolling down the page, we can never be certain when they will perform those actions.


- When we request data from an external server over a network, we cannot predict when we will get receive a response back. The timing is susceptible to latency due to the amount of traffic on the network, the server being busy handling other requests, and much more.
- When we expect a user to interact with our programs by hitting a key, clicking a button, or scrolling down the page, we can never be certain when they will perform those actions.