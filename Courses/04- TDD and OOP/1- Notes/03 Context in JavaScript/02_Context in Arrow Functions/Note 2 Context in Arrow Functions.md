## The context of an arrow function is as where it was defined
Since arrow functions are also anonymous, this also makes them compatible for use as callbacks! So are arrow functions just syntactic sugar? Far from it! Here's what sets arrow functions apart from normal anonymous functions:

_Arrow functions do not have inherent bindings to a `this` object based on_ _context; instead, their `this` is lexically bound._

This just means that an arrow function's `this` refers to whatever code _contains_ it, _not calls_ it. This makes them much more flexible for use in method callbacks than normal anonymous functions.

## Defining a class method as an arrow function

You can also define methods of a class as arrow functions instead of regular functions. **This will automatically bind the context of the class method to be either the class or the class instance.**

Consider the `bark()` method defined as a regular function in the following `Dog` class.
```node.js
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`${this.name} barked at you`);
  }
}

const fido = new Dog("Fido");
fido.bark(); // Fido barked at you
const fidoBark = fido.bark;
fidoBark();  // undefined barked at you
```
If you want `fido.bark()` to always use `fido` as its context, then you should convert the `bark()` method to an arrow function.
```node.js
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark = () => {
    console.log(`${this.name} barked at you`);
  }
}

const fido = new Dog("Fido");
fido.bark(); // Fido barked at you
const fidoBark = fido.bark;
fidoBark();  // Fido barked at you
```
Now, `fido` will always be the context of `fido.bark()` even if it is invoked function-style.

How does JavaScript do this? It creates a new instance of the `bark()` method for every instance of the `Dog` class. If you define the `bark()` method as a regular function, there will only be one instance of the `bark()` method created for all instances of the `Dog` class.

Here's what JavaScript is basically doing under the hood.
```node.js
class Dog {
  constructor(name) {
    this.name = name;
    this.bark = this.barkPrototype.bind(this);
  }

  barkPrototype() {
    console.log(`${this.name} barked at you`);
  }
}

const fido = new Dog("Fido");
fido.bark(); // Fido barked at you
const fidoBark = fido.bark;
fidoBark();  // Fido barked at you
```
Can you think of why this is a scenario that you would want to avoid? If you create a new arrow function for every `Dog` instance, and if you have 1000 `Dog` instances, you would create 1000 `Dog` functions. For every instance you create, you are creating another function that adds to your application's memory.

**You should only define a class method as an arrow function if you will be binding the class method when using it more times than you are creating new instances of that class. Or you can use it if you don't care about application memory and you won't be creating too many instances of the class.**

**Don't use this method because it cause problem in the memory of application**
