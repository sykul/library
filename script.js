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
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        const bookTitle = document.createTextNode(book.title);
        const bookAuthor = document.createTextNode(book.author);
        const deleteBookButton = document.createElement('button');
        deleteBookButton.classList.add('delete-button')
        newCard.classList.add('card');
        newCard.dataset.bookIndex = `${index}`
        newCard.appendChild(deleteBookButton);
        newCard.appendChild(bookTitle);
        newCard.appendChild(document.createElement('br'));
        newCard.appendChild(bookAuthor);
        cardArea.appendChild(newCard);
/*         deleteBookButton.addEventListener('click', (e) => {
            deleteBook(index);
            displayBooks();
        }) */
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

cardArea.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-button')) {
        console.log(event.target.parentElement.dataset.bookIndex);
    }
})
modalButton.addEventListener('click', openModal, false);
closeButton.addEventListener('click', closeModal, false);
modalForm.addEventListener('submit', function(event){
    event.preventDefault();
    addBookToArray();
    displayBooks();
})
