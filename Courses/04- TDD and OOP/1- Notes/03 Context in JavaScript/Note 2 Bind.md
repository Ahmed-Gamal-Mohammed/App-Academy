The `bind()` method instances creates a new function that, when called, calls this function with its `this` keyword set to the provided value, and a given sequence of arguments preceding any provided when the new function is called  

Syntax 
```node.js
bind(thisArg)
bind(thisArg,arg1)
bind(thisArg,arg1,arg2)
bind(thisArg,arg1,arg2,/*...,*/, argN)
```
Parameters 
1. thisArg
	1. The value to be passed as the `this` parameter to the target function `func` when the bound function is called. If the function is not in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null) and [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) will be replaced with the global object, and primitive values will be converted to objects. The value is ignored if the bound function is constructed using the [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) operator
2. Returned Value
	1. A copy of the given function with the specified `this` value, and initial arguments (if provided).
	
---
So how would you go about making sure the context for a function is correct when called where context gets lost?
Luckily, JavaScript has something that solves this problem: what is known as the **binding** of a context to a function.

From the [`Function.prototype.bind()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind), "The simplest use of `bind()` is to make a function that, no matter how it is called, is called with a particular `this` value".

Here is a preview of the syntax used to `bind`:
```node.js
let boundFunc = func.bind(context);
```
When `bind` is called it returns what is called an exotic function. This essentially means a function with its `this` bound no matter where that function is invoked.

Let's take a look at example at `bind` in action:
```node.js
class Cat {
  purr() {
    console.log("meow");
  }

  purrMore() {
    this.purr();
  }
}
let cat = new Cat();

let sayMeow = cat.purrMore;
sayMeow(); // TypeError: this.purr is not a function

// You can now use the built in Function.bind to ensure your context, `this`,
// is the cat object
let boundCat = sayMeow.bind(cat);

// You still *need* to invoke the function
boundCat(); // prints "meow"
```
That is the magic of `bind`! It allows you choose the context for your function. You don't need to restrict the context you'd like to bind to either - you can `bind` functions to any context.

Let's look at another example:
```node.js
class Cat {
  constructor(name) {
    this.name = name;
  }
  sayName() {
      console.log(this.name);
  }
}

let cat = new Cat("Meowser");

class Dog {
  constructor(name) {
    this.name = name;
  }
}

let dog = new Dog("Fido");

let sayNameFunc = cat.sayName;

let sayHelloCat = sayNameFunc.bind(cat);
sayHelloCat(); // prints Meowser

let sayHelloDog = sayNameFunc.bind(dog);
sayHelloDog(); // prints Fido
```

Let's now revisit the above example of losing context in a callback and fix the context! Using the `global.setTimeout` function you want to call the `cat.purrMore` function with the context bound to the cat object.
```node.js
class Cat {
  purr() {
    console.log("meow");
  }

  purrMore() {
    this.purr();
  }
}

let cat = new Cat();

// Bind the cat.purrMore function to the context of the cat object
const boundPurr = cat.purrMore.bind(cat);

global.setTimeout(boundPurr, 5000); // prints 5 seconds later: meow
```

