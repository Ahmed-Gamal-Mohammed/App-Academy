# The default value of variables 
```jsx
var hello;
console.log(hello); // prints undefined
```
So when we declare a variable using `var` the default value assigned to that variable will be `undefined` if no value is assigned 

The same is true of declaring a variable using `let`. when declaring a variable using `let` we can also choose to optionally assign a value 
```jsx
let hello;
console.log(hello); // prints undefined
```

When declaring a variable with `const` we must provide a value for that variable to be assigned to
```jsx
const hello;
console.log(hello); // SyntaxError: Missing initializer in const declartion 
```

This behavior makes sense because a `const` variable can not be reassigned- meaning that we don't assign a value when a `const` variable is declared we'd never be able to assign a new value 


**So, The default value of a variable declared using `var` or `let` is `undefined`. whereas variables declared using `const` need to be assigned a value

# The difference between default values and Hoisting 
When talking about default values for variables we should also make sure to underline the distinction between _hoisting_ variable names and default values.

Let's look at an example:
```jsx
function hoistBuddy() {
  var hello;
  console.log(hello); // prints undefined
}
hoistBuddy();
```


Whenever a variable is declared with `var` that variable's name is hoisted to the top of its declared scope with a value of `undefined` until a value is assigned to that variable name. If we never assign a value to the declared variable name then the default value of a `var` declared variable is `undefined`.

Now let's take a look at the example above but this time using `let`:
```jsx
function hoistBuddy() {
  let hello;
  console.log(hello); // prints undefined
}

hoistBuddy();
```

The default value of a `let` declared variable is `undefined`. However, don't confuse this with how a `let` defined variable is hoisted. When a `let` variable is declared the name of that variable is hoisted to the top of its declared scope and if a line of code attempts to interact with that variable before it has been assigned a value an error is thrown.

The following example shows the difference in **hoisting** between `var` and `let` declared variables:

```jsx
function hoistBuddy() {
  console.log(hello); // prints undefined
  var hello;

  console.log(goodbye); // ReferenceError: Cannot access 'goodbye' before initialization
  let goodbye;
}

hoistBuddy();
```

