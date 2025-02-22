// class Dog{
//     constructor(name){
//         this.name = name;
//     }

// }

// class Cat {
//     constructor(name){
//         this.name = name;
//     }

//     purrNTimes(n){
//         for (let i = 0; i < n; i++) {
//             console.log(`${this.name} says: meow`);
//         }
//     }
// }

// let dog = new Dog("Fido");
// let cat = new Cat("Meowser");

// // makes fido meow 5 times using call
// console.log("The following is using call");
// cat.purrNTimes.call(dog,5);


// // makes fido meow 5 times using apply
// console.log("The following is using apply");
// cat.purrNTimes.apply(dog,[5]);


// function eatFruits(...fruits) {
//     return `${this.firstName} ate ${fruits.join(' and ')}`;
//   }

//   class Person {
//     constructor(firstName) {
//       this.firstName = firstName;
//     }
//   }

//   const mylo = new Person('Mylo');
//   console.log(eatFruits.apply(mylo, ['apple', 'orange', 'banana']));


function greeting(...messages) {
    const that = this;
    return messages.map(function(message) {
      return `${that.firstName} says ${message}`;
    });
}

const derek = {
    firstName: 'Derek'
};

const derekMessages = greeting.call(derek, "Hello class!");
console.log(derekMessages("Goodbye class!"));
