class CatalogItem{
    constructor(title,series){
        this.title = title;
        this.series = series;
    }

    getInformation(){
        if (this.series) {
            return `${this.title} (${this.series})`;
        }else{
            return this.title;
        }
    }
}

class Book extends CatalogItem{
    constructor(title,series,author){
        super(title,series);
        this.author = author;
    }
}

class Movie extends CatalogItem{
    constructor(title,series,director){
        super(title,series);
        this.director = director;
    }

    getInformation(){
        let result = super.getInformation();

        if (this.director) {
            result += `[directed by ${this.director}]`;
        }

        return result;
    }
}


// Option one to export model
// module.exports.Book = Book;
// module.exports.Movie = Movie;


// Option Two to export , Use it
module.exports = {
    Book,
    Movie
};


//
// Option three Export the Book and Movie classes (don't use it)
// exports.Book = Book;
// exports.Movie = Movie;
