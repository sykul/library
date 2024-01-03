const myLibrary = [];

function Book(title) {
    this.title = title;
}

function toggleHidden() {
    inputBox.value = '';
    modal.classList.toggle('hidden');
}

function addBookToArray() {
    myLibrary.push(inputBox.value);
    inputBox.value = '';
}

function displayBooks() {
    
}

const modal = document.getElementById('addBookModal');
const modalButton = document.getElementById('modalButton');
const closeButton = document.getElementsByClassName("close")[0];
const inputButton = document.getElementById('inputButton');
const inputBox = document.getElementById('inputBox')

modalButton.addEventListener('click', toggleHidden, false);
closeButton.addEventListener('click', toggleHidden, false);
inputButton.addEventListener('click', addBookToArray, false);