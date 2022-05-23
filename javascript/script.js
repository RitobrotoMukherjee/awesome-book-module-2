import { bookStore, getHTML } from "./bookObj.js";

const inputTitle = document.getElementById('book-title');
const inputAuthor = document.getElementById('book-author');

const addBookBtn = document.getElementById('add-btn');

const listWrapper = document.querySelector('.list-wrapper');


// remove book
const removeBook = (title, author) => {
    filterList = bookStore.filter(el => el.title === title && el.author === author);
    filterList.forEach(book => {
        bookStore.splice(bookStore.findIndex(el => el.title === title && el.author === author), 1);
    });
}


const updateBooks = (event) => {
    console.log(event);
    bookStore.addBook( inputTitle.value, inputAuthor.value);
    location.reload();
};

addBookBtn.addEventListener('click', updateBooks);

listWrapper.append(getHTML(bookStore.getBook()));
