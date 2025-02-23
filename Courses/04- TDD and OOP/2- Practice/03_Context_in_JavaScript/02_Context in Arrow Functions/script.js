// Defining a class method as an arow function
class Dog{
    constructor(name){
        this.name = name;
    }

    bark = () => {
        console.log(`${this.name} barked at you`);
    }
}

const fido = new Dog("Fido");
fido.bark(); // Fido barked at you

const fidoBark = fido.bark;
fidoBark(); // Fido barked at you
