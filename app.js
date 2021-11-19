//Book class represent a book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI Class:Handle UI tasks
class UI {
  static displayBooks() {
    const storedBooks = [
      {
        title: "First Book",
        author: "First Author",
        isbn: "654",
      },
      {
        title: "Second Book",
        author: "Second Author",
        isbn: "654",
      },
    ];
    const books = storedBooks;
    books.forEach((book) => {
      UI.addBookToList(book);
    });
  }

  static addBookToList(book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">x</a></td>
    `;
    list.appendChild(row);
  }

  static deleteBook(o) {
    o.parentElement.parentElement.remove();
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector(".book-form");
    container.insertBefore(div, form);
  }

  static clearField() {
    document.querySelector("#title").value = "";
    document.getElementById("isbn").value = "";
    document.getElementById("author").value = "";
  }
}

//event display books
document.addEventListener("DOMContentLoaded", UI.displayBooks);
// Add a book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  //prevent acutal submit
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("Please fill all the fields", "danger");
  } else {
    //Instatiate book
    const book = new Book(title, author, isbn);

    //Add book to UI
    UI.addBookToList(book);
    UI.clearField();
  }
});

//Delete a row

document.getElementById("book-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
});
