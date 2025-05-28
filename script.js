//get DOM elements
const bookList = document.getElementById('books');

//array to store books
let booksArray = [];

//Book Object Constructore
function Book(name,author) {
    this.name = name;
    this.author = author;
}
Book.prototype.sayName = function() {
    console.log(`the Author of ${this.name} is ${this.author} .`)
}
const book1 = new Book('novel','Erick');

//add methods for creating and storing books to array with specific id

//buttons to add and delete and edit read status for books

//loop throght books and render them on page