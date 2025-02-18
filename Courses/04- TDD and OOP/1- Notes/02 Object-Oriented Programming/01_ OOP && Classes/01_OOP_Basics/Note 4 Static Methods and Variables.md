# Static Methods
Static methods **cannot be called on instances**.

As opposed to instance methods, static methods are invoked directly on a class, not on an instance. Hence, they are also referred to as _class methods_. The syntax for defining a static method is the same as an instance method except their declarations start with the `static` keyword.

Here's an example of a static method named `getTitles()`. It needed to be static because it handles potentially many `Book` instances (not just one).
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

 // Static method that accepts a variable number
 // of Book instances and returns an array of their titles.
 // Notice the use of a rest parameter (...books)
 // to capture the passed parameters as an array of values.
 static getTitles(...books) {
   return books.map((book) => book.title);
 }
}

const fellowshipOfTheRing = new Book(
 'The Fellowship of the Ring',
 'The Lord of the Rings',
 'J.R.R. Tolkien');

const theTwoTowers = new Book(
 'The Two Towers',
 'The Lord of the Rings',
 'J.R.R. Tolkien');

// Call the static `Book.getTitles()` method
// to get an array of the book titles.
const bookTitles = Book.getTitles(fellowshipOfTheRing, theTwoTowers);

console.log(bookTitles.join(', '));
```

Output 
```terminal
 The Fellowship of the Ring, The Two Towers
```
The `getTitles()` static method accepts any number of `Book` instances and returns an array of their titles.

Because static methods aren't invoked on an instance, they can't use the `this` keyword to access an instance. You can pass one or more instances into a static method via a method parameter, which is exactly what the above `getTitles()` method does. This allows static methods to perform actions across groups of instances.

Static methods can also be used to perform "utility" actions—actions that are independent of any specific instances but are related to the object type in some way. For example, a comparison function that could used with array sorting.

### **Static Methods and the `this` Keyword**

- Static methods belong to the class itself rather than an instance (object) of the class.
- Since they are **not called on an instance**, they **don’t have access to `this`**, which usually refers to the specific object that called a method.
- Instead of relying on `this`, you can **pass instances as arguments** to a static method.

### Common Uses of Static Methods
As you may recall, the `Math` functions are called starting with the class name. That is because the `Math` object actually consists only of static methods.
```node.js
console.log(Math.random());
console.log(Math.max(511, 115));
```
Notice how the methods `random` and `max` are called directly on the `Math` class object, not an instance.

# Static Variables
Similar to static methods, static variables, or properties, are not accessible via class instances, but rather are accessed directly from the class. Static variables, unlike instance variables, aren't declared inside the constructor method. Instead, they are declared like static methods using the `static` keyword, followed by the variable name and value assignment.

Static variables are useful in caching information about the class, configurations associated with the class, or just any data you don't need replicated across instances.

Here's an example of a static variable, `numBooks`, that tracks the number of `Book` instances that are created:
```node.js
class Book {
    constructor(title, series, author) {
        this.title = title;
        this.series = series;
        this.author = author;

        /* Incrementing the static variable every time a new Book is created
          Notice it is called using the same convention as you would with
          a class method, even still while within the class itself. */
        Book.numBooks += 1;
    }

    /* Static variable is declared like a normal variable except with the
      static keyword */
    static numBooks = 0;
}

const fellowshipOfTheRing = new Book(
 'The Fellowship of the Ring',
 'The Lord of the Rings',
 'J.R.R. Tolkien');

const theTwoTowers = new Book(
 'The Two Towers',
 'The Lord of the Rings',
 'J.R.R. Tolkien');

console.log(Book.numBooks)      // 2
```

In the above example, `numBooks` should be incremented each time the constructor method is run, or in other words, whenever a new `Book` instance is created. After creating two new `Book` objects, printing `numBook` indeed shows a value of 2.


