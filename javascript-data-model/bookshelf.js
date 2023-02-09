var bookshelf = [
  {
    isbn: '978-1491929483',
    title: 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    isbn: '978-0692232699',
    title: 'Build APIs You Won\'t Hate: Everyone and their dog wants an API, so you should probably learn how to build them',
    author: 'Phil Sturgeon & Laura Bohill'
  }
];

console.log('Bookshelf.js : ');
var indexNumber = 1;
var bookNumber = indexNumber + 1;
var authorName = bookshelf[indexNumber].author;
var bookName = bookshelf[indexNumber].title;
var isbnNumber = bookshelf[indexNumber].isbn;
/* log the name of the author of the second book to the console with a descriptive label */
console.log('Book #: ', bookNumber, '\nAuthor : ', authorName);

/* log the ISBN of the first book to the console with a descriptive label.  */
indexNumber = 0;
bookNumber = indexNumber + 1;
bookName = bookshelf[indexNumber].title;
isbnNumber = bookshelf[indexNumber].isbn;
console.log('Book #: ', bookNumber, '\nISBN: ', isbnNumber);

/* log the title of the third book to the console with a descriptive label.  */
indexNumber = 2;
bookNumber = indexNumber + 1;
bookName = bookshelf[indexNumber].title;
isbnNumber = bookshelf[indexNumber].isbn;
authorName = bookshelf[indexNumber].author;
console.log('Book #: ', bookNumber, '\nTitle: ', bookName);
