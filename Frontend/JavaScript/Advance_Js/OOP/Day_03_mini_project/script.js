class Library {
  constructor() {
    this.books = []; // saari books ka record yaha par hai
  }

  addBooks(books) {
    this.books.push(...books);
  }

  listAllBooks() {
    this.books.forEach(function (book, idx) {
      console.log(` ${idx + 1} -> ${book.name} by ${book.author}`);
    });
  }
}

class Book {
  constructor(name, isbn, price, author) {
    this.name = name;
    this.isbn = isbn;
    this.price = price;
    this.author = author;
    this.readStatus = false;
  }

  info() {
    console.log(
      `${this.name} is written by ${this.author} and you have ${
        this.readStatus ? "read it " : "not read it "
      } and it is available at a price range of ${this.price}`
    );
  }

  changeReadStatus() {
    this.readStatus = !this.readStatus;
  }
}

let jhansiLibarary = new Library();
let book1 = new Book("Atitude is everything", 1233414, 241, "Jeff Keller");
let book2 = new Book("How to to anyone", 3242134, 223, "Paul");
let book3 = new Book("Gunho ka Devta", 24312, 345, "Devdat Bharti");

book1.info();
book1.changeReadStatus();
book1.info();
jhansiLibarary.addBooks([book1, book2, book3]);
jhansiLibarary.listAllBooks();
