//get DOM elements
const bookList = document.getElementById('books');

//array to store books
let booksArray = [];

//Book Object Constructore
function Book(name,author,id) {
    this.name = name;
    this.author = author;
    this.id = id;
}
Book.prototype.sayBook = function() {
   console.log(`book name: ${this.name}, and author is: ${this.author}`)
}


//add a function for creating and storing books to array with specific id
const createAndSave = (name,author) => {
    //random new id
    let newId = crypto.randomUUID();
    //create with Object constructor
    let newBook = new Book(name,author,newId);
    //add to array
    booksArray.push(newBook);
}

// booksArray.map(book=>console.log(book.name,book.author,book.id))
//buttons to add and delete and edit read status for books

//loop throght books and render them on page