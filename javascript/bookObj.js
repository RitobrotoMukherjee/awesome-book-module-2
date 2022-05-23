const docRange = document.createRange();

const listWrapper = document.querySelector('.list-wrapper');
// checkObject
const checkArray = (data) => Array.isArray(data) && data.length > 0;

const bookStore = {
  bookObj(title, author) {
    return {
      title,
      author,
    };
  },
  getBook() {
    return JSON.parse(localStorage.getItem('bookStore'));
  },
  addBook(title, author) {
    const books = this.getBook();
    if (checkArray(books)) {
      books.push(this.bookObj(title, author));
      return localStorage.setItem('bookStore', JSON.stringify(books));
    }
    const bookArray = [];
    bookArray.push(this.bookObj(title, author));
    return localStorage.setItem('bookStore', JSON.stringify(bookArray));
  },
  removeBook(id) {
    const books = this.getBook();
    if (checkArray(books)) {
      books.splice(id, 1);
    }
    return localStorage.setItem('bookStore', JSON.stringify(books));
  },
};

const getHTML = (books) => {
  let template = '';
  books.forEach((book, i) => {
    template += `<ul class="book-list">
        <li class="list-items">${book.title}</li>
        <li class="list-items">${book.author}</li>
        <li class="list-items">
            <button id="btn-${i}" data-book-index="${i}" type="button" class="removeBtn">Remove</button>
        </li>
        </ul>
        <hr>`;
  });

  return docRange.createContextualFragment(template);
};

listWrapper.append(getHTML(bookStore.getBook()));

export { bookStore };

export default checkArray;
