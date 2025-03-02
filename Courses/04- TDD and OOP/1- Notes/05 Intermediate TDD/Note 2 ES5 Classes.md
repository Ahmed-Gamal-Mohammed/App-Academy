## Creating a class constructor function
To create a class in JavaScript, you can use the ES6 class syntax which is using the `class` keyword. However, to create a class using ES5 syntax, you can use a plain function declaration that acts as the `constructor` function.
### What is a constructor function? 
A constructor function in JavaScript is a special type of function that is used to create and initialize objects. When you call a constructor function with the `new` keyword, it creates a new object, sets up its properties, and returns it.
### Why Use Constructor Functions?
Constructor functions are useful when you want to create multiple objects with the same properties and methods. Instead of defining the same properties and methods for each object individually, you can define them once in a constructor function and then create multiple objects from it.
### ES5 Syntax: Using a Constructor Function
In ES5 (ECMAScript 5), JavaScript did not have the `class` keyword. Instead, you would use a regular function to act as a constructor.

```node.js
function Book(title, series, author) {
  this.title = title;
  this.series = series;
  this.author = author;
}

const gobletOfFire = new Book(
  'The Goblet of Fire',
  'Harry Potter',
  'J.K. Rowling'
);
console.log(gobletOfFire.title); // The Goblet of Fire
```
#### Explanation:
1. **Function Declaration**:
    - `function Book(title, series, author) { ... }`    
    - This is a regular function declaration. The name `Book` is capitalized by convention to indicate that it is a constructor function.
2. **Properties Initialization**:
    - `this.title = title;`
    - `this.series = series;`
    - `this.author = author;`
    - Inside the function, the `this` keyword **refers to the new object being created**. We assign the passed arguments (`title`, `series`, `author`) to properties of this new object.
3. **Creating an Instance**:
    - `const gobletOfFire = new Book('The Goblet of Fire', 'Harry Potter', 'J.K. Rowling');`
    - The `new` keyword is used to create a new instance of the `Book` object. It calls the `Book` function with the provided arguments and returns a new object with the initialized properties.
4. **Accessing Properties**:
    - `console.log(gobletOfFire.title); // The Goblet of Fire`
    - You can access the properties of the newly created object using dot notation.

#### There are a few things specific to constructor functions worth highlighting:
- **The name of the constructor function is capitalized.** Following this convention will help you (and other developers) to correctly identify this function as a constructor function.
- **The function doesn't explicitly return a value.** When invoked with the `new` keyword, constructor functions implicitly return the newly created object. In just a bit, you'll see an example of this.
- **Within the constructor function's body, the `this` keyword references the newly created object.** This allows you to initialize properties on the object.
## Static methods and variables
To add a static method or variable to a class, you can add it as a property on the class itself.

Using the `Book` example, you can add a `getTitles` static method on the `Book` class by adding it as a property on the `Book` constructor function, like so:
```node.js
function Book(title, series, author) {
  this.title = title;
  this.series = series;
  this.author = author;
}

Book.getTitles = function(...books) {
  console.log(this); // Book class (constructor function)
  return books.map(book => book.title);
}

const gobletOfFire = new Book(
  'The Goblet of Fire',
  'Harry Potter',
  'J.K. Rowling'
);
const titles = Book.getTitles(gobletOfFire);
console.log(titles); // ['The Goblet of Fire']
```

**Note**: you cannot use arrow functions to define a static function because the context inside the arrow function will not be the class itself. Can you guess why? Try it out yourself and compare a normal function to an arrow function declaration. If you still don't understand why you can't use an arrow function, formulate and ask a question!
## Instance methods
To add an instance method to a class, you can add it as a property on the `prototype` property of the class.

Using the `Book` example, you can add a `toString` instance method on the `Book` class by adding it as a property on the `prototype` property of the `Book` class.
```node.js
Book.prototype.toString = function() {
  return `${this.title} by ${this.author}`;
};

const gobletOfFire = new Book(
  'The Goblet of Fire',
  'Harry Potter',
  'J.K. Rowling'
);
console.log(gobletOfFire.toString()); // The Goblet of Fire by J.K. Rowling
```
**Note**: instance methods can be added this way to classes that are declared using both ES5 and ES6 syntax. But, like static methods, you cannot set arrow functions as values on the `prototype` object of a class. Try it out for yourself to see why!
## Monkey-patching a class
### What is Monkey-Patching?
**Monkey-patching** is the practice of modifying or extending the behavior of an existing class, object, or function **at runtime**. This is done by adding, replacing, or overriding methods or properties.
In simpler terms:
- You take an existing class or object.
- You "patch" it by adding new functionality or changing its existing behavior.
- This is done **without modifying the original source code** of the class or object.   
---
### Why Use Monkey-Patching?
Monkey-patching is often used for:
1. **Adding missing functionality**: If a class doesn’t have a method you need, you can add it.
2. **Fixing bugs**: If a class has a bug, you can patch it temporarily until an official fix is released.
3. **Extending third-party libraries**: If you’re using a library and want to add custom behavior, monkey-patching allows you to do so without forking or modifying the library itself.
4. **Quick prototyping**: It’s a quick way to experiment with changes without rewriting existing code.
However, **monkey-patching should be used sparingly** because it can lead to:
- Unintended side effects.
- Hard-to-debug issues.
- Conflicts with other code that relies on the original behavior.
---
### Monkey-Patching a Class in JavaScript
Let’s say you have a class, and you want to add a new method or modify an existing one. Here’s how you can do it.
#### Example 1: Adding a New Method to a Class
Suppose you have a `Book` class, and you want to add a new method called `getFullTitle` that returns the book’s title along with its series.

```node.js
class Book {
  constructor(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
  }
}

// Monkey-patching: Adding a new method to the Book class
Book.prototype.getFullTitle = function () {
  return `${this.title} (${this.series})`;
};

// Creating an instance of Book
const gobletOfFire = new Book(
  'The Goblet of Fire',
  'Harry Potter',
  'J.K. Rowling'
);

// Using the new method
console.log(gobletOfFire.getFullTitle()); // "The Goblet of Fire (Harry Potter)"
```
#### Example 2: Modifying an Existing Method
Suppose you want to modify the behavior of an existing method. For example, let’s override the `toString` method of the `Book` class.
```node.js
class Book {
  constructor(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
  }

  toString() {
    return `${this.title} by ${this.author}`;
  }
}

// Monkey-patching: Overriding the toString method
Book.prototype.toString = function () {
  return `${this.title} (${this.series}) by ${this.author}`;
};

// Creating an instance of Book
const gobletOfFire = new Book(
  'The Goblet of Fire',
  'Harry Potter',
  'J.K. Rowling'
);

// Using the overridden method
console.log(gobletOfFire.toString()); // "The Goblet of Fire (Harry Potter) by J.K. Rowling"
```
#### Example 3: Adding a Static Method
You can also monkey-patch static methods (methods that belong to the class itself, not instances).
```node.js
class Book {
  constructor(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
  }
}

// Monkey-patching: Adding a static method
Book.getTitles = function (...books) {
  return books.map(book => book.title);
};

// Creating instances of Book
const gobletOfFire = new Book('The Goblet of Fire', 'Harry Potter', 'J.K. Rowling');
const fellowship = new Book('The Fellowship of the Ring', 'The Lord of the Rings', 'J.R.R. Tolkien');

// Using the static method
const titles = Book.getTitles(gobletOfFire, fellowship);
console.log(titles); // ["The Goblet of Fire", "The Fellowship of the Ring"]
```
### When Not to Use Monkey-Patching
- **In large codebases**: It can make the code harder to understand and maintain.
- **For critical functionality**: It’s better to fix the source code or use proper inheritance or composition.
- **When alternatives exist**: For example, use inheritance (`extends`) or composition (adding functionality to a new class) instead.

