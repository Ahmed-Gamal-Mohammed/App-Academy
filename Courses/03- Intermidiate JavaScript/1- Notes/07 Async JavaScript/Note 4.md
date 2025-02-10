# Timeouts and Intervals
## Time-out! What are the arguments?
In it's most basic usage, the [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) function accepts a callback and an amount of time in milliseconds. Open a new `.js` file and execute the following code:

```jsx
function foo() {
  console.log("food");
}

setTimeout(foo, 2000);
```
The code above will print out 'food' after waiting about two seconds. We previously explored this behavior, but it's worth reemphasizing. `setTimeout` is asynchronous, so any commands that come after the `setTimeout` may be executed before the callback is called:

```jsx
function foo() {
  console.log("food");
}

setTimeout(foo, 2000);
console.log("drink");
```
The code above will print out 'drink' first and then 'food'. You may hear asynchronous functions like `setTimeout` referred to as "non-blocking" because they don't prevent the code that follows their invocation from running. It's also worth mentioning that the time amount argument for `setTimeout` is optional. If no amount is specified, then the amount will default to zero (`setTimeout(foo)` is equivalent to `setTimeout(foo, 0`). Embellishing on this thought for a moment, a common JavaScript developer interview question asks candidates to predict the print order of the following code:
```jsx
function foo() {
  console.log("food");
}

setTimeout(foo, 0);
console.log("drink");
```

The code above will will print out 'drink' first and then 'food'. This is because `setTimeout` is asynchronous so it will not block execution of further lines. We have also previously mentioned that the amount specified is the minimum amount of time that will be waited, [sometimes the delay will be longer](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Reasons_for_delays_longer_than_specified).

In addition to the callback and delay amount, an unlimited number of additional arguments may be provided. After the delay, the callback will be called with those provided arguments:
```jsx
function foo(food1, food2) {
  console.log(food1 + " for breakfast");
  console.log(food2 + " for lunch");
}

setTimeout(foo, 2000, "pancakes", "couscous");
```
The code above will print the following after about two seconds:
```jsx
pancakes for breakfast
couscous for lunch
```
## Cancelling timeouts
You now have complete knowledge of all possible arguments we can use for `setTimeout`, but what does it return? If we executing the following snippet in node:
```jsx
function foo() {
  console.log("food");
}

const val = setTimeout(foo, 2000);
console.log(val);
```
We'll see that the return value of `setTimeout` is some special `Timeout` object:
```jsx
Timeout {
  _called: false,
  _idleTimeout: 2000,
  _idlePrev: [TimersList],
  _idleNext: [TimersList],
  _idleStart: 75,
  _onTimeout: [Function: foo],
  _timerArgs: undefined,
  _repeat: null,
  _destroyed: false,
  [Symbol(unrefed)]: false,
  [Symbol(asyncId)]: 5,
  [Symbol(triggerId)]: 1
}
```

You won't be finding this object too useful except for one thing, cancelling an timeout that has yet to expire! We can pass this object into the [clearTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout) function:

```jsx
function foo() {
  console.log("food");
}

const val = setTimeout(foo, 2000);
clearTimeout(val);
```
The code above will not print out anything because the `setTimeout` is cleared before the timer expires.

> You may notice that the MDN documentation for `setTimeout` and `clearTimeout` show that `setTimeout` returns a simple id number that can be used to cancel a pending timeout and not a fancy Timeout object as we have described. This variation is due to the fact that we are executing our code with NodeJS and not in the browser (MDN is specific to the browser environment). Rest assured, in either environment, if you pass the data that is returned from `setTimeout` to `clearTimeout`, the timeout will be cancelled!


## Running Intervals
Similar to `setTimeout`, there also exists a [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) that function that executes a callback repeatedly at the specified delay. `setInterval` accepts the same arguments as `setTimeout`:
```jsx
function foo(food1, food2) {
  console.log(food1 + " and " + food2 + "!");
}

setInterval(foo, 1000, "pancakes", "couscous");
```
The code above will print out 'pancakes and couscous!' every second. Someone's hungry! Like you would expect, there is also a [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval) that we can use to cancel an interval!
