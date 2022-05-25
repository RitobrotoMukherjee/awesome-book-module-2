import { bookStore } from './books/bookObj.js';

const inputTitle = document.getElementById('book-title');
const inputAuthor = document.getElementById('book-author');

const addBookBtn = document.getElementById('#add-btn');

const removeBtn = document.querySelectorAll('.removeBtn');

const updateBooks = () => {
  const title = inputTitle.value;
  const author = inputAuthor.value;

  const errorShow = document.querySelector('.error');

  if (title !== '' && author !== '') {
    errorShow.classList.add('display-none');
    bookStore.addBook(title, author);
  }
  return errorShow.classList.remove('display-none');
};

addBookBtn.addEventListener('click', updateBooks);

removeBtn.forEach((item) => {
  item.addEventListener('click', (ev) => {
    const bookIndex = ev.target.getAttribute('data-book-index');
    bookStore.removeBook(bookIndex);
  });
});
