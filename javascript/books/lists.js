const docRange = document.createRange();

class LoadHTML {
  getHTML = (books) => {
    let template = '<ul class="book-list">';
    books.forEach((book, i) => {
      template += `<li class="list-item ${i % 2 !== 0 ? 'dark' : 'light'}">
          <div class="book-list-items">
            <h5 class="book-items book-title">"${book.title}" by ${book.author}</h5>
            <button id="btn-${i}" data-book-index="${i}" type="button" class="removeBtn">
            Remove
            <input type="hidden" value="${i}">
            </button>
          </div>
        </li>`;
    });

    if (books.length === 0) {
      template += `
      <li class="list-item light">
        <div class="book-list-items book-list-items-empty">
          <h5 class="book-items book-title">Book List is Empty</h5>
        </div>
      </li>
    `;
    }

    template += '</ul>';

    return docRange.createContextualFragment(template);
  };
}

const loadHTML = new LoadHTML();

export { loadHTML };

export default { };