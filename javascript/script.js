import { BookStore, getHTML } from './books/bookObj.js';

const bookStore = new BookStore();

// Only to show current date and time
const today = new Date();
document.getElementById('date-time').innerText = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

const inputTitle = document.getElementById('book-title');
const inputAuthor = document.getElementById('book-author');

const addBookBtn = document.getElementById('add-btn');

const listLink = document.querySelector("a[href='#book-list-section']");

const addLink = document.querySelector("a[href='#add-books']");

const contactLink = document.querySelector("a[href='#contact-info-section']");

const listBookPage = document.querySelector('#book-list-section');
const addBooksPage = document.querySelector('#add-books');
const contactPage = document.querySelector('#contact-info-section');

addLink.addEventListener('click', () => {
  addBooksPage.style = 'display: block';
  listBookPage.style = 'display: none';
  contactPage.style = 'display: none';
});

contactLink.addEventListener('click', () => {
  listBookPage.style = 'display: none';
  addBooksPage.style = 'display: none';
  contactPage.style = 'display: flex';
});

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

const addEventListenerToEachButton = () => {
  const removeBtn = document.querySelectorAll('.removeBtn');
  removeBtn.forEach((item) => {
    item.addEventListener('click', removeBookCallback);
  });
};

const createBookList = () => {
  createHTML();
  addEventListenerToEachButton();
};

listLink.addEventListener('click', () => {
  listBookPage.style = 'display: block';
  addBooksPage.style = 'display: none';
  contactPage.style = 'display: none';
  createBookList();
});

const updateBooks = () => {
  const title = inputTitle.value;
  const author = inputAuthor.value;

  const errorShow = document.querySelector('.error');

  if (title === '' && author === '') {
    return errorShow.classList.remove('display-none');
  }
  errorShow.classList.add('display-none');
  bookStore.addBook(title, author);
  inputTitle.value = '';
  inputAuthor.value = '';
  return createBookList();
};
addBookBtn.addEventListener('click', updateBooks);

// Create book list on page load
createBookList();
