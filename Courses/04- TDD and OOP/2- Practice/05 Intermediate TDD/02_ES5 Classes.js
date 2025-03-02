// function Book(title,series,author){
//     this.title = title;
//     this.series = series;
//     this.author = author;
// }

// Book.getTitles = function(...books){
//     console.log(this);
//     return books.map(book => book.title);
// }

// const gobletOfFire = new Book(
//     'The Goblet of Fire',
//     'Harry Potter',
//     'J.K. Rowling'
// );

// const titles = Book.getTitles(gobletOfFire);
// console.log(titles); // ['The Goblet of Fire']


String.prototype.addExclamation = function() {
    return this + '!';
  }

  console.log("Hello World".addExclamation());
