import { BookStore, getHTML } from './books/bookObj.js';

const bookStore = new BookStore();

// Only to show current date and time
const today = new Date();
document.getElementById('date-time').innerText = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

const inputTitle = document.getElementById('book-title');
const inputAuthor = document.getElementById('book-author');

const addBookBtn = document.getElementById('add-btn');

// create HTML from fragment
const createHTML = () => {
  const docRange = document.createRange();
  const listWrapper = document.getElementById('book-list-wrapper');
  listWrapper.innerHTML = '';
  listWrapper.append(docRange.createContextualFragment(getHTML(bookStore.books)));
};

const removeBookCallback = (ev) => {
  const bookIndex = ev.target.getAttribute('data-book-index');
  bookStore.removeBook(bookIndex);
  // after removing book recreate HTML
  createHTML();

  // Get new remove buttons
  const removeBtn = document.querySelectorAll('.removeBtn');

  // recursively add event listener to the new buttons;
  removeBtn.forEach((item) => {
    item.addEventListener('click', removeBookCallback);
  });
};

const addEventListener = () => {
  const removeBtn = document.querySelectorAll('.removeBtn');
  removeBtn.forEach((item) => {
    item.addEventListener('click', removeBookCallback);
  });
};

const createBookList = () => {
  createHTML();
  addEventListener();
};

const updateBooks = () => {
  const title = inputTitle.value;
  const author = inputAuthor.value;

  const errorShow = document.querySelector('.error');

  if (title !== '' && author !== '') {
    errorShow.classList.add('display-none');
    bookStore.addBook(title, author);
    inputTitle.value = '';
    inputAuthor.value = '';
    return createBookList();
  }

  return errorShow.classList.remove('display-none');
};
addBookBtn.addEventListener('click', updateBooks);

// Create book list on page load
createBookList();