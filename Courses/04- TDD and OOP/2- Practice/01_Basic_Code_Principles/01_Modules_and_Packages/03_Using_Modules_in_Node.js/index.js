const classes = require("./classes");

const Book = classes.Book;
const Movie = classes.Movie;

const theGrapsOfWarth = new Book(
    "The Grapes of Warth",
    null,
    "Ahmed Gamal"

);

const aNewHope = new Movie(
    "Epsiode 4: A New Hope",
    "Star Wars",
    "George Lucas"
);


console.log(theGrapsOfWarth.getInformation());

console.log(aNewHope.getInformation());
