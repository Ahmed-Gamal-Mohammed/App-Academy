- we explained that function are first class object, meaning they can be stored in variables just like any other value.
- In particular, we've been using built-in methods like `Array.forEach` and `Array.map` which accept (anonymous) functions as arguments
- Now it's time to take a look under the hood and define our _own_ functions that accept other functions as arguments.

# What is a callback?
Defining a function that accept another function as an argument is as simple as specifying a regular parameter, We'll name our parameter `callback` but you could very well name it whatever you please.

```
let foobar = function(callback){
	console.log("foo");
	callback();
	console.log("bar");
};

let sayHello = function(){
	console.log("hello");
};

footbar(sayHello); 
// prints
// foo
// hello
// bar
```

A callback is always a function. in general, The callback is the function that is being passed into another function. in the example above,`sayHello` is a call back, but `foober` is not a callback. Notice that when call `foobar(sayHello)`, we are not yet calling `sayHello` function, instead we are passing the `sayHello` function itself into `foober`. when execution enters the foobar function, the `callback` arg will refer to `sayHello`. This means that `callback()` will really evaluate to `seyHello()`.

## A more interesting Examples 
A callback behaves just like any other function, meaning it can accept its own arguments and return values. let's define an `add` function that also accept a callback:

```
console.log("a call back function can accept its own arguments");

let add = function(num1,num2,cb){

let sum = num1 + num2;

let result = cb(sum);

return result;
};

let double = function(num){

return num * 2;
};

let negative = function(num){

return num * -1;
};

console.log(add(2,3,double)); // 10

console.log(add(4,5,negative)); // -9
```

In the `add` function above, we pass the sum of `num1` and `num2` into the callback (`cb`) and return the result of the callback. Depending on the callback function we pass in, we can accomplish a wide range of behavior! This will come in handy when reusing code. A callback is just like a helper function, except now we can dynamically pass in _any_ helper function.

To wrap things up, let's pass in some built-in functions and use them as callbacks. `Math.sqrt` is a function that takes in a number and returns its square root:

```
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(64)); // 8

let add = function(num1, num2, cb) {
  let sum = num1 + num2;
  let result = cb(sum);
  return result;
};

console.log(add(60, 4, Math.sqrt)); // 8
```

If we pass too few arguments when calling a function, the parameters that do not have arguments will contain the value `undefined`. With that in mind, let's refactor our `add` function to _optionally_ accept a callback:


# Js built-in Method 
## Map 
1. what is map?
	- `map` is a **higher-order function** in JavaScript that is used to transform elements in an array. It takes a callback function as an argument, applies this function to each element in the array, and returns a **new array** with the results of the transformations. **It does not modify the original array.**

2. Syntax 
	- `const newArray = array.map(callback(currentValue, index, array));`
3. Example 
```
const numbers = [1, 2, 3, 4];

// Double each number in the array
const doubledNumbers = numbers.map((num) 
num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8]
```

4. Key Points:
	- The callback function takes three arguments:
		- 1. The current element being processed.
		- 2. The index of the current element (optional).
		- 3. The array itself (optional).
	-  `map` does not modify the original array. It creates and returns a new array.
5. **Key Characteristics of `map`:**
	1. **Immutable:** It does not modify the original array. Instead, it creates and returns a new array.
	2. **Element-wise Transformation:** The callback function is applied to each element of the array.
	3. **Returns a New Array:** The result of `map` is always a new array of the same length as the original array.
	4. **Higher-Order Function:** It takes a function (the callback) as an argument.

 6. How `map` Works:
	1. `map` iterates over each element in the array.
	2. For each element, it calls the callback function with the following arguments:
	    - The current element. 
	    - The index of the current element.
	    - The original array.
	3. The result of the callback function is added to a new array.
	4. After all elements have been processed, `map` returns the new array.

## Filter
The `filter` method in JavaScript is a powerful tool for working with arrays. It allows you to create a new array containing only the elements that pass a certain test (defined by a function).

1. What is `filter`?
	1. `filter` is a built-in array method in JavaScript
	2. It takes a **callback function** as an argument.
	3. It returns a **new array** containing only the elements for which the callback function returns `true`.
2. Syntax 
	1.  `const newArray = array.filter(callback(currentValue, index, array));`
3. Example 
```
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0; // Return true for even numbers
});

console.log(evenNumbers); // Output: [2, 4, 6]
```

Creating your own filter 
- First you need to define a function that take two arguments 
	- the array to filter 
	- the callback function 
-  Create an empty array to store the filtered results.
-  Loop through each element of the input array.
-  Call the callback function for each element.
-  If the callback returns `true`, add the element to the results array.
-  If the callback returns `true`, add the element to the results array.

