# Context
Every function that is invoked has **both** a scope and a context associated with that function
_Scope_ refers to the visibility and availability of variables, whereas _context_ refers to the value of the `this` keyword when code is executed
## What about `this`?
- `this` is a special keyword in JavaScript that refers to the object that is currently used or calling a function (method)
- it helps a method know which object it belongs to, so it can access and modify that object's properties 
Example 
```node.js
class Dog {
  constructor(name, isSitting) {
    this.name = name; // 'this' refers to the new Dog object being created
    this.isSitting = isSitting; // 'this' refers to the new Dog object
  }

  stand() {
    this.isSitting = false; // 'this' refers to the dog object calling this method
    return this.isSitting;
  }
}

let dog = new Dog("Bowser", true); // Create a new Dog object

// Bowser starts out sitting
console.log(dog.isSitting); // prints `true`

// Let's make him stand
console.log(dog.stand()); // prints `false`

// He's actually standing now!
console.log(dog.isSitting); // prints `false`
```

Example 2: Testing `this`
```node.js
class Dog{
	test(){
		return this === dog;
	}
}

let dog = new Dog();

console.log(dog.test());  // true 
```

### Summary
- `this` is like a pointer to the object that is currently using the method 
- it helps methods interact with the object they belong to 
- **Always remember**:`this` **refers to the object that calls the methods**


**Context refers to the value of `this` within a function and `this` refers to where a function is invoked**

---
## Issues with Scope and Context 
in the case of context, the value of `this` is determined by how a function is invoked

Let's now talk about what `this` is when using normal function style invocation.

```node.js
function testMe(){
	console.log(this);
}

testMe(); // Object [global] {global: [Circular], etc.}
```

## When methods have an unexpected context 
So let's now look at what happen when you try to invoke a method using an unintended context 

**The problem: unexpected Context**
when you use a method (a function inside an Object) outside of its intended context, JavaScript can get confused about what `this` refers to. This happens when you 
1. **Assign a method to a variable and call it later**
2. **Pass a method as a callback (e.g, to `setTimeout` )**
### Example 1: Assigning a Method to a Variable
```node.js
class Dog {
  constructor(name) {
    this.name = name;
  }

  changeName() {
    this.name = "Layla"; // 'this' should refer to the dog object
  }
}

let dog = new Dog("Bowser");

// Assign the method to a variable (without calling it)
let change = dog.changeName;

// Now call the function
console.log(change()); // TypeError: Cannot set property 'name' of undefined
```
#### What’s happening here?
1. When you assign `dog.changeName` to the variable `change`, you’re only copying the function itself, **not the context** (i.e., the `dog` object).
2. When you call `change()`, JavaScript doesn’t know what `this` refers to. Since there’s no object calling the method, `this` becomes `undefined`.
3. Trying to access `this.name` when `this` is `undefined` causes an error.


- When you write `let change = dog.changeName;`, you’re **not calling the method**. Instead, you’re taking the function itself (the code inside `changeName`) and storing it in the variable `change`.
- This means `change` now holds the function `changeName`, but it’s **separated from the `dog` object**
- What Does This Mean?
	- **`change` is just a function**:
    - It’s no longer "connected" to the `dog` object. It’s just a standalone function.
    - When you call `change()`, JavaScript doesn’t know what `this` should refer to because there’s no object calling it
#### Key Takeaway:
- **Methods need their object context (`this`) to work properly.**
- If you separate a method from its object, `this` loses its meaning.

### Example 2: Using a Method as a Callback
**The problem: Losing Context in Callbacks**
[when you pass a method as a callback (e.g to `setTimeout`), the method loses its connections to the object it belongs to. As a result, `this` no longer refers to the object, and you get an error]

let's say you want to use a method as a callback for `setTimeout` 
```node.js
class Cat {
  purr() {
    console.log("meow");
  }

  purrMore() {
    this.purr(); // 'this' should refer to the cat object
  }
}

let cat = new Cat();

// Pass the method as a callback to setTimeout
global.setTimeout(cat.purrMore, 5000); // 5 seconds later: TypeError
```
#### What’s Happening Here?
1. **`cat.purrMore` is passed as a callback**:
    - When you pass `cat.purrMore` to `setTimeout`, you’re passing the **function itself**, not the context (`cat` object).  
    - `setTimeout` doesn’t know about the `cat` object—it only knows about the function `purrMore`.
2. **`setTimeout` calls the function later**:
    - After 5 seconds, `setTimeout` tries to call `purrMore`.
    - Since `purrMore` is no longer connected to the `cat` object, `this` inside `purrMore` becomes `undefined` (or refers to the global object, depending on the environment).
3. **The error occurs**:
    - Inside `purrMore`, the line `this.purr()` tries to call `purr` on `this`.
    - But `this` is `undefined`, so you get a `TypeError: this.purr is not a function`.
---
#### Key Takeaway:
- **Callbacks lose their original context (`this`).**
- When a method is used as a callback, `this` no longer refers to the object it belongs to.
---
### Why Does This Happen?
- In JavaScript, `this` is determined by **how a function is called**, not where it’s defined.
- If a method is called without its object (e.g., as a standalone function or callback), `this` becomes `undefined` or refers to the global object.
---
## Strictly protecting the global object

### What is **Strict Mode**?
Strict mode is a way to write JavaScript code that enforces stricter rules and prevents certain behaviors that can lead to bugs or accidental issues. It helps make your code safer and more predictable.

To enable strict mode, you simply add the line `"use strict";` at the top of your file or function.

---
### Why Use Strict Mode?
One of the main benefits of strict mode is that it **protects the global object** from accidental changes. Let’s see how this works.

### What is the **Global Object**?

- In JavaScript, the **global object** is the default context for functions and variables that aren’t explicitly tied to a specific object.
- In browsers, the global object is `window`.
- In Node.js, the global object is called `global`.
### Example 1: Accessing the Global Object in Normal Mode

In normal (non-strict) mode, if you call a function without a specific context, `this` refers to the global object.

```node.js
function hello() {
  console.log(this); // 'this' refers to the global object
}

hello(); // Prints the global object (e.g., `global` in Node.js or `window` in browsers)
```
 Here, `this` inside the function refers to the global object because the function isn’t tied to any specific object.
### Example 2: Accessing the Global Object in Strict Mode

In strict mode, if you call a function without a specific context, `this` is `undefined`. This prevents accidental changes to the global object.
```node.js
"use strict"; // Enable strict mode

function hello() {
  console.log(this); // 'this' is undefined
}

hello(); // Prints `undefined`
```
- Here, `this` is `undefined` because strict mode prevents it from defaulting to the global object.
### Why Does This Matter?
- In normal mode, if you accidentally use `this` in a function without a specific context, you might unintentionally modify the global object.
```node.js
function setName() {
  this.name = "Layla"; // Accidentally modifies the global object
}

setName();
console.log(global.name); // "Layla" (oops!)
```
- This is bad because it pollutes the global object, which can lead to bugs and conflicts in your code.

In strict mode, this would throw an error:
```node.js
"use strict";

function setName() {
  this.name = "Layla"; // Error: Cannot set property 'name' of undefined
}

setName(); // Throws an error
```
### Key Points:
1. **Strict mode protects the global object**:
    - In strict mode, `this` is `undefined` in functions that aren’t tied to a specific object.
        
    - This prevents accidental changes to the global object.
2. **How to enable strict mode**:
    - Add `"use strict";` at the top of your file or function.
3. **Why it’s useful**:
    - It makes your code safer by preventing accidental global variable creation or modification.
        
    - It helps you catch errors early by throwing exceptions for unsafe actions.
---
