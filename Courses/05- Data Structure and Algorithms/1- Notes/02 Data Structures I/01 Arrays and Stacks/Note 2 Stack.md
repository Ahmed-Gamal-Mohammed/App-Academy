Abstraction is everywhere in computer science. Array functions like `shift()` and `splice()` abstract away details like allocating memory, resizing and rearranging elements to a single line of JavaScript code. This allows programmers to ignore underlying complexity and approach code from a higher level.

Stacks are an _abstract data type_ (ADT) that store a collection of data with one simple rule: Last in, first out. Unlike data structures, ADTs have no specific implementation requirements. All that matters in a stack are the order of input and output.
## LIFO: Last in, first out
Imagine you have a stack of plates in a restaurant. Whenever a plate is cleaned and dried, it is placed on top of the stack. Whenever a new plate is needed, the chef will grab the first plate from the top of the stack. The first plate grabbed will always be the last one added to the stack.

Written into code, an implementation of the stack of plates might look something like this:
```node.js
stackOfPlates.addPlate('plate 1')
stackOfPlates.addPlate('plate 2')
stackOfPlates.addPlate('plate 3')

stackOfPlates.getPlate()  // 'plate 3'
stackOfPlates.getPlate()  // 'plate 2'

stackOfPlates.addPlate('plate 4')

stackOfPlates.getPlate()  // 'plate 4'
stackOfPlates.getPlate()  // 'plate 1'

stackOfPlates.getPlate()  // undefined
```
First, three plates are added to the stack: plates 1, 2 and 3. Next two plates are grabbed from the stack. The two last plates added were 2 and 3, so plate 3 and plate 2 are the first two returned. Next, with plate 1 still in the stack another plate, 4, is added. Since plate 4 was last to be added, it's the first returned on the next `getPlate()` call. Finally, the first plate is returned with the last `getPlate()` call. With no more plates on the stack, the final call returns `undefined`.

Not only are the last plates on the stack the first to be returned, the first plate to be added (plate 1) is the last to be returned. You can think of this as either LIFO (last in, first out) or FILO (first in, last out). Both are identical.
## Push and Pop
Computer scientists have adopted the naming convention of _push_ and _pop_ for adding and retrieving items from a stack. You _push_ data onto the top of a stack and _pop_ off the most recently added value. This may give you a hint about the underlying data structure that is usually used to implement this abstract data type.
## Stack Implementation
As you might have guessed from the naming, the stack ADT is usually implemented with an array data structure underneath the hood.
```node.js
class Stack {
    constructor() {
        this.data = [];
    }

    push(value) {
        this.data.push(value);
    }

    pop() {
        return this.data.pop();
    }

    size() {
        return this.data.length;
    }
}
```
Here is a simple JavaScript `Stack` class implementation. Let's try this with the plate example.
```node.js
const stackOfPlates = new Stack();

stackOfPlates.push('plate 1');
stackOfPlates.push('plate 2');
stackOfPlates.push('plate 3');

stackOfPlates.pop();  // 'plate 3'
stackOfPlates.pop();  // 'plate 2'

stackOfPlates.push('plate 4');

stackOfPlates.pop();  // 'plate 4'
stackOfPlates.pop();  // 'plate 1'

stackOfPlates.pop();  // undefined
```
This stack implementation matches the expected behavior defined in the stack ADT specification. In practice, you often don't need to implement a new `Stack` class. It's fine to declare `const stackOfPlates = [];` then push and pop elements on that array. The code runs fine either way.
## Stack Application 
Stacks can be used to implement features like back button on a webpage. You may encounter code like this in the upcoming Express module 
```node.js
function clickLink(newURL) {
    // Store the current URL, then load the new URL
    browserHistory.push(currentURL);
    currentURL = newURL;
    load(currentURL);
}

function clickBack() {
    // Retrieve the most recently visited page and load it
    currentURL = browserHistory.pop();
    load(currentURL);
}
```
## Performance 
The performance of the stack depends on the implementation. For a stack implemented with a dynamic array. The performance will be exactly the same that of a regular dynamic array:`push`,`pop` and `size` all have an average time complexity of **O(1)**. Using a dynamic array implementation, `push` has a worst-case time complexity of **O(n)** due to resizing but this happens relatively infrequently and can be avoided altogether by pre-allocating memory and limiting the size of the stack 

Stacks use n array slots to store n values, so the space complexity of a stack is **O(n)** not only that, but it;s an extremely efficient **O(n)** due to the contiguous nature of arrays 

## Call Stack 
Stack can be also found in code execution 

Code can be thought of as a list of instructions which execute one at a time. As the code runs, the state of each function is stored in a **stack frame** which contains the function's local variables and the state of execution. These frames are stored in LIFO order in a portion of memory called the **call stack**. When a function is executed, its stack frame gets pushed to the top of the call stack and is popped off when it returns. For an example, consider this recursive factorial function:
```node.js
function factorial(n) {
    if (n <= 1) return 1;

    return n * factorial(n - 1);
}
```
Calling `factorial(5)` will return `5 * factorial(4)`, but the function cannot complete until `factorial(4)` is computed.

So, the function pauses and pushes `factorial(4)` to the top of the call stack to be computed next.

`factorial(4)` runs and returns `4 * factorial(3)`, which cannot complete until `factorial(3)` returns.

`factorial(3)` relies on `factorial(2)`, which relies on `factorial(1)`, all of which are pushed on the call stack.

`factorial(1)` hits the recursive _base case_, and can finally return a value. It returns `1` to `factorial(2)` then pops off the call stack.

The next function on top of the stack is now `factorial(2)` which runs and returns the value `2` to `factorial(3)`.

`factorial(3)` can finally return `6` using the return value of `2` from the `factorial(2)` stack. `factorial(3)` is popped off the stack.

Now the return to `factorial(4)` can be calculated based on the `factorial(3)` return value, `24`. `factorial(4)` is popped off the stack, and returns to `factorial(5)`.

Finally `factorial(5)` can return and pop off, after which the call stack is empty and the work is done.

Here's a visual representation of the stack frames being added and removed from the call stack when calling `factorial(5)`:

![Factorial stack frames (pythontutor.com)](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/computer-science/images/StackFramesFactorial.gif)The call stack occupies memory, just like any other data structure. This means that the recursive `factorial()` function has a space complexity of **O(n)**. In fact, _all_ recursive functions have a minimum space complexity of **O(n)** where _n_ is the depth of calls. If the call stack grows too deep, you will encounter a **stack overflow** error. This is easy to test in JavaScript:
```node.js
factorial(100000);  // Uncaught RangeError: Maximum call stack size exceeded
```
If your _n_ is large and space is an issue, it's usually better to use an iterative solution rather than recursion.

```node.js
function factorialIterative(n) {
    let total = 1;

    for (let i = n ; i > 0 ; i--) {
        total *= n;
    }

    return total;
}
```
This `factorialIterative()` contains three constant variables (`n`, `total` and `i`) and occupies a single stack frame. This remains constant for any value of `n` which gives it a space complexity of **O(1)** unlike the recursive `factorial()` which has a space complexity of **O(n)**.

