# The Message Queue and Event Loop
## The event loop
JavaScript uses an **event loop** model of execution. We've previously been introduced to one component of the event loop, the _call stack_. We identified the call stack as the structure used to keep track of the execution of function calls. Think of the call stack as keeping track of the current "task" in progress. To clarify, a single task may consist of multiple function calls. For example if a function `foo` calls function `bar` and `bar` calls function `baz`, then we consider all three functions as making progress toward the same task.

Along with the call stack, the event loop also consists of a **message queue**.  **the call stack tracks the task that is currently in progress**,`the message queue keeps track of tasks that cannot be executed at this moment`, but will be executed once the current task is finished (recall that tasks can only be performed one at a time because JavaScript is single-threaded). Because of this, you may hear JavaScript's execution pattern referred to as "run to completion". That is, the execution of an ongoing task will never be interrupted by another task.

### The message queue
The message queue is a structure used to track the handling of events. It uses the **queue** data structure. A "queue" is a general pattern of organizing a collection of things. A real world example of a queue is the line that you wait on for checkout at a grocery store. A queue has a front and back, and obeys the following pattern:

- new items are added to the back of queue - we refer to this as **enqueueing** an item
- items can only leave through the front of the queue - we refer to this as **dequeueing** an item

Events in JavaScript are handled asynchronously with callbacks. Like always, the events can be things such as a `setTimeout` expiring or the user clicking a button. The items stored on the message queue correspond to events that have occurred but have not yet been processed. The items stored on the queue are referred to as "messages".

To illustrate how the message queue and call stack interact, we'll trace the runtime of the following program:
```jsx
function somethingSlow() {
  // some terribly slow implementation
  // assume that this function takes 4000 milliseconds to return
}

function foo() {
  console.log("food");
}

function bar() {
  console.log("bark");
  baz();
}

function baz() {
  console.log("bazaar");
}

setTimeout(foo, 1500);
setTimeout(bar, 1000);
somethingSlow();
```
