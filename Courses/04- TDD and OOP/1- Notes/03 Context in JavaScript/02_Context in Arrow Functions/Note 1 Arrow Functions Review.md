## Arrow functions solving problems
Let's start by looking at the arrow function in action!
```node.js
// function declaration
let doubleNum = function(num) {
  return num * 2;
};

// fat arrow function style!
let doubleNum = num => num * 2;

// or 
let doubleNum = (num) => num * 2;
```
Both functions in the example above accomplish the same thing, However, the arrow syntax is a bit more concise

## Anatomy of an arrow function 
The Syntax for multiple statements arrow function is as follows:
```node.js

(paramters, go , here) => {
	statement1;
	statement2;
	return <a value>;
}
```

So let's look at a quick translation between a function declared with function expression syntax and a fat arrow function, Take notice of the removal of the `function` keyword, and the addition of the fat arrow(`=>`)

```node.js
function fullName(fname,lname){
	let str = `Hello ${fname} ${lname}`;

	return str;
}

// VS.

let fullNameArrow = (fname,lname) =>{
	let str = `Hello ${fname} ${lname}`;

	return str;
}
```
if there is only a single parameter you may omit the `()` around the parameter declaration like in the first example, Here's how it's general structured 

```node.js
param1 =>{
	statement1;
	return value;
};
```

if you have no parameters with an arrow function you must still use the `()`
```node.js
() =>{
	statement;
	return value;
}
```


## Single expression arrow functions 
**Reminder:** in JavaScript, an expression is a line of code that returns a value, Statements are more generally, any line of code 

**It allow for something previously unavailable in JavaScript: [Implicit returns]**
Meaning, in an arrow function with a single-expression block, the curly braces (`{ }`) and the `return` keyword are **implied**
```node.js
argument => expression; // equal to (argument) => { return expression };
```
Look at the below example you can see how we use this snazzy _implicit returns_ syntax:

```node.js
const multiply = function(num1, num2) {
  return num1 * num2;
};

// do not need to explicitly state return!
const arrowMultiply = (num1, num2) => num1 * num2;
```
However **this doesn't work if the fat arrow uses multiple statements**:
```node.js
const halfMyAge = myAge => {
  const age = myAge;
  age / 2;
};

console.log(halfMyAge(30)); // "undefined"
```
To return a value from a fat arrow with multiple statements, you _must_ explicitly return:
```node.js
const halfMyAge = myAge => {
  const age = myAge;
  return age / 2;
};

console.log(halfMyAge(30)); // 15
```
## Arrow functions are anonymous
Fat arrows are _anonymous_, like their [`lambda`](https://en.wikipedia.org/wiki/Anonymous_function) counterparts in other languages, meaning they aren't bound to an identifier.
```node.js
sayHello(name) => console.log("Hi, " + name); // SyntaxError

(name) => console.log("Hi, " + name); // this works!
```
However, if you want to name your function to use for later you must assign it to a variable:
```node.js
const sayHello = name => console.log("Hi, " + name);

sayHello("Curtis"); // => Hi, Curtis
```
