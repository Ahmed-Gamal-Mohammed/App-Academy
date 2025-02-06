# Variable Hoisting - Var
```jsx
function hoistVar(){
	console.log(dog);
	var dog = "dog";
};

hoistVar(); // prints undefined 
```
 when we define a variable with var its hoisted to the top of the function but initialized with `undefined`
like following 

```jsx
function hoistVar(){
	// var dog
	console.log(dog);
	var dog = "dog";
};

hoistVar(); // prints undefined 
```

you can not do the same thing with **Let and Const**
you must initialize them first

# Function Hoisting 
```jsx 
hello(); // prints 'hello!'

function hello(){
	console.log("hello!");
};
```
you can do it with the function declaration, you can not do the same thing with `let and const`
```jsx
sayHello(); // typeError: reference to unintialized 
let sayHello = function(){
	console.log("SayHEllo");
};
```

// when you try to use var variable to store the function
```jsx
sayHello(); // typeError: hello is not a function
var sayHello = function(){
	console.log("SayHEllo");
};
```

why there are different type of error in (let, const Vs var)?
1- `let and const`: can not use or invoke them before initialization 
2- `var`: when you invoke variable that initialized with var its `hoisted` to the top with default value which is `undefined` , so when you try to access it as a function make an error because its a variable not a function 

# Combining Function and Variable Hoisting
## let & const

```jsx
let hello = "hello";

function hello(num){ // referenceError: initialized before 
	console.log("hello");
}

console.log(hello);
```
## Using var
```jsx
var foo = "Iam a variable";

function foo(num){
	return "Iam a function";
};

console.log(foo); // Iam a variable 
```
this mean that **Variable assignment `trumps` function declaration**
if you try to reassign the foo variable again, it will keep with value of the first assignment 

if you declare a variable with var without initialize it with name so in this case the **Function declarations trumps(تتغلب) Variables declaration** 
```jsx
var foo;

function foo(){
	return "Iam a function";
};

console.log(foo); // [function: foo]
```



