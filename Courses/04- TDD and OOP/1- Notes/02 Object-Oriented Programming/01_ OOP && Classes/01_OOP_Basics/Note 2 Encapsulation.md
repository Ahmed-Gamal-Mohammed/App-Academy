# What is Encapsulation?
The dictionary definition of encapsulate is **To enclose ( something) in or as if in a capsule**.
**Encapsulation** in OOP means to put behavior and data together behind an `API`that hides the implementation details The Code that uses the object doesn't need to know how it works to use it. The Complexity is hidden inside of a `black box`

### Classes and constructors
The specification or definition of an object with properties and methods is called a **class**. You can think of a **class** like a blueprint or computer model for a car or car part. The **class** specifies the framework of the **properties** and **methods** (that is, data and actions). This is similar to how a function definition is just the framework of the function; whereas nothing happens until the function has been called. Likewise, a class is just a framework until it is **instantiated**.

A specific object made from a class is called an **instance**. For example, if you imagine a class `Computer`, then the device you are using to read this article is a specific **instance** of `Computer`. The Porsche in your driveway (it's good to dream big!) would be an instance of a `Vehicle` class.

When a class is instantiated, there might be certain actions to do or data values to set right away. A special method called a **constructor** handles this setup. For one of the car parts in the analogy above, the actions of the constructor are quite literal - that is, to create the part - and in the factory the worker is said to "construct" the piece.


When you write a class, you put behavior (known as methods) and the data it works on (known as **properties** or **instance variables**, or **fields** or **members**) together. With classes, you can deal with code that declares data structures in the same place as code that modifies them.

Without classes, a programmer might have to deal with code that declares data structures in one file and use them in multiple other files all over the code base. Understanding where data got changed becomes exponentially difficult as the size of software grows - UNLESS classes are used to "black box" the changes to a specific structure all in one central place.

### Classes vs JavaScript Objects
In strictest terms, an **object class** is the definition of an object, and an **object instance** is a use of that object. Quite often developers loosely use the generic term "object" to refer to either or both. Or sometimes "object" means a data structure with key-value storage represented by curly-braces (a.k.a. POJO - Plain Old JavaScript Object).


You will quickly learn to tell the difference based on the context. For example, "object" means "object class" whenever discussing how data is stored and changed within the object (that is, the properties & methods); and "object" means the "object instance" (or "instance of an object") whenever speaking of a specific, individual use of the object class.

