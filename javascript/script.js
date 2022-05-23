const addBookForm = document.getElementById('book-add');

const inputTitle = document.getElementById('book-title');
const inputAuthor = document.getElementById('book-author');

const addBookBtn = document.getElementById('add-btn');

const submitForm = (event) => {
    console.log(event);
    event.preventDefault();
};

const listWrapper = document.querySelector('.list-wrapper');

let bookStore = [
    {
        title: 'Test Book',
        author: 'Test Author'
    }
];

// checkObject
const checkArray = (data) => {
  return Array.isArray(data) && bookArray.length !== 0;
}

// Store Book in local storage
const storeBook = (bookArray) => {
    if(localStorage.getItem('bookStore')) {
        return;
    };

   if(checkArray(bookArray)) {
    const storage = JSON.stringify(bookArray);
    localStorage.setItem('bookStore',storage);
   }
}

// Update Book
const updateBookStore = (bookArray) => {

    if(localStorage.getItem('bookStore')) {
        localStorage.removeItem('bookStore');
        storeBook(bookArray);

    }else {
        storeBook(bookArray);
    }
}

// add book
const addBook = (title, author) => {
    if(!title || !author) {
        return;
    };

    const newBook = {
        title: title,
        author: author
    };
    bookStore.push(newBook);
    updateBookStore(bookStore);
};

// remove book
const removeBook = (title, author) => {
    filterList = bookStore.filter(el => el.title === title && el.author === author);
    filterList.forEach(book => {
        bookStore.splice(bookStore.findIndex(el => el.title === title && el.author === author), 1);
    });
}

// displayBooks
const displayBooks = () => {
    // bookStore.forEach(book => {
    //     const template = `<ul class="list">
    //     <li class="list-items">${book.title}</li>
    //     <li class="list-items">${book.author}</li>
    //     <li class="list-items">
    //         <button type="button" id="removeBtn">Remove</button>
    //     </li>
    //     </ul>
    //     <hr>`

    //     listWrapper.appendChild()
    // });
}


addBookForm.addEventListener('submit', function() {
    addBook();
});
