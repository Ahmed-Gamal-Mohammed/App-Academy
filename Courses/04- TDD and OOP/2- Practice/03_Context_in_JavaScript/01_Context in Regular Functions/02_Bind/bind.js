// // Syntax
// // let boundFunc = func.bind(context);


// class Cat {
//     purr(){
//         console.log("Meow");
//     }

//     purrMore(){
//         this.purr();
//     }
// }

// let cat = new Cat();

// let sayMewo = cat.purrMore;
// // sayMewo(); // TypeError : this.purr is not a function

// // You can now use the built in function.bind to ensure your context is tha cat object
// let boundCat = sayMewo.bind(cat);

// boundCat(); // Prints Mewo


class Cat{
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(this.name);
    }
}

let cat = new Cat("Meowser");

class Dog{
    constructor(name){
        this.name = name;
    }
}

let dog = new Dog("Fido");

let sayNameFunc = cat.sayName;

let sayHelloCat = sayNameFunc.bind(cat);
sayHelloCat(); // prints Mewosor

let sayHelloDog = sayNameFunc.bind(dog);
sayHelloDog(); // prints Fido



function hello(){
    return `Hello ${this.firstName}`; // this refer now to global object which return undefined
}

const derek = {
    firstName:'Derek'
};

// console.log(hello.bind(derek)());
const helloDerek = hello.bind(derek);
console.log(helloDerek());


function greeting(...messages) {
    const that = this;
    return messages.map(function(message) {
      return `${that.firstName} says ${message}`;
    });
}


  const derekMessages = greeting.bind(derek, "Hello class!");
  console.log(derekMessages("Goodbye class!"));
