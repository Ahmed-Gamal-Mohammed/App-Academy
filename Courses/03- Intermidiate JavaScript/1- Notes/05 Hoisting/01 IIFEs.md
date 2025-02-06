it's time to learn about some built-in JavaScript functionality that will allow you to define anonymous function and then immediately run that function as soon as it has been defined. 
In JavaScript we call this an **immediately-Invoked Function Expression** or **IIFE**

---
# Quick review of function Expression 
Before we get started talking about IIFEs lets quickly do a review of the syntax anonymous function expression 

A function expression is when you define a function and assign that function to a variable:

```jsx

// here we are assinging a named function declaration to a variable 
const sayHi = function sayHello(){
	console.log("Hello, World!");
};

sayHi(); // prints "Hello, World!"
```

We can also use function expression syntax to assign variables to anonymous function effectively giving them names  

```jsx

// here we are assinging a anonymous function declaration to a variable 
const sayHi = function(){
	console.log("Hello, World!");
};

sayHi(); // prints "Hello, World!"
```

Now, what if we only ever wanted to invoke the above anonymous function once? 
We didn't want to assign it a name?
To do that we can define an **Immediately-Invoked Function Expression**

# IIFE syntax
An **immediately-Invoked Function Expression** is a function that is called immediately after it had been defined. 

The typical syntax we use  to write an IIFE is to start by writing an 
anonymous function and then warping that function with the grouping operator, `()`.

After the anonymous function is wrapped in parentheses you simply add another pair of closed parentheses to invoke your function 

```jsx

// 1- wrap the anonymous function in the grouping operator 
// 2- Invoke the function!

// The following is the syntax
(function(){
	statements;
})();

(functoin(){
	console.log("Run me immediately!");
})(); // => "run me immediately"
```

**Our above function will be defined, invoked, and then will never invoked again**
What we are doing with the above syntax is forcing JavaScript to run our function as a **function expression** and then to invoke that function expression immediately 

Since an immediately-Invoked Function Expression is immediately invoked attempting to assign an IIFE to a variable will return the value of invoked function 

here is an Example 
```jsx
let result = (function(){
	return "party!"; 
})();

console.log(result); // prints "party!"
```
so we can use IFFEs to run an anonymous function immediately and we can still hold onto the result of that function by assigning the IFFE to a variable

# IIFEs keep functions and variables private
Using IIFEs ensures our global namespace remains unpolluted by a ton of function or variable names we don't intend to reuse.
IIFEs can additionally protect global variables to ensure they can't ever be read or overwritten by our program. 
in short using an IIFEs is a way of protecting not only the variables within a function, but the function itself.

When learning about scope we talked about how an outer scope does not have access to an inner scope's variables

```jsx
function nameGen() {
  const bName = "Barry";
  console.log(bName);
}

// we can not reference the bName variable from this outer scope
console.log(bName);
console.log(nameGen()); // prints "Barry"
```

Now what if we didn't want our outer scope to be able to access our function at all? Say we wanted our `nameGen` function to only be invoked once and not ever be invoked again or even to be accessible by our application again? This is where IIFEs come in to the rescue.

One of the main advantages gained by using an IIFE is the very fact that the function cannot be invoked after the initial invocation. Meaning that no other part of our program can ever access this function again.

Since we don't ever intend to invoke this function again - there is no point in assigning a name to our function. Let's take a look at rewriting our `nameGen` function using a sneaky IIFE:

```jsx
(function() {
  const bName = "Barry";
  console.log(bName);
})(); // prints "Barry"

// we still cannot reference the bName variable from this outer scope
// and now we have no hope of ever running the above function above again
console.log(bName);
```
