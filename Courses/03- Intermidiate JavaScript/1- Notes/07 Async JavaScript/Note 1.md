# Threading 
## Single-threaded vs multi-threaded execution
In programming, we use the term _thread of execution_ (_thread_ for short) to describe a sequence of commands. A thread consists of well-ordered commands in the same way that a task may consist of multiple steps. For example, the task (thread) of doing laundry may consist of the following steps (commands):
1. open the washing machine door
2. load the washing machine with clothes
3. add some detergent
4. close the washing machine door
5. turn the washing machine on
### Single-threaded
In **single-threaded** execution, only one command can be processed at a time.

Say that a patron at Appetite Academy ordered a three course meal including a salad (appetizer), a burger (main entree), and a pie (dessert). Each dish has its own steps to be made. If the restaurant had a single-threaded kitchen, we might see one chef in the kitchen preparing each dish one after the other. To ensure that the customer receives the dishes in order, the lone chef would likely plate a dish fully before beginning preparation of the next dish. A shortcoming of this single chef kitchen is that the customer may have to wait some time between dishes. On the flip side, only employing one chef is cheap for the restaurant. Having one chef also keeps the kitchen relatively simple; multiple chefs may complicate things. With one chef the restaurant avoids any confusion that can result from "too many cooks in the kitchen."

Similar to having a single chef in the kitchen, **JavaScript is a single-threaded language.** This means at any instance in time during a program, only one command is being executed.
### Multi-threaded
In **multi-threaded** execution, multiple commands can be processed at the same time.

If Appetite Academy had a multi-threaded kitchen, it would be quite a different scene. We might find three different chefs, each working on a different dish. This would likely cut down on the amount of time the customer spends waiting for dishes. This seems like a big enough reason to prefer multi-threading, but it's not without tradeoffs. Employing more chefs would increase costs. Furthermore, the amount of time that is saved may not be as large as we think. If the chefs have to share resources like a single sink or single stove, then they would have to wait for those resources to be freed up before continuing preparation of their respective dishes. Finally, having multiple chefs can increase the complexity inside of the kitchen; the chefs will have to painstakingly communicate and coordinate their actions. If we don't orchestrate our chefs,then they might fight over the stove or mistakenly serve the dishes in the wrong order!

A thread (chef) can still only perform one command at a time, but with many threads we could save some time by performing some steps in parallel across many threads.

## Keeping the thread from unraveling
Now that we've identified JavaScript as a single-threaded language, let's introduce a problem that all single-threaded runtimes must face. If we can only execute a single command at a time, what happens if we are in the process of carrying out a command and an "important" event occurs that we want to handle immediately? For example, if the user of our program presses a key, we would want to handle their input as quickly as possible in order to provide a smooth, snappy experience. The JavaScript runtime's solution to this is quite simple: the user will have to wait. If a command is in progress and some event occurs, the current command will run to full completion before the event is handled. If the current command takes a long time, too bad; you'll have to wait longer. Cue the very frustrating "We're sorry, the page has become unresponsive" message you may be familiar with.

Execute the following snippet to illustrate this behavior:
```jsx
setTimeout(function() {
  console.log("times up!");
}, 1000);

let i = 0;
while (true) {
  i++;
}
```

The above program will hang indefinitely, never printing 'times up!' (press `ctrl/cmd + c` in your terminal to kill the program). Let's break this down. When the program begins, we set a timeout for one second, then enter an infinite loop. While the loop is running, the timer expires, triggering a timeout event. However, JavaScript's policy for handling new events is to only handle the next event _after_ the current command is complete. Since the current command is an infinite loop, the current command will _never_ complete, so the timeout event will _never_ be handled.

