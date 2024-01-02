const myLibrary = [];

function Book(title) {
    this.title = title;
}

function addBookToLibrary() {
    modal.classList.toggle('hidden');
}

const modal = document.getElementById('addBookModal');
const modalButton = document.getElementById('modalButton');
modalButton.addEventListener('click', addBookToLibrary, false);