import { Book } from './book.js';
import { loadHTML } from './lists.js';

import { BookList } from './setBookList.js';

const listWrapper = document.getElementById('book-list-wrapper');

class BookStore extends BookList {
  constructor() {
    super();
    this.books = super.getBooks();
  }

  setLocalStorage() {
    return localStorage.setItem('bookStore', JSON.stringify(this.books));
  }

  addBook(title, author) {
    const book = new Book(title, author);
    this.books.push(book);
    return this.setLocalStorage();
  }

  removeBook(id) {
    if (this.books.length > 0) {
      this.books.splice(id, 1);
    }
    return this.setLocalStorage();
  }
}

const bookStore = new BookStore();

listWrapper.append(loadHTML.getHTML(bookStore.books));

export { bookStore };

export default null;
