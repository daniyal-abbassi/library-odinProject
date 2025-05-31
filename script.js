//get DOM elements
const bookList = document.getElementById('books');

//array to store books
let booksArray = [];

//Book Object Constructore
function Book(name, author, id) {
    this.name = name;
    this.author = author;
    this.id = id;
}
Book.prototype.sayBook = function () {
    console.log(`book name: ${this.name}, and author is: ${this.author}`)
}


//add a function for creating and storing books to array with specific id
const createAndSave = (name, author) => {
    //random new id
    let newId = crypto.randomUUID();
    //create with Object constructor
    let newBook = new Book(name, author, newId);
    //add to array
    booksArray.push(newBook);
}
createAndSave('animal farm', 'gorge orowell')
createAndSave('1984', 'george orwell')
createAndSave('the great gatsby', 'f scott fitzgerald')
createAndSave('the catcher in the rye', 'j d salinger')
createAndSave('the lord of the rings', 'j r r tolkien')


//loop throght books and render them on page
booksArray.forEach((book) => {
    //get the book details
    let bookName = book.name;
    let bookAuthor = book.author;
    let bookId = book.id;
    //create a container 
    let bookDiv = document.createElement('div');
    //fill the container with data
    bookDiv.innerHTML += `
    <p  class="bookName" data-book-id="${bookId}">name: <span>${bookName}</span></p>
    <p class="bookAuthor">author: <span>${bookAuthor}</span></p>
    `;
    //add to books list
    bookList.appendChild(bookDiv)
})

//buttons to add and delete and edit read status for books
//get the dialog elements
const openDialogBtn = document.getElementById('add-book');
const cancelBtn = document.getElementById('cancel-btn');
const addBookBtn = document.getElementById('add-btn');
const inputBookName = document.getElementById('book-name').value;
const inputBookAuthor = document.getElementById('book-author').value;
//add eventListener for open dialog

//add eventListener for submitting dialog

//add eventListener for cancelling dialog