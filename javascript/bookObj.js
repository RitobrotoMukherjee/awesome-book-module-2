const docRange = document.createRange();
// checkObject
const checkArray = (data) => {
    return Array.isArray(data) && data.length > 0;
}

const bookStore = {
    bookObj(title, author) {
        return {
            title: title,
            author: author
        }
    },
    getBook() {
        return JSON.parse(localStorage.getItem('bookStore'));
    },
    addBook(title, author) {
        let books = this.getBook();
        if(checkArray(books)){
            books.push(this.bookObj(title, author));
            return localStorage.setItem('bookStore', JSON.stringify(books));
        } else {
            let bookArray = [];
            bookArray.push(this.bookObj(title, author));
            return localStorage.setItem('bookStore', JSON.stringify(bookArray));
        }
    },
}

const getHTML = (books) => {
    let template = '';
    books.forEach(book => {
        template += `<ul class="list">
        <li class="list-items">${book.title}</li>
        <li class="list-items">${book.author}</li>
        <li class="list-items">
            <button type="button" id="removeBtn">Remove</button>
        </li>
        </ul>
        <hr>`
    });
    return docRange.createContextualFragment(template);
}

export { bookStore, getHTML };

export default checkArray;
