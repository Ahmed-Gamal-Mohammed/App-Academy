# Basic JavaScript Style Guide
- good code style can be free points on a technical interview!
## Indentation
- Indentation is one of the most important aspects of style, especially when our code is very complex and nested. The rule of thumb is to add an additional indent to to all the code in the body of a structure. That is, all code inside the braces of a `if`, `else`, `for`, `while`, `function`, etc. should be indented! If we indent properly, it is easy to see what code is inside what structures. We are able to easily spot where a structure ends since the closing braces are always lined up vertically with the name of the structure:
- ```// Good style:
	function skip5(){
	  for (let i = 1; i < 10; i += 1){
		    if (i === 5) {
	      continue;
		    }
	   console.log(i);
		}
	}

// Bad style:
function skip5(){
for (let i = 1; i < 10;i += 1){
if (i === 5) {
  continue;}
console.log(i);
}} ```

---
## Whitespace
Use a space around operators that use two things like `+`, `*`, `=` , `+=`, `<=`, etc.
```
// Good style:
let num1 = 3;
let num2 = 5;
if (num1 + num2 === 8) {
  console.log("the sum is 8");
}

// Bad style:
let num1=3;
let num2 =5;
if (num1+num2=== 8) {
  console.log("the sum is 8");
}
```

Don't use a space for operators that use one thing like `++`, `--`, etc..
```
// Good style:
myNum++;

// Bad style:
myNum ++;
```

## Single spaces

Use a space after `,` in arrays and a space after `;` in for loops.
```
// Good style:
let names = ['alvin', 'chase', 'phi', 'eliot'];
for (let i = 0; i < names.length; i++) {
  // ...
}

// Bad style: 
let names = ['alvin','chase','phi','eliot'];
for (let i = 0;i < names.length;i++) {
  // ...
}
```

## Vertical Space
Use blank lines to section off different logical sections in your code:
```
// Good style:
function sumArray(arr){
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    sum += ele;
  }

  return sum;
}

// Not as good style:
function sumArray(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    sum += ele;
  }
  return sum;
}
```

## Intermediate Variables
Use variables to store values that are tedious to write out over and over again. This will also increase readability if you choose a descriptive name.

```
// Good style:
function printStudents(arr) {
  for (let i = 0; i < arr.length; i++) {
    let name = arr[i];
    console.log(name.toUpperCase());
    console.log(name.toLowerCase());
  }
}

// Not as good style:
function printStudents(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].toUpperCase());
    console.log(arr[i].toLowerCase());
  }
}
```

Use variables to "label" complex expressions. Good variables can act as notes:
```
// Nice and readable:
let num = 15;
let isDivByEither = (num % 5 === 0 || num % 3 === 0);
console.log(isDivByEither);

// Not as readable:
let num = 15;
console.log(num % 5 === 0 || num % 3 === 0);
```

---


# Functions Expression 
## Functions as first-class objects

**JavaScript is well known for being a programming language that treats functions as "first-class objects." This fancy talk means that you can treat a function as a "normal" value by storing it in a variable**
```
let calculateAverage = function(a, b) {
  return (a + b) / 2;
};

console.log(calculateAverage(10, 20)); // 15
```



---
# Helper Function
**The key to solve an "unmanageable" problem is to break it down into chunks (functions) that are manageable.**
## Decomposition
**Decomposition is the process of breaking down a larger problem into its smaller sub-problems. Let's look at an example:**

Let's attempt a problem that lends itself nicely to decomposition.
```
// yellStrings(strings)
// Write a function that takes in an array of strings as an argument. 
// It should return array where every string is "yelled", see the example below:

let yelled = yellStrings(['hello', 'how', 'are', 'you?']);
yelled; //=> ['HELLO!', 'HOW!', 'ARE!', 'YOU?!'];
```

This seems a bit scary, how can we manage to change all the strings in the array?!? Wait, what if we were given this similar problem instead:

```
// yellStr(str)
// Write a function that takes in a string as an argument. The function
// should return the string but "yelled", see the example below:

let yelled = yellStr('bootcamp');
yelled; //=> 'BOOTCAMP!'
```

The `yellStr` problem above is way more manageable to solve. Let's take a crack at building that function:
```
function yellStr(str) {
  let upperString = str.toUpperCase();
  return upperString + '!';
}
```

Here is where decomposition comes into play. A keen observer will notice that `yellStr` is a sub-problem of the `yellStrings`. Using the `yellStr` function we built above, here is how we can solve it:
```
function yellStr(str) {
  let upperString = str.toUpperCase();
  return upperString + '!';
}

function yelledStrings(strings) {
  let yelled = [];

  for (let i = 0; i < strings.length; i++) {
    let string = strings[i];
    let newString = yellStr(string);
    yelled.push(newString);
  }

  return yelled;
}
```
Notice that the `yelledStrings` function calls the `yellStr` function multiple times. We already know exactly what the `yellStr` function does, so we are free to take advantage of it. We are using `yellStr` as a _helper function_ to solve `yelledStrings`.

## Abstraction
**Abstraction is the process of hiding details. The human brain is relatively bad at reasoning through complexity. As you will see, computer programs become pretty complex rather quickly and it is hard for the human brain to keep up. The job of a programmer is to manage the complexity by keeping the program modular and hiding details. The act of hiding details allows our minds to focus on other aspects of the program that need attention. Decomposition is a technique that uses abstraction because it hides details. Go back and look at the two `laligatSum` solutions. The decomposed one exposes less implementation details and is easier to reason about.**

---
# Built-in functions 

```
let sentence = "what a wonderful life"; let words = sentence.split(" "); console.log(words); // ["what", "a", "wonderful", "life"]
 ```
`.split` ==> turns strings into array of strings
