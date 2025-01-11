**JavaScript functions will happily take fewer arguments that specified, or More arguments that specified**
# Accepting arguments
## Functions with fewer arguments than specified
As we've previously covered, JavaScript functions can take fewer arguments than expected. If a parameter has been declared when the function itself was defined, then the default value of that parameter is `undefined`.

Below is an example of a function with a defined parameter both with and without an argument being passed in:
```
function tester(arg) {
  return arg;
}

console.log(tester(5)); // => prints: 5
console.log(tester()); // => prints: undefined
```
**Always keep in mind that a function will still run even if it has been passed no arguments at all.**

## More arguments than specified
JavaScript functions will also accept more arguments than were previously defined by parameters.

 an example of a function with extra arguments being passed in:
```
function adder(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// adder will assign the first two parameters to the passed in arguments
// and ignore the rest
console.log(adder(2, 3, 4)); // => 5
console.log(adder(1, 5, 19, 100, 13)); // => 6
```

# Utilizing Rest Parameters
how do we access those extra arguments?
**Rest parameter** syntax allows us to capture all of a function's incoming arguments into an array. Let's take a look at the syntax:
```
// to use the rest parameter you use ... then the name of the array
// the arguments will be contained within
function tester(...restOfArgs) {
  // ...
}
```
In order to use _rest parameter_ syntax a function's last parameter can be prefixed with `...` which will then cause all remaining arguments to be placed within an array. Only the **last parameter** can be a _rest parameter_.


For a more practical example let's expand on our `adder` function from before using _rest parameter syntax_:
```
function adder(num1, ...otherNums) {
  console.log("The first number is: " + num1);
  let sum = num1;

  // captures all other arguments into an array and adds them to our sum
  otherNums.forEach(function(num) {
    sum += num;
  });

  console.log("The sum is: " + sum);
}

adder(2, 3, 4);
// prints out:
// The first number is: 2
// The sum is: 9
```

**To recap - we can use the _rest parameter_ to capture a function's incoming arguments into an array.**

---
# Utilizing Spread Syntax
**the _spread operator_ allows you to break down a data type into the elements that make it up.**

The _spread operator_ has two basic behaviors:
1. Take a data type (i.e. an array, an object) and _spread_ the values of that type where **elements** are expected
2. Take an iterable data type (an array or a string) and _spread_ the elements of that type where **arguments** are expected.
## Spreading elements
The spread operator is very useful for _spreading_ the values of an array or object where comma-separated elements are expected.

**Spread operator** syntax is very similar to rest parameter syntax but they do very different things:
```
let numArray = [1, 2, 3];

// here we are taking `numArray` and *spreading* it into a new array where
// comma separated elements are expected to be
let moreNums = [...numArray, 4, 5, 6];

> moreNums
// => [1, 2, 3, 4, 5, 6]
```

In the above example you can see we used the spread operator to _spread_ the values of `numArray` into a new array. Previously we used the `concat` method for this purpose, but we can now accomplish the same behavior using the _spread operator_.

We can also _spread_ Objects! Using the spread operator you can _spread_ the `key`-`value` pairs from one object and into another new object.

```
let colors = { red: "scarlet", blue: "aquamarine" };
let newColors = { ...colors };

> newColors
// { red: "scarlet", blue: "aquamarine" };
```
Just like we previously showed with arrays, we can use this spread behavior to _merge_ objects together:

```
let colors = { red: "scarlet", blue: "aquamarine" };
let colors2 = { green: "forest", yellow: "sunflower" };

let moreColors = { ...colors, ...colors2 };

> moreColors
// {red: "scarlet", blue: "aquamarine", green: "forest", yellow: "sunflower"}
```

## Spreading arguments
The other scenario in which _spread_ proves useful is _spreading_ an iterable data type into the passed in arguments of a function. To clarify, when we say _iterable_ data types we mean arrays and string, **not Objects**.


Here is a common example of spreading an array into a function's arguments:
```
function speak(verb, noun) {
  return "I like to go " + verb + " with " + noun + ".";
}

const words = ["running", "Jet"];

console.log(speak("running", "Jet")); // => I like to go running with Jet.
console.log(speak(...words)); // => I like to go running with Jet.
```

Using _spread_ allowed us to pass in the `words` array, which was then broken down into the separate parameters of the `speak` function. The spread operator allows you to pass an array as an argument to a function and the values of that array be will be _spread_ to fill in the separate parameters.

