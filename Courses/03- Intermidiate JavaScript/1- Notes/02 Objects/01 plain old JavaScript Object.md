# The Object Type
- An **object** is a data structure that stores other data, similar to how an array stores elements 
- An **object** differs in that each `value` stored in an object is associated with a `key`
- **Keys** are almost always strings while `values` can be any data type: `number, strings, functions, arrays, other objects`, anything at all
- Objects are different from the previous data structures we've talked about (i.e. arrays) in two important ways:
	- instead of accessing values within an object through an index with numbers, objects are indexed using `keys`.
		- - This allows us to access values quickly and efficiently. We'll be talking a bit more about this point later on in the course.
	-  Order is **not** guaranteed within an Object. When you iterate through the values in an object, they may not be in the same order as when they were entered.
- Objects are defined by using curly braces: `{}`. See below for an example:
  ```
  > let car = {};
  > undefined
  
	// here is our new empty object!
  > car 
  > {}
     ```
- **Fun Fact**: Objects are known by the affectionate industry jargon: Plain Old JavaScript Objects (or POJO for short). Expect to see that short-hand often!
# Setting keys and values
```
// create an object of car 
> let car = {};
undefind 

> car
> {}

// you need to take care that the key of object must be string type
// the value stored in the key can be any type
> car ["color"] = "black";
> "black"

> car["seats"] = 2;
> 2


// accessing out object at the key of color 
> car["color"]
> "black"

> car
> {color: "black", seats: 2}

// if you try to access key that't not assigned within the object 
> car["weight"]
> undefined   // ===> accessing not assigned key  

```

- if you try to access key that't not assigned within the object so you will get **undefined** 

- The **undefined** type is the default for unassigned variables, functions without a `return`, out-of-array elements, and non-existent object values.

Using this knowledge, we can check if a key exists in an object 
```
> car 
> {color: "black", seats: 4}

> car["color"]
> "black"

> car["color"] === undefined 
> false

> car["weight"] === undefined 
> true
```

while this is a common pattern, in modern JS the preferred method to check if an object exists in a key is to use the `in` operator

```
> car 
> {color: "black", seats: 4}

> "color" in car;
> true

> "weight" in car;
> false
```

---
# Using variables as keys
what happens if we assign a variable with a string value as a `key` within `Object`? 

```
> car 
> {color: "black", seats: 4}

> let newVariable  = "color";
> undefined 

> newVariable 
> "color"

> car[newVariable]
> "black"

> car["color"]
> "black"
```

# Using different notations
So far we've shown how to access and set values in objects using `object[key]` - also known as `Bracket Notation` 

This is one of two ways to access values within an object
The second way we can access values within an object is Called `Dot Notation` 

We can use {`. dot`} to assign and access our key-value pairs. The easiest difference to notice is when we use dot notation, We don't need to use string quotation marks for the keys 

```
> let dog = {};
> undefined

> dog.bark = "Bowowowowo";
> "Bowowowowo"

> dog.bark
> "Bowowowowo"

> dog
> {bark: "Bowowowowo"}
```
---
# Bracket Notation `Vs` Dot Notation

## Dot Notation 
- **Easier to read**
- **Easier to write because we don't have to deal with using quotation marks**
- **Can not use variable as keys**
- **Keys can't contain numbers as their first character (`object.1key` doesn't work)

## Bracket Notation 
- **You can use variables (assigned to string values) as keys!
- **It is okay to use variables and Strings that start with numbers as `Keys` (Use `object['1key]` does work, while `object.1key` doesn't work)

One of the most fun parts of being a programmer is the ability to come up with different solutions to the same problem. So you should have both types of notation in your tool-belt to be a versatile programmer!

Let's look at the difference 

```
> Let myDog = {};
> myDog.name = "fido";

// Let's use a variable as out key and some bracket notation:

> let myKey = "name";
> console.log(myDog); // prints {name: "fido"}
> console.log(myDog[myKey]); // prints 'fido'

// what if we try to use the variable in dot notation:
// the below is interpreted as myDog['myKey']

> console.log(myDog.myKey); // prints: undefined
```
When we use dot notation to write `myDog.myKey`, `myKey` will **not be interpreted by JavaScript as a variable**. The text we write after the `.` will be used as the **literal** key. Remember that if we try to use a key that does not exist in an object, we get back the default value of `undefined`.

```
// continued from above

> console.log(myDog.myKey); // prints `undefined`
> myDog.myKey = "???";

> console.log(myDog); // prints `{name: "Fido", myKey: "???"}`
> console.log(myDog.myKey); // prints `???`
// mind === "blown"
```

# Putting it all together
We can also create an entire object in a single statement:
```
let myDog = {
  name: "Fido",
  type: "Doge",
  age: 2,
  favoriteToys: ["bone", "ball"]
};

console.log(myDog.age); // prints 2
console.log(myDog["favoriteToys"]); // prints ["bone", "ball"]
```
# Iterating Through Objects
## A new Kind of `for` Loop
We can use special syntax to iterate through each `key` of an object (in arbitrary order). This is super useful for looping through **both** the keys and values of an object.

The general syntax looks like this:
```
The current key is assigned to *Variable* on each iteration
for(let variable in object){
	statement;
}
```
Example
```
let obj = {name: "Rose", cats: 3};

// the key we are accessing is assigned to the currentKey
// variable on each iteration

for(let currentKey in obj){
	console.log(currentKey);
}

prints out :
// name 
// cats
```

the example above prints all the keys found in **obj** ti the screen. on each iteration of the loop, the `key` we are currently accessing is assigned to the currentKey variable 

if we want to access values in an object, we can use bracket notation like so:
```
let obj = {name: "Rose", cats: 4};

for(let key in obj){
	let value = obj[key];
	console.log(value);
}

// prints out 
Rose
4
```
---
# Methods `Vs` Function 
**Method** is essentially a function that belongs to an object. 
That means that every method is a function, but `not` every function is a method
- `myFunc` is a function 
- `myObject.myFunc` is a method of the object `myObject`
- `myObject["myFunc"]` is a method of the object `myObject`

A method is just a key-value pair where the **key is the function name and the value is the function definition** 

```
let dog = {name: "Fido"};

// defining a new kay-value pair where the *function name* is the key 
// the function itself is the value!

dog.bark = function(){
	console.log("bark bark!");
}

// this is the same thing as above just using Bracket notation 
dog["speak"] = function(string){
	console.log("WOOF" + string + "WOOF!!!");
}

dog.bark(); // prints 'bark bark!'
dog.speack("Pizza"); // prints WOOF Pizza WOOF!!!
```

Additionally, we can give objects methods when we initialize them:

```
// We can give object methods when initiaize them:

let dogs = {

name: "Rover",

bark: function(){

console.log("bork bork!");

},

speak: function(string){

console.log("BOOORK " + string + " BOOOORK!!!");

}

};

  

dogs.bark();    // bork bork!

dogs.speak("burrito"); // BOOORK burrito BOOOORK!!!
```

---
# Useful Object Methods

## Iterating through keys using **`Object.keys`**
The `Object.keys` method accepts an object as the argument and returns an array of the _keys_ within that Object.
```
> let dog = {name: "Fido", age: "2"}
undefined

> Object.keys(dog)
['name', 'age']

> let cup = {color: "Red", contents: "coffee", weight: 5}
undefined

> Object.keys(cup)
['color', 'contents', 'weight']
```
The return value of `Object.keys` method is an array of keys - which is useful for iterating!

## Iterating through keys using **`Object.values`**
The `Object.values` method accepts an object as the argument and returns an array of the _values_ within that Object.
```
> let dog = {name: "Fido", age: "2"}
undefined

> Object.values(dog)
['Fido', '2']

> let cup = {color: "Red", contents: "coffee", weight: 5}
undefined

> Object.values(cup)
['Red', 'coffee', 5]
```
The return value of `Object.values` method is an array of values - which is useful for iterating!

## Iterating through an Object's keys & values
So we have gone over how `Object.keys` gives you the keys on an object and `Object.values` gives you the values, but what if you want both the _keys_ and the _values_ corresponding to each other in an array?

The `Object.entries` method accepts an object as the argument and returns an array of the `[key, value]` pairs within that Object.
```
> let cat = {name: "Freyja", color: "orange"}
undefined

> Object.entries(cat)
[ [ 'name', 'Freyja' ], [ 'color', 'orange' ] ]
```

