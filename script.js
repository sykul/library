const myLibrary = [];

function Book(title) {
    this.title = title;
}

function openModal() {
    inputBox.value = '';
    modal.showModal();
}

function closeModal() {
    inputBox.value = '';
    modal.close();
}

function addBookToArray() {
    myLibrary.push(inputBox.value);
    inputBox.value = '';
}

function displayBooks() {
    const cardAreaChildren = document.querySelectorAll('.card-area > div');
    cardAreaChildren.forEach((element) => element.remove());
    for (const book in myLibrary) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('card');
        const bookTitle = document.createTextNode(myLibrary[book]);
        newDiv.appendChild(bookTitle);
        cardArea.appendChild(newDiv);
    }
}

const modal = document.querySelector('#addBookModal');
const modalButton = document.querySelector('.modalButton');
const closeButton = document.querySelector(".close");
const inputButton = document.querySelector('#inputButton');
const inputBox = document.querySelector('#inputBox');
const modalForm = document.querySelector('.modalForm');
const cardArea = document.querySelector('.card-area');

modalButton.addEventListener('click', openModal, false);
closeButton.addEventListener('click', closeModal, false);
/* inputButton.addEventListener('click', displayBooks, false); */
/* inputButton.addEventListener('click', closeModal, false); */
modalForm.addEventListener('submit', function(event){
    event.preventDefault();
    addBookToArray();
    displayBooks();
})

displayBooks()