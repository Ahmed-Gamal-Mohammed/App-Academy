# Introduction to JavaScript 
---
_JavaScript_ was originally written in 1995 (in only ten days)
relatively small version of this new language was called Mocha,

**`console.log()` it's used to print message on the screen** 

**NOTE: In real world applications, `console.log` should be used for debugging purposes only. Debugging means to locate and solve errors in your code. `console.log` is mostly used as a way to locate the error(s) in your code.**


 ## Strings 
 ### ## Calculating length
 Since a single string can contain any number of characters, we may find it useful to count the number of characters in a string using `.length`:
 ```
console.log("ramen".length); // => 5
console.log("go home!".length); // => 8
console.log("".length); // => 0
```

- **if you tried to access out of boundaries index you will get `undefined`**
- if you want to know the index of specific character into the string use the following command `console.log("bagel".indexOf("b")); // => 0`
	- if this character not found inside the string you will get `-1`
- We can also use `indexOf` to search for a sub-string of characters. Under this circumstance, `indexOf` will return the index where the sub-string begins in the main string:
	- ```console.log("door hinge".indexOf("oor")); // => 1
	 console.log("door hinge".indexOf("hi")); // => 5
	 console.log("door hinge".indexOf("hint")); // => -1 ```
- Concatenation is just a fancy word for joining strings together into a single string. To concatenate strings, we use the `+` operator:
	- `console.log("hello" + "world"); // => 'helloworld'`
	- `console.log("goodbye" + " " + "moon"); // => 'goodbye moon'`


### Interpolation using template literals

One of the main advantages we gain by using template literals is the ability to _interpolate_ variables or expressions into strings. We do this by denoting the values we'd like to interpolate by wrapping them within curly braces with a dollar sign in front(`${}`). When your code is being run - the variables or expressions wrapped within the `${}` will be evaluated and then will be replaced with the value of that variable or expression.

Let's take a look at that syntax by looking at a simple example. Compare how easy to read the following two functions are:
```
function boringSayHello(name) {
    console.log("Hello " + name + "!");
};

function templateSayHello(name) {
    console.log(`Hello ${name}!`);
};

boringSayHello("Joe"); // prints "Hello Joe!"
templateSayHello("Joe"); // prints "Hello Joe!"
```

As we can see in the above example, the value of the variable is being interpolated into the string that is being created using the template literal. This makes our code easier to both write and read.

You'll most often be interpolating variables with template literals, however we can also interpolate expressions. Here is an example of evaluating an expression within a template literal:
```
let string = `Let me tell you ${1 + 1} things!`;
console.log(string); // Let me tell you 2 things!
```
