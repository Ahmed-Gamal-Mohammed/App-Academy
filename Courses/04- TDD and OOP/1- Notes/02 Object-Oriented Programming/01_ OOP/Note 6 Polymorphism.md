# What is Polymorphism?
- **Polymorphism** is having several shapes or forms 
- In OOP,**Polymorphism** refers to processing various data types and classes through a single, uniform interface 
- The Two most common types of Polymorphism are **Overloading** and **Overriding**

1. **Function Overloading** refers to sending a different number or type of parameters to a particular function 
		Consider `sum(number1, number2)` and `sum(listOfNumbers)`. The first accepts two numeric parameters; the second, an array of numbers. The returned value from both is the total calculated by adding up all the numbers provided. Each version of parameters needs a different implementation (`number1 + number2` vs. a for-loop). Therefore, this is an example of **polymorphism**.
2. **Function overriding** is when a child class gives its own - or a variation of the implementation of a function from one of its ancestor classes (usually the parent).

## A built-in example of polymorphism
**Polymorphism** in OOP: is the idea that one method can have a different implementation even though it has the same name because the result is equivalent 

All objects in JavaScript share a common parent class, the `Object` parent class. The `Object` class has a method named `toString()` on it. Since all objects in JavaScript are child classes (or grandchild classes or great-grandchild classes or great-great-...), that means that every object in JavaScript has a `toString()` method

if a class doesn't create its own, then it will fall back to its parent class' implementation of `toString()` if the parent class doesn't have an implementation, and the parent's patent class doesn't have an implementation. it will keep going until it gets to the `Object` class and use that one. (That's some recursion in there. Did you sense that?)

```node.js
> [1, 2, 3].toString();  
'1,2,3'  

> "some text".toString();  
'some text'  

> new Date().toString();  
'«the current date and time»'  

> new Object().toString();  
[object Object]
```
You'll notice the following:

- The `toString()` method of an array takes the values in the array and turns them into a comma-delimited string; that is, it puts commas between each of the items.
- The `toString()` method of a string does nothing and just returns the string object (you might remember that strings are primitive types, but strings are special, and you can also call methods on them like they are objects)
- The `toString()` method of a `Date` object returns a long textual representation of the date and time which the `Date` object represents.
- The `toString()` method of `Object` returns "[object Object]" because that's all it knows about itself.

If you feel like `[object Object]` is less-than-useful, you can overload the `toString()` method in your classes
### Another example of polymorphism

Now, consider those pens with erasers. The way they erase is similar to a stand-alone eraser or a pencil. The end result of erasing is to undo a mistake.

Some pens do not have erasers. If you want to erase a mistake you need something like white-out.

So, the `WritingInstrument` class could inherit from `Eraser`.

Now, both `Pen` and `Pencil` may inherit from `Writing Instrument` and they will be able to erase. Cool!

Another class, perhaps `CalligraphyPen`, could then inherit from `Pen` and replace the `erase()` method with an implementation using white-out. This is what **polymorphism** is all about! Accomplishing the same result (undesired mark no longer visible a.k.a. `erase()`) in another fashion by changing or "morphing" the implementation appropriately for each class (`Eraser`, `WritingInstrument`, and `CalligraphyPen`).

## Overriding parent methods
**Polymorphism** is when a child class overrides a method of its parent (or has a method with the same name as another class to get the same result with a different "how").

To override a method of a parent class in JavaScript, you can simply create a method in the child class with the same name as the parent method you want to override.

For example, to override `Animal` class' `speak` method in the `Dog` class, you simply add a `speak` method in the `Dog` class.
```node.js
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  speak() {
    console.log('bark bark');
  }
}

const fluffy = new Dog('Fluffy', 'woof');
fluffy.speak(); // bark bark
```
You can overwrite static methods in a similar way 

# implementation of polymorphism and Inheritance 
Imagine that you have created the following code in a JavaScript file 
```node.js
// will be child of Object class
class Charity {}

// will be child of Object class
class Business {
  toString() { return 'Give us your money.'; }
}

class Restaurant extends Business {
  toString() { return 'Eat at Joe\'s!'; }
}

class AutoRepairShop extends Business {}

class Retail extends Business {
  toString() { return 'Buy some stuff!'; }
}

class ClothingStore extends Retail {}

class PhoneStore extends Retail {
  toString() { return 'Upgrade your perfectly good phone, now!'; }
}

console.log(new PhoneStore().toString());
console.log(new ClothingStore().toString());
console.log(new Restaurant().toString());
console.log(new AutoRepairShop().toString());
console.log(new Charity().toString());
```

Output 
```termial
Upgrade your perfectly good phone, now!
Buy some stuff!
Eat at Joe's!
Give us your money.
[object Object]
```

The two class `PhoneStore` and `Restaurant` use **polymorphism** to overloaded the `toString()` function, so their specific messages are printed.

The three classes `AutoRepairShop`, `Charity`, and `ClothingStore` do not have their own `toString()` methods. That means that an object of one of those three types can't immediately respond to that method invocation. The JavaScript runtime at that point starts inspecting parent objects (following the **inheritance** chain) to find a `toString()` method.

- For `AutoRepairShop`, it finds a `toString()` method on its parent class `Business`, and prints "Give us your money.".
- For `ClothingStore`, it finds a `toString()` method on its parent class `Retail`, and prints "Buy some stuff!".
- For `Charity`, it finds a `toString()` method on its implicit parent class `Object`, and prints **[object Object]**.




