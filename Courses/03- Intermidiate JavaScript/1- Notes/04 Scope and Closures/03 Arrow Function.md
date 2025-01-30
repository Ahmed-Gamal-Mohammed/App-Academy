Arrow functions, a.k.a. Fat Arrows (`=>`), are a more concise way of declaring functions.

```
// function declaration
let average = function(num1, num2) {
  let avg = (num1 + num2) / 2;
  return avg;
};

// fat arrow function style!
let averageArrow = (num1, num2) => {
  let avg = (num1 + num2) / 2;
  return avg;
};
```
Both functions in the example above accomplish the same thing. However, the arrow syntax is a little shorter and easier to follow.

### Anatomy of an arrow function
The syntax for a multiple statement arrow function is as follows:
```
(parameters, go, here) => {
  statement1;
  statement2;
  return a value;
}
```
So let's look at a quick translation between a function declared with function expression syntax and a fat arrow function. Take notice of the removal of the `function` keyword, and the addition of the fat arrow (`=>`).

```
function fullName(fname, lname) {
  let str = "Hello " + fname + " " + lname;
  return str;
}

// vs.

let fullNameArrow = (fname, lname) => {
  let str = "Hello " + fname + " " + lname;
  return str;
};
```

If there is only a single parameter you may omit the `( )` around the parameter declaration:
```
param1 => {
  statement1;
  return value;
};
```

If you have no parameters with an arrow function you must still use the `( )`:
```
// no parameters will use parenthesis
() => {
  statements;
  return value;
};
```

Let's see an example of an arrow function with a single parameter with no parenthesis:
```
const sayName = name => {
  return "Hello " + name;
};

sayName("Jared"); // => "Hello Jared"
```

#### Single expression arrow functions
**Reminder:** In JavaScript, an _expression_ is a line of code that returns a value. _Statements_ are, more generally, any line of code.

One of the most fun things about single expression arrow functions is they allow for something previously unavailable in JavaScript: **implicit returns**. Meaning, in an arrow function with a single-expression block, the curly braces (`{ }`) and the `return` are keyword are **implied**.
```
argument => expression; // equal to (argument) => { return expression };
```
Look at the below example you can see how we use this snazzy _implicit returns_ syntax:

```
const multiply = function(num1, num2) {
  return num1 * num2;
};

// do not need to explicitly state return!
const arrowMultiply = (num1, num2) => num1 * num2;
```

However **this doesn't work if the fat arrow uses multiple statements**:
```
const halfMyAge = myAge => {
  const age = myAge;
  age / 2;
};

console.log(halfMyAge(30)); // "undefined"
```
To return a value from a fat arrow with multiple statements, you _must_ explicitly return:
```
const halfMyAge = myAge => {
  const age = myAge;
  return age / 2;
};

console.log(halfMyAge(30)); // 15
```

#### Syntactic ambiguity with arrow functions
In JavaScript, `{}` can signify either an empty object or an empty block.
```
const ambiguousFunction = () => {};
```
Is `ambiguousFunction` supposed to return an empty object or an empty code block? Confusing right? JavaScript standards state that the curly braces after a fat arrow evaluate to an empty block (which has the default value of `undefined`):
```
ambiguousFunction(); // undefined
```

// this will implicitly return an empty object
```
const clearFunction = () => ({});
clearFunction(); // returns an object: {}
```

#### Arrow functions are anonymous
```
sayHello(name) => console.log("Hi, " + name); // SyntaxError
(name) => console.log("Hi, " + name); // this works!
```

If you want to name your function you must assign it to a variable:
```
const sayHello = name => console.log("Hi, " + name);

sayHello("Curtis"); // => Hi, Curtis
```

