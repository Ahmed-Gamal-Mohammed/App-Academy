class Book{
    constructor(title,series,author){
        this.title = title;
        this.series = series;
        this.author = author;
    }
}

// instance from the class

const fellowshipOfTherRing = new Book(
    'The fellowship of the Ring',
    'The Loard of the Rings',
    'Ahmed Gamal'
);

// console.log(fellowshipOfTherRing);


class Person {
    constructor(firstName) {
      this.firstName = 'Caleb';
    }

    greet() {
      console.log(`${this.firstName} says hello!`);
    }
}

// const kristen = new Person('Kristen');
// console.log(kristen.firstName);


console.log(Person.firstName);


//   Given the code above, what will kristen.firstName return?

//   "Kristen"

//   undefined

//   throw an error

//   "Caleb"
