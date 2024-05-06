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
        /* create card div and assign values */
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.bookIndex = book.index;

        /* create items to add to card div */
        const bookTitle = document.createTextNode(book.title);
        const bookAuthor = document.createTextNode(book.author);
        const deleteBookButton = document.createElement('button');
        deleteBookButton.classList.add('delete-button')
        const tickBox = document.createElement('input');
        tickBox.setAttribute('type','checkbox');
        tickBox.classList.add('tickbox');

        /* add items to card div */
        card.appendChild(deleteBookButton);
        card.appendChild(bookTitle);
        card.appendChild(document.createElement('br'));
        card.appendChild(bookAuthor);
        card.append(tickBox);

        /*  */
        cardArea.appendChild(card);
        titleInputBox.value = '';
        authorInputBox.value = '';
    }

    updateDOM(cardContainer) {
        /* clear list in DOM */
        while (cardContainer.firstChild) {
            cardContainer.removeChild(cardContainer.firstChild)
        }
        /* take elements of array, add them to DOM */
        for (let i in this.bookList) {
            console.log(this.bookList[i]);
            this.createCardDiv(this.bookList[i]);
        }
    }

    deleteBook(bookIndex) {
        myLibrary.bookList = myLibrary.bookList.filter(item => !(item.index==bookIndex));
        document.querySelector(`[data-book-index="${bookIndex}"]`).remove();
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

const modal = document.querySelector('#addBookModal');
const modalButton = document.querySelector('.modalButton');
const closeButton = document.querySelector(".close");
const inputButton = document.querySelector('#inputButton');
const titleInputBox = document.querySelector('#titleInputBox');
const authorInputBox = document.querySelector('#authorInputBox');
const modalForm = document.querySelector('.modalForm');
const cardArea = document.querySelector('.card-area');

cardArea.addEventListener('click', function(event){
    let targetBookIndex = event.target.parentElement.dataset.bookIndex;
    if(event.target.classList.contains('delete-button')) {
        myLibrary.deleteBook(targetBookIndex);
    } else if(event.target.classList.contains('tickbox')) {
        indexOfBook = event.target.parentElement.dataset.bookIndex
        bookToToggle = myLibrary.bookList.find(obj => {return obj.index == indexOfBook});
        bookToToggle.toggleReadStatus();
    }
})
modalButton.addEventListener('click', openModal, false);
closeButton.addEventListener('click', closeModal, false);
modalForm.addEventListener('submit', function(event){
    event.preventDefault();
    myLibrary.addBookToLibrary(new Book(titleInputBox.value, authorInputBox.value));
    myLibrary.updateDOM(cardArea);
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