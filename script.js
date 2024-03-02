let myLibrary = [];
let uniqueBookIndex = 0;

function Book(bookIndex, title, author, readStatus) {
    this.uniqueBookIndex = bookIndex;
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
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

function toggleReadStatus() {
    
}

function addBook() {
    bookObject = new Book(uniqueBookIndex, titleInputBox.value, authorInputBox.value, false);
    myLibrary.push(bookObject);

    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.dataset.bookIndex = `${uniqueBookIndex++}`

    const bookTitle = document.createTextNode(bookObject.title);
    const bookAuthor = document.createTextNode(bookObject.author);
    const deleteBookButton = document.createElement('button');
    deleteBookButton.classList.add('delete-button')

    const tickBox = document.createElement('input');
    

    newCard.appendChild(deleteBookButton);
    newCard.appendChild(bookTitle);
    newCard.appendChild(document.createElement('br'));
    newCard.appendChild(bookAuthor);
    cardArea.appendChild(newCard);
    titleInputBox.value = '';
    authorInputBox.value = '';
}

function deleteBook(bookIndex) {
    myLibrary = myLibrary.filter(item => !(item.uniqueBookIndex==bookIndex));
    document.querySelector(`[data-book-index="${bookIndex}"]`).remove();
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
        deleteBook(event.target.parentElement.dataset.bookIndex);
    }
})
modalButton.addEventListener('click', openModal, false);
closeButton.addEventListener('click', closeModal, false);
modalForm.addEventListener('submit', function(event){
    event.preventDefault();
    addBook();
})
