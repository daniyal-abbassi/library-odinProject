//get DOM elements
const bookList = document.getElementById('books');
//get the dialog elements
const dialogBox = document.querySelector('dialog');
const openDialogBtn = document.getElementById('add-book');
const cancelBtn = document.getElementById('cancel-btn');
const addBookBtn = document.getElementById('add-btn');
let inputBookName = document.getElementById('book-name');
let inputBookAuthor = document.getElementById('book-author');

//array to store books
let booksArray = [];

//Book Object Constructore
function Book(name, author, id) {
    this.name = name;
    this.author = author;
    this.id = id;
}

//add a function for creating and storing books to array with specific id
const createAndSave = (name, author) => {
    
    //random new id
    let newId = crypto.randomUUID();
    //create with Object constructor
    let newBook = new Book(name, author, newId);
    //add to array
    //check for existing book
    booksArray.push(newBook);
    console.log(booksArray)
}


//buttons to add and delete and edit read status for books

//add eventListener for open dialog
openDialogBtn.addEventListener('click', () => {
    dialogBox.showModal();
    inputBookName.value = '';
    inputBookAuthor.value = '';
})
addBookBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let bookName = inputBookName.value;
    let bookAuthor = inputBookAuthor.value;
    createAndSave(bookName, bookAuthor);
    dialogBox.close();
    //render only the just created one
    addToDOM(booksArray.slice(-1));
})
//add eventListener for submitting dialog

//add eventListener for cancelling dialog

//loop throght books and render them on page
const addToDOM = (array) => {
    array.forEach((book) => {
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
}
