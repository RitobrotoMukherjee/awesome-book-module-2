import { bookStore } from './books/bookObj.js';
import { loadHTML } from './books/lists.js';

const inputTitle = document.getElementById('book-title');
const inputAuthor = document.getElementById('book-author');

const addBookBtn = document.getElementById('add-btn');

const removeBtn = document.querySelectorAll('.removeBtn');

const listLink = document.querySelector("a[href='#book-list-section']");

const addLink = document.querySelector("a[href='#add-books']");

const contactLink = document.querySelector("a[href='#contact-info-section']");

const listBookPage = document.querySelector('#book-list-section');
const addBooksPage = document.querySelector('#add-books');
const contactPage = document.querySelector('#contact-info-section');

const listWrapper = document.getElementById('book-list-wrapper');

addLink.addEventListener('click', () => {
  listBookPage.classList.add('display-none');
  addBooksPage.classList.remove('display-none');
  contactPage.classList.add('display-none');
});

contactLink.addEventListener('click', () => {
  listBookPage.classList.add('display-none');
  addBooksPage.classList.add('display-none');
  contactPage.classList.remove('display-none');
});

const updateList = () => {
  const bookList = document.querySelector('.book-list');
  bookList.remove();
  listWrapper.append(loadHTML.getHTML(bookStore.books));
};

listLink.addEventListener('click', () => {
  updateList();
  listBookPage.classList.remove('display-none');
  addBooksPage.classList.add('display-none');
  contactPage.classList.add('display-none');
});

const updateBooks = () => {
  const title = inputTitle.value;
  const author = inputAuthor.value;

  const errorShow = document.querySelector('.error');

  if (title === '' || author === '') {
    return errorShow.classList.remove('display-none');
  }
  bookStore.addBook(title, author);
  inputTitle.value = '';
  inputAuthor.value = '';
  return errorShow.classList.add('display-none');
};

addBookBtn.addEventListener('click', updateBooks);

removeBtn.forEach((item) => {
  item.addEventListener('click', (ev) => {
    const bookIndex = ev.target.getAttribute('data-book-index');
    bookStore.removeBook(bookIndex);
    setTimeout(() => {
      updateList();
    }, 500);
  });
});
