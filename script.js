const myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function openModal() {
    titleInputBox.value = '';
    authorInputBox.value = '';
    modal.showModal();
}

function closeModal() {
    titleInputBox.value = '';
    authorInputBox.value = '';
    modal.close();
}

function addBookToArray() {
    bookObject = new Book(titleInputBox.value, authorInputBox.value);
    myLibrary.push(bookObject);
    titleInputBox.value = '';
    authorInputBox.value = '';
}

function addBookToDisplay() {
    
}

function deleteBook(bookIndex) {
    return myLibrary.splice(bookIndex, 1)
}

function displayBooks() {
    const cardAreaChildren = document.querySelectorAll('.card-area > div');
    cardAreaChildren.forEach((element) => element.remove());
    myLibrary.forEach((book, index) => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('card');
        const bookTitle = document.createTextNode(book.title);
        const bookAuthor = document.createTextNode(book.author);
        const deleteBookButton = document.createElement('button');
        newDiv.appendChild(deleteBookButton);
        newDiv.appendChild(bookTitle);
        newDiv.appendChild(document.createElement('br'));
        newDiv.appendChild(bookAuthor);
        cardArea.appendChild(newDiv);
        deleteBookButton.addEventListener('click', (e) => {
            deleteBook(index);
            displayBooks();
        })
    })
}

const modal = document.querySelector('#addBookModal');
const modalButton = document.querySelector('.modalButton');
const closeButton = document.querySelector(".close");
const inputButton = document.querySelector('#inputButton');
const titleInputBox = document.querySelector('#titleInputBox');
const authorInputBox = document.querySelector('#authorInputBox');
const modalForm = document.querySelector('.modalForm');
const cardArea = document.querySelector('.card-area');

modalButton.addEventListener('click', openModal, false);
closeButton.addEventListener('click', closeModal, false);
modalForm.addEventListener('submit', function(event){
    event.preventDefault();
    addBookToArray();
    displayBooks();
})