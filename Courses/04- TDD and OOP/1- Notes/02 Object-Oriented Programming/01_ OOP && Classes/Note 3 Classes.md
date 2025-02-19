# Creating a Class, Instance Methods and Variables, and Context
JavaScript can be used as an object-oriented language. You've already used some built-in objects in your programming. For example, when you write
```node.js
const array = [1, 2, 3, 4];
const address = {
    street: '1600 Pennsylvania Avenue NW',
    city: 'Washington',
    state: 'DC',
    zipCode: '20500'
};
```
the value stored in `array` is an object (specifically, `array`). The value stored in `address`is another object (That is`Object`, or POJO). There are objects all over the place!

OOP in JavaScript means defining your own object classes, so you can go way beyond the built-in ones like `Object` and `Array`! 

## Defining a JavaScript class 

- A class defines the attributes and behavior for an object type
- Classes in JavaScript are defined using the `class` keyword, followed by the name of the class and a set of curly braces 
- The constructor function is marked with the `constructor` keyword 
- The constructor acts like a `factory` creating instances of objects of the type defined in the class 

Example 
```node.js
class Book{
	constructor(title,series,author){
		this.title = title;
		this.series = series;
		this.author = author;
	}
}
```

**Note**: You can not use the following syntax inside of classes 
```node.js
class MyClass{
	function constructor(){
		// The (Constructor) keyword indicates special factory              method, 
		// So the (function) keyword is NOT needed
	}
}
```
**Notice that class names begin with a capital letter. Following this convention will help you (and other developers) to correctly identify the name as a class.**

While the **constructor** method is not explicitly required, it's important in the following ways:
- **`constructor` methods don't explicitly return a value.** When instantiating class instances with the `new` keyword, `constructor` methods implicitly return the newly created object instance. (You'll see an example in a bit.)
-  **Within a `constructor` method's body, the `this` keyword references the** **newly created object instance.** This allows you to initialize properties on the object instance.
## Instantiating an instance of a class
To Create or instantiate an instance of a class, use the `new` keyword

```node.js
class Book{
	constructor(title,series,author){
		this.title = title;
		this.series = series;
		this.author = author;
	}
}

// Notice the use of the `new` keyword to create an instance of the Book 

const fellowshipOfTherRing = new Book(
'The fellowship of the Ring',
'The Loard of the Rings',
'Ahmed Gamal'
);

console.log(fellowshipOfTherRing);

Output 

Book{
	title: 'The fellowship of the Ring',
	series:'The Loard of the Rings',
	author: 'Ahmed Gamal': 
}

// Notice that the first line in the output tells you the name of the clss, This is very helpful when you are debugging 
```
 There are **Three things occur when instantiating an instance of a class**:
 1. A new empty object is created (i.e. {})
 2. The `Construcotr` method is called and `this` is bound to the new object
 3. The new object is returned after the `constructor` method has completed

**Important:** If you return something from a `constructor` method then you'll break the behavior described in item #3 as the return value will be whatever you're explicitly returning instead of the new object!

**Example 1: Normal Behavior (No Explicit Return)**
```node.js
class Person { 
	constructor(name) { 
		this.name = name; 
	} 
} 
const p = new Person("Alice"); 
console.log(p); // Output: Person { name: 'Alice' }
```

Here:
- A new object `{}` is created.
- The constructor assigns `this.name = "Alice"`, so the object becomes `{ name: "Alice" }`.
- The instance is returned as expected.

**Example 2: Returning an Explicit Object (Overrides Default Behavior)**
```node.js
class Person {
  constructor(name) {
    this.name = name;
    return { greeting: "Hello" }; // Explicitly returning a different object
  }
}

const p = new Person("Alice");
console.log(p);  // Output: { greeting: "Hello" }
```
Here:
- A new object `{}` is initially created.
- The constructor assigns `this.name = "Alice"`, but that object is ignored.
- Instead of returning the newly created object, `{ greeting: "Hello" }` is explicitly returned.
- This means `p` is **not** an instance of `Person` but instead just a plain object `{ greeting: "Hello" }`.

**Example 3: Returning a Primitive (Ignored)**
```node.js
class Person {
  constructor(name) {
    this.name = name;
    return "Hello";  // Returning a primitive value (ignored)
  }
}

const p = new Person("Alice");
console.log(p);  // Output: Person { name: 'Alice' }
```
- The string `"Hello"` is ignored because JavaScript only replaces the returned value if it's an **object**.
- The default behavior remains, and `p` is still an instance of `Person`.

**Summary**
- When using `new`, JavaScript creates a new object and assigns it to `this`.
- The constructor initializes the new object.
- The new object is returned **unless** an explicit object is returned.
- Returning a primitive (e.g., `number`, `string`, `boolean`) is ignored.

## Defining methods
A method is a function that is part of the class. It performs an action (verb) for the class.

Methods are typically invoked on a given instance of the class stored in a variable; for this reason, they are also called **instance methods**

To understand how they are invoked, think of the `sort` method on the `Array` object. To use it, you first make an instance of an array. Then you call sort on that specific instance.

Therefore, the following is an example of using an instance method. (Note: You are finally ready to understand that `[]` notation is simply a shortcut for `new Array()`.)
```node.js
const list = new Array(1,5,3,9,11,-3);
console.log(list.sort());                // [ -3, 1, 11, 3, 5, 9 ]
console.log(list.sort((a, b) => a - b)); // [ -3, 1, 3, 5, 9, 11 ]
```
### Defining an instance method
- Instance methods, as the name suggests, are invoked on an instance of the class. 
- Instance methods are useful for performing an action on a specific instance. 
- Most of the time, when developers speak of methods without any qualifier, they are referring to instance methods.

The syntax for defining a class instance method is as follows: the method name with the method's parameters wrapped in parentheses, followed by a set of curly braces for the method body. (Note: the `function` keyword is NOT used!)

Here's an example of an instance method named `getInformation()` included in the `Book` class.
```node.js
class Book {
  constructor(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
 }

  // Example of an instance method
  getInformation() {
    return `${this.title} by ${this.author}`;
  }
}

const fellowshipOfTheRing = new Book(
 'The Fellowship of the Ring',
 'The Lord of the Rings',
 'J.R.R. Tolkien');

console.log(fellowshipOfTheRing.getInformation());
```

Output
```terminal
The Fellowship of the Ring by J.R.R. Tolkien
```

Notice that you must use the `this` keyword within the method body to access properties (and methods) on the instance of the project

## Using the `instanceof` operator to check an object's type
The `instanceof` operator may be used to check if an object is an instance of a specific class 
```node.js
class Book {
  constructor(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
  }
}

const fellowshipOfTheRing = new Book(
 'The Fellowship of the Ring',
 'The Lord of the Rings',
 'J.R.R. Tolkien');

// Use the `instanceof` operator to check if the
// `fellowshipOfTheRing` object is an instance of the `Book` class.
console.log(fellowshipOfTheRing instanceof Book); // True
```
