const myLibrary = [];

function Book(title) {
    this.title = title;
}

function addBookToLibrary() {
    let userInput = document.getElementById('inputField').value;
    alert(userInput);
}

const subButton = document.getElementById('subButton');
subButton.addEventListener('click', addBookToLibrary, false)