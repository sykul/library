let myLibrary = [];
let uniqueBookIndex = 0;


class Library {

    #uniqueBookIndex = 0;

    constructor(cardArea) {
        this.bookList = [];
        this.container = cardArea;
    }

    addBookToLibrary(book) {
        book.index = this.#uniqueBookIndex;
        this.bookList.push(book);
        this.#uniqueBookIndex++;
    }

    createCardDiv(book) {
        const card = document.createElement('div');
        card.classList.add('card');

    }

    updateDOM(cardContainer) {
        /* clear list in DOM */
        while (this.cardContainer.firstChild) {
            this.cardContainer.removeChild(this.cardContainer.firstChild)
        }
        /* take elements of array, add them to DOM */


    }



}

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.readStatus = false;
        this.index;
    }

    toggleReadStatus() {
        this.readStatus = !this.readStatus;
    }

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
    tickBox.setAttribute('type','checkbox');
    tickBox.classList.add('tickbox');
    newCard.append(tickBox);

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
    } else if(event.target.classList.contains('tickbox')) {
        bookObject.toggleReadStatus(event.target.parentElement.dataset.bookIndex);
    }
})
modalButton.addEventListener('click', openModal, false);
closeButton.addEventListener('click', closeModal, false);
modalForm.addEventListener('submit', function(event){
    event.preventDefault();
    addBook();
})

myLibrary = new Library();
openModal();
closeModal();
myLibrary.addBookToLibrary(new Book('title1', 'author1'));
myLibrary.addBookToLibrary(new Book('title2', 'author2'));
myLibrary.addBookToLibrary(new Book('title3', 'author3'));
myLibrary.addBookToLibrary(new Book('title4', 'author4'));
myLibrary.addBookToLibrary(new Book('title5', 'author5'));
myLibrary.addBookToLibrary(new Book('title6', 'author6'));
myLibrary.updateDOM(cardArea);