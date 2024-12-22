let myLibrary = [];
let table = document.querySelector("#table");
let addButton = document
  .querySelector("#add-button")
  .addEventListener("click", addBookToLibrary);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector("#title-book").value;
  let author = document.querySelector("#author-book").value;
  let pages = document.querySelector("#pages-book").value;
  let read = document.querySelector("#read-or-not").value;
  if (title === "" || author === "" || pages === "" || read === "") {
    alert("Fill all the inputs, please.");
  } else {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    let form = document.querySelector("#add-book");
    form.reset();
    render();
  }
}

function render() {
  table.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</td> <td>${book.author}</td> <td>${book.pages}</td> <td>${book.read}</td> <td><button class="remove-btn" onclick="remove(${i})">x</button></td>`;
    table.appendChild(row);
    updateBookShelf();
  }
}

function updateBookShelf() {
  let fillValue = null;
  let libraryNodeList = document.querySelectorAll(".book");
  let booksShelf = Array.from(libraryNodeList);
  if (booksShelf.length > myLibrary.length) {
    booksShelf = booksShelf.slice(0, myLibrary.length);
  }
  while (booksShelf.length < myLibrary.length) {
    booksShelf.push(fillValue);
  }
  booksShelf.forEach((item) => {
    item.style.display = "block";
  });
}

function remove(index) {
  let bookLibrary = document.querySelectorAll(".book");
  bookLibrary[index].remove();
  myLibrary.splice(index, 1);
  render();
}
