const myLibrary = [];

function Book(title) {
    this.title = title;
}

function addBookToLibrary() {
    modal.classList.toggle('hidden');
}

const modal = document.getElementById('addBookModal');
const modalButton = document.getElementById('modalButton');
const span = document.getElementsByClassName("close")[0];
modalButton.addEventListener('click', addBookToLibrary, false);

span.onclick = function() {
    modal.classList.toggle('hidden');
}