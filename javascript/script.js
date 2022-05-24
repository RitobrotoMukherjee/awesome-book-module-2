import { bookStore } from './books/bookObj.js';

const inputTitle = document.getElementById('book-title');
const inputAuthor = document.getElementById('book-author');

const addBookBtn = document.getElementById('add-btn');

const removeBtn = document.querySelectorAll('.removeBtn');

const updateBooks = () => {
  bookStore.addBook(inputTitle.value, inputAuthor.value);
  window.location.reload();
};

addBookBtn.addEventListener('click', updateBooks);

removeBtn.forEach((item) => {
  item.addEventListener('click', (ev) => {
    const bookIndex = ev.target.getAttribute('data-book-index');
    bookStore.removeBook(bookIndex);
    window.location.reload();
  });
});
