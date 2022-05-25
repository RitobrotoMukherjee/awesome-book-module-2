import { BookStore, getHTML } from './books/bookObj.js';

const bookStore = new BookStore();

// Only to show current date and time
const today = new Date();
document.getElementById('date-time').innerText = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

const docRange = document.createRange();
const listWrapper = document.getElementById('book-list-wrapper');
listWrapper.append(docRange.createContextualFragment(getHTML(bookStore.books)));

const inputTitle = document.getElementById('book-title');
const inputAuthor = document.getElementById('book-author');

const addBookBtn = document.getElementById('add-btn');

const removeBtn = document.querySelectorAll('.removeBtn');

const updateBooks = () => {
  const title = inputTitle.value;
  const author = inputAuthor.value;

  const errorShow = document.querySelector('.error');

  if (title !== '' && author !== '') {
    errorShow.classList.add('display-none');
    bookStore.addBook(title, author);
    return window.location.reload();
  }
  return errorShow.classList.remove('display-none');
};

addBookBtn.addEventListener('click', updateBooks);

removeBtn.forEach((item) => {
  item.addEventListener('click', (ev) => {
    const bookIndex = ev.target.getAttribute('data-book-index');
    bookStore.removeBook(bookIndex);
    window.location.reload();
  });
});
