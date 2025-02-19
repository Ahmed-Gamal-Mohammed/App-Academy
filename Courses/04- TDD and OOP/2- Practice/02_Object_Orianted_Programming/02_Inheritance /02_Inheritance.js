// class Animal{
//     constructor(name,sound){
//         this.name = name;
//         this.sound = sound;
//     }

//     speack(){
//         console.log(this.sound);
//     }

//     static pet(animal){
//         console.log(`You attempt to pet ${animal.name}`);
//     }
// }

// class Dog extends Animal{
//     // Constructor inherited from Anaimal so no need no define one here
//     // if you want to define dog's own constructor you can do the following
//     constructor(name){
//         super(name,"WOOOOOOOOOOOOOOOOOOOOOOOOFFFF");
//     }
// }

// // The now you asked to pass just one parameter
// const fluffy = new Dog("Fluffy");

// fluffy.speack(); // WOOOOOOFF

// Dog.pet(fluffy);// You attempt to pet Fluffy


class Fruit {
    constructor(color, taste) {
      this.color = color;
      this.taste = taste;
    }

    eat() {
      console.log(`You ate a ${this.constructor.name}.`);
    }
  }

  class Apple extends Fruit {
    constructor() {
      super('red', 'sweet');
    }
  }

  const orange = new Fruit('orange', 'tangy');
  const apple = new Apple();

  orange.eat();
