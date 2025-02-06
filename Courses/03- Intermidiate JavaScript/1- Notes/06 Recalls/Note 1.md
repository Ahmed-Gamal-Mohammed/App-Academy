# primitive Data Types in Depth
**`Primitive types` are immutable, They can not change**
We not able to define new methods on primitive data types in JavaScript 

## Data types in JavaScript 
With the JavaScript ECMAScript 2015 release, there are now eight different data types in JavaScript hand
There are seven primitive types and one reference type 

### Primitive Types 
1. `Boolean`- **true and false**
2. `NULL` => represents the intentional absence of value 
3. `Undefined` => default value for many thing in JavaScript 
4. `Number` => like the numbers we usually use (12 ,32 5)
5. `String` => Ordered Collection of characters 
6. `Symbol`=> New to ES5 a symbol is a unique primitive value 
7. `BigInt` => a data type that can represent larger than the `number` type can safely handle
### One Reference Type 
1. `Object` =>  a collection of properties and methods 

As we have previously discussed one of the main differences between primitive and reference data types in JavaScript is that primitive data types are **immutable**, meaning that they cannot be changed. The other main thing that sets primitives apart is that primitive data types are not Objects and therefore _do not have methods_.


## Method and the object type 
When we first learned about the Object data type we learned about the definition of a _method_. As a reminder, the definition of a method is a function that belongs to an object.

Here is a simple example:
```jsx
const corgi = {
  name: "Ein",
  func: function() {
    console.log("This is a method!");
  }
};

corgi.func(); // prints "This is a method!"
```
The Object type is the only data type in JavaScript that has methods. **Meaning that primitive data types cannot have methods.** That's right - we cannot declare new methods or use any methods on JavaScript primitive data types because they are **not** Objects.

For example when finding the square root of a number in JavaScript we would do the following:
```jsx
// This works because we are calling the Math object's method sqrt
let num = Math.sqrt(25); // 5

// This will NOT work because the Number primitive has NO METHODS
let num = 25.sqrt; // SyntaxError: Invalid or unexpected token
```

The `Number` primitive data type above (`25`) does not have a `sqrt` method because only Objects in JavaScript can have methods. To sum up the previous sections: Primitive data types are **not** Objects therefore they do not have methods.

## Primitives with object wrappers
Right now you might be thinking - wait a second what about the string type? After all, we can call `String.toUpperCase` on an instance of a string? Well that is because of how the string type is implemented in JavaScript.

The underlying primitive data type of `String` does not have methods. However, to make the String data type easier to work with in JavaScript it is implemented using a `String` object that _wraps_ around the `String` primitive data type. This means that the `String` object will be responsible for constructing new `String` primitive data types as well as allowing us to call methods upon it because it is an Object.

We'll be diving a lot more into this concept when we get to JavaScript Classes but for brevity's sake we are going to do a walkthough of the code snippet below to clarify the difference between the `String` primitive type, and the `String` object that wraps around it:

```jsx
let str1 = "apple";

str1.toUpperCase(); // returns APPLE

let str2 = str1.toUpperCase();

console.log(str1); //prints apple
console.log(str2); //prints APPLE
```
So in the above example when we call `str1.toUpperCase()` we are calling that on the `String` object that wraps around the `String` primitive type.

This is why in the above example when we `console.log` both `str1` and `str2` we can see they are different. The value of `str1` has not changed because it can't - the `String` primitive type is _immutable_. The `str2` variable calls the `String.toUpperCase` method on the `String` object which wraps around the `String` primitive. This method cannot mutate the `String` primitive type itself - it can only point to a new place in memory where the `String` primitive for `APPLE` lives. This is why even though we call `str1.toUpperCase()` multiple times the value of that variable will never change until we reassign it.