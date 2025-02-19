# What is Inheritance ?
The dictionary definition of inheritance is "derived from one's ancestors". In the same way that biology passes traits of a parent organism to its descendants, so does object-oriented programming through its support of **inheritance**.

Conceptually, a class can be split into two parts:
- Interface: how other code "sees" the class
- Implementation: how the class actually does what it does

In other words, an interface is just a "signature with no body". A class is a **subtype** of an interface when it implements that interface. The language used is often "is a". Imagine an interface for `Car`. Then you could say, a `Porsche` "is a" `Car`.

JavaScript does not use interfaces, therefore it does not have "interface inheritance" or "subtyping". Instead, JavaScript strictly uses **implementation inheritance**.

## Implementation inheritance
_Implementation inheritance_ means that the properties and methods defined on a parent class are available on objects created from classes that inherit from those parent classes. This also means a child class has access to all the implementation (the doing) that was written in its parent class.

So consider a `WritingInstrument` class as a parent of both the `Pencil` and `Pen` child classes. The benefit here is that the action of "writing" is (mostly) the same whether you are using a pen or pencil. Since writing is a complex task, it would be nice to only have to learn (or code) it one time.### Multiple inheritance

## Multiple inheritance
Some programming languages allow developers to specify more than one parent for a class. This is called **multiple inheritance**.

So then an `Eraser` class could have a property such as `size` and a method such as `erase`. There are times an instance of `Eraser` is useful. Additionally, `Pencil` can inherit from both the `Writing Instrument` and `Eraser` classes.

**Some languages, like JavaScript, do NOT support multiple inheritance**. Remember, you will have the opportunity study and practice OOP concepts in more depth in the future.

# Inheritance Class Syntax 
## Syntax
When you declare a class with no explicit parent class, then JavaScript will make it a child of `Object`
```node.js
class MyClass{}

// is the same as 
class MyClass extands Object{}
```

if you want to inherit from a parent class other than `Object` you can use the `extands` keyword to declare a specific parent class for a child class to inherit from 

```node.js
class MyClass{}

class MyChildClass extands MyClass{}
```

## Inheriting Methods 
When a child class extends, or inherit from, a parent class, it inherit the methods of the parent class, This means that you can use all methods defined in the parent class in the methods of the child class 

For example, if a class `Animal` is defined with `constructor` and `speak` instance methods and a `pet` static method, Then any class, like `Dog`, that extends it will be able to use those methods 
```node.js
class Animal{
	constructor(name,sound){
		this.name = name;
		this.sound = sound;
	}

	speak(){
		console.log(this.sound);
	}

	static pet(animal){
		console.log(`You attempt to pet ${animal.name}`);
	}
}

class Dog extands Animal{
	// constructor inherited from Animal so no need to define one here 
}

const fluffy = new Dog("Fluffy", "WOOOOFFF");

fluffy.speak(); // WOOOOFFF

Dog.pet(fluffy); // You attempt to pet Fluffy
```

### `Super`
If you want to define a new `constructor` method in the child class but still use the code in the `constructor` method of the parent class, you can use the `super` function inside of the child class' `constructor` method to call the `constructor` method of the parent class.

Using the previous `Animal` example, instead of passing the `woof` sound on any `Dog` initiation, let's say you want all `Dog`s created to have a sound of `woof` by default. To do this without changing the `constructor` of the `Animal` class, you can create a `constructor` in the `Dog` class with just the `name` parameter. Inside of the `Dog` `constructor`, you can call the `constructor` class of the `Animal` using the `super` function and pass in the `name` parameter along with the `woof` sound.

```node.js
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(this.sound);
  }

  static pet(animal) {
    console.log(`You attempt to pet ${animal.name}`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, 'woof');
  }
}

const fluffy = new Dog('Fluffy'); 
fluffy.speak(); // woof
Dog.pet(fluffy); // You attempt to pet Fluffy
```

Now, you can instantiate a new `Dog` with just a `name`. The `sound` will be `woof` for any `Dog`. However, couldn't you have just copied the code from `Animal`'s `constructor` into `Dog`'s `constructor` to achieve the same thing?

```node.js
// for hypothetical purposes only
class Dog extends Animal {
  constructor(name) {
    this.name = name;
    this.sound = 'woof';
  }
}
```
Sure, you could have achieved the same thing and the code would still run the same way. But this breaks the DRY principle! Make sure that you are not repeating code as much as possible. If you change the `Animal`'s `constructor` method, you have to update and change the `Dog`'s `constructor` method. DRY up your code whenever possible!

**Note: the `super` function can only be called inside of a `constructor` method.**
