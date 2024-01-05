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
    for (book in myLibrary) {
        console.log(myLibrary.length)
    }
}

const modal = document.getElementById('addBookModal');
const modalButton = document.getElementsByClassName('modalButton')[0];
const closeButton = document.getElementsByClassName("close")[0];
const inputButton = document.getElementById('inputButton');
const inputBox = document.getElementById('inputBox');
const modalForm = document.querySelector('.modalForm');

modalButton.addEventListener('click', openModal, false);
closeButton.addEventListener('click', closeModal, false);
inputButton.addEventListener('click', displayBooks, false);
inputButton.addEventListener('click', closeModal, false);
modalForm.addEventListener('submit', function(event){
    event.preventDefault();
    addBookToArray();
})

displayBooks()