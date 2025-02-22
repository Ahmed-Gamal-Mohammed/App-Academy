while `bind()` returns a function that can be called multiple times with the given context, `call` and `aplly` will invoke the bound function immediately, returning the return value from that function 

Here's an example of how they're used 
```node.js
// assigning return of func.call() to a variable 

let callReturn = func.call(context, ...args);

// assigning return of func.apply() to a variable 
let applyReturn = func.apply(context,[...args]);
```

The first argument for both is the `this` that you want to bind the function's context to, The only difference between the two comes in the remaining arguments 

`Apply` takes an array of arguments while `call` spreads them out in comma-separator values

```node.js
class Dog{
	constructor(name){
	this.name = name;
	}
}

class Cat {
	constructor(name){
		this.name = name;
	}
	purrNTimes(n){
		for (let i = 0; i < n; i++) {
			console.log(`${this.name} says: meow`);
		}
	}
}
let dog = new Dog("Fido");
let cat = new Cat("Meowser");

// makes fido meow 5 times using call
console.log("The following is using call");
cat.purrNTimes.call(dog,5);

// makes fido meow 5 times using apply
console.log("The following is using apply");
cat.purrNTimes.apply(dog,[5]);
```
Notice that `call` and `apply` are essentially interchangeable and follow the same rules as `bind` with the main difference being that `call` and `apply` invoke the function they're being called on, whereas bind returns the function with its context 

