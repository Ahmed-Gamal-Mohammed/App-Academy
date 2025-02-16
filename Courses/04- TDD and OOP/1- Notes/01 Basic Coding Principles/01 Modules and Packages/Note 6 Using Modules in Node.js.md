# Introducing Node.js modules
In Node.js, each JavaScript file in a project defines a **module**.

Modules defined within your project are known as **local modules**. Ideally, each local module has a single purpose that's focused on implementing a single bit of functionality.

## The CommonJS module system
Recent versions of Node.js actually contain two different module systems. The original module system known as _CommonJS_, and a newer module system known as _ECMAScript Modules_ or simply _ES Modules_. Conceptually, CommonJS and ES Modules are similar, but their syntax and implementation details differ a bit.

ES Modules will eventually replace CommonJS, but the transition won't happen overnight. Due to the amount of legacy Node.js code that exists, you will see **CommmonJS** modules quite often in Node.

## Adding a local module to a Node.js application
To add a local module to a Node application, simply add a new JavaScript file (`.js`) to your project! You can locate the file in the root of the project or within a folder or a nested folder.

The `classes` module will define the classes for a simple library catalog application, which will be used to track a library's catalog of books and movies.

Here's the code for the `CatalogItem`, `Book`, and `Movie` classes:
```node.js
class CatalogItem {
  constructor(title, series) {
    this.title = title;
    this.series = series;
  }

  getInformation() {
    if (this.series) {
      return `${this.title} (${this.series})`;
    } else {
      return this.title;
    }
  }
}

class Book extends CatalogItem {
  constructor(title, series, author) {
    super(title, series);
    this.author = author;
  }
}

class Movie extends CatalogItem {
  constructor(title, series, director) {
    super(title, series);
    this.director = director;
  }

  getInformation() {
    let result = super.getInformation();

    if (this.director) {
      result += ` [directed by ${this.director}]`;
    }

    return result;
  }
}
```

The `CatalogItem` class represent an item in the library's catalog, The `CatalogItem` class serves as the parent class to the `Book` and `Movie` classes, Which respectively represents books and movies in the library's catalog

## Exporting from a module
Code contained within a module (JavaScript file) is private by default, meaning it's only accessible to other code contained with that module (file). If you attempted to reference the `Book` or `Movie` classes in another file, like **index.js**, you'd get a runtime error.

The `index.js` file is typically the entry point for an application. A Node application's _entry point_ is the file that's passed to the `node` command (i.e. `node index.js`) when starting an application from the terminal.

To make the `Book` and `Movie` classes accessible to other modules in your application, you need to export them.

Each module in Node has access to a `module` object that represents the current module. The `module` object contains a number of properties that provide information about the current module. One of those properties, the `module.exports` property, is used to export items from the module.

### Option A: Set properties on the `module.exports` object
One way to export an item is to define a property for that item on the `module.exports` object:
```node.js
// classes.js

class CatalogItem {
  // Contents removed for brevity.
}

class Book extends CatalogItem {
  // Contents removed for brevity.
}

class Movie extends CatalogItem {
  // Contents removed for brevity.
}

// Export the Book and Movie classes
module.exports.Book = Book;
module.exports.Movie = Movie;
```
Node initializes the `module.exports` property to an empty object. If you don't declare and initialize any properties on the `module.exports` object, then nothing will be exported from the module.

The `module.exports` property names don't need to match the class names. However, it makes sense to keep the property names consistent with the class names so they are easier to remember and find later if you need to update them.

### Option B: Assigning an object to the `module.exports` property

Instead of defining properties on the `module.exports`property, you can assign a new object that contains a property for each item that you want to export
```node.js
classes.js

class CatalogItem{
	// Contents removed for brevity.
}

class Book extends CatalogItem {
  // Contents removed for brevity.
}

class Movie extends CatalogItem {
  // Contents removed for brevity.
}

// Export the Book and Movie classes
module.exports = {
  Book,
  Movie
};
```
Both approaches will look the same to the consumers of the module, so choosing which approach to use is a stylistic choice.
### Option C: The `exports` shortcut
Occasionally, you will see `exports` without the `module.` in front of it. That's because Node provides an `exports` variable that's initialized to the `module.exports` property value. You can use the `exports` variable as a shortcut:
```node.js
// classes.js

class CatalogItem {
  // Contents removed for brevity.
}

class Book extends CatalogItem {
  // Contents removed for brevity.
}

class Movie extends CatalogItem {
  // Contents removed for brevity.
}

// Export the Book and Movie classes
exports.Book = Book;
exports.Movie = Movie;
```
While this is handy, it's important to note that you can't use the `exports` variable if you want to assign a new object. That's because it will break the linkage to `module.exports`.

Because of this issue, some developers and teams prefer to use the `module.exports` property exclusively and ignore that the `exports` shortcut exists.


### Abstraction
Notice that the `CatalogItem` class is NOT exported. That is intentional. The `CatalogItem` class is the parent class for the `Book` and `Movie` classes. It can and should stay private to this module. In case you are curious, keeping functions and classes "hidden" (a.k.a. private) within modules is an example of the **abstraction** pillar of OOP.

## Importing from a module
Now that you have two classes exported in your module, you probably want to use them in your application. For example, the code for the application's entry point, `index.js`, could look like this:
```node.js
// index.js
const theGrapesOfWrath = new Book(
  "The Grapes of Wrath",
  null,
  "John Steinbeck"
);
const aNewHope = new Movie(
  "Episode 4: A New Hope",
  "Star Wars",
  "George Lucas"
);

console.log(theGrapesOfWrath.getInformation()); // The Grapes of Wrath
console.log(aNewHope.getInformation()); // Episode 4: A New Hope (Star Wars) [directed by George Lucas]
```
If you attempted to run your application using the command `node index.js`, you'd receive the following error 
`ReferenceError: Book is not defined`

You are attempting to instantiate an instance of the `Book` class, but that class is defined in the `classes` module (defined by `classes.js`)  not the `index` module (The module defined by the `index.js` file)

Each module needs to explicitly state what it needs from other modules. When a module needs something from another module, it's said to be **dependent** on that module. A module's dependencies are the other models that are required for it to run property 

Another way to think of a dependency is as a `requirement` 

### The `require()` function 
The `index` module is dependent upon the `Book` and `Movie` classes, so you need to import them from the `classes` module 

To do that, use the `require()` function 
```node.js
const classes = require("./classes");
```

When importing a local module, you pass to the `require()` function a path to the module: `./classes`. The dot in the path means to start in the current folder and look for a module named `classes`. The module name is the name of the file without the `.js` file extension.

You can optionally include the `.js` file extension after the module name, but most of the time it's omitted.

Then to make your code easier to read, declare constants for the two properties that you are using from the `classes` module.

```node.js
const Book = classes.Book;
const Movie = classes.Movie;
```
Remember that the `classes` module exported an object (`module.exports`) with two properties, `Book` and `Movie`, which reference the `Book` and `Movie` classes defined within the `classes` module. The object that the `classes` module exports is what's returned from the `require()` function call and captured by the `classes` variable

### Simplifying imports using destructuring
Instead of declaring a variable for the module that you're importing and then declaring a variable for each individual item that the module exports, you can use destructuring to condense that code to a single statement:
```node.js
const { Book, Movie } = require("./classes");
```
Which would replace all of this:

```node.js
// Use the `require()` function to import the `classes` module.
const classes = require("./classes");

// Declare variables for each of the properties
// defined on the `classes` object.
const Book = classes.Book;
const Movie = classes.Movie;
```

Either approach works fine, so this is one of the many stylistic choices you'll make as a developer.
