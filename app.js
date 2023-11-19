const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".add_book");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

const myLibrary = [];

function Book(title,author,pages,hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (this.hasRead === true) {hasRead = 'read'} else {hasRead = 'not read yet'}
    this.info = function() {
        return (title + ' by ' + author + ', ' + pages + ' pages, ' + hasRead)
    }
}

let addBookForm = document.getElementById("addBookForm");
let content = document.querySelector('.content')
addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.querySelector('#title')
    let author = document.querySelector('#author')
    let pages = document.querySelector('#pages')
    let status = document.querySelector('.status')

    const book = new Book(title.value, author.value, pages.value, status.value);
    console.log(book.info())

    const card = document.createElement('div');
    card.classList.add('card');

    const bookTitle = document.createElement('div');
    bookTitle.textContent = 'Title: ' + title.value;
    bookTitle.classList.add('book_title');

    const bookAuthor = document.createElement('div');
    bookAuthor.textContent = 'Author: ' + author.value;
    bookAuthor.classList.add('book_author');

    const bookPages = document.createElement('div');
    bookPages.textContent = 'Pages: ' + pages.value;
    bookPages.classList.add('book_pages');

    const bookStatus = document.createElement('div');
    bookStatus.textContent = 'Status: ' + status.value;
    bookStatus.classList.add('read_status');

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookStatus);
    const btns = document.createElement('div');
    btns.classList.add('buttons');
    const toggleButton = document.createElement('button');
    toggleButton.classList.add('toggle_status');
    toggleButton.textContent = 'Change Status'
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete')
    deleteButton.textContent = 'Delete'
    btns.appendChild(toggleButton)
    btns.appendChild(deleteButton)
    card.append(btns)

    content.appendChild(card);

    title.value = '';
    author.value = '';
    pages.value = '';
    status.value = '';
});

