// Book class
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.available = true;
    }
}

// Library class
class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    checkoutBook(title) {
        const book = this.books.find(b => b.title === title && b.available);
        if (book) {
            book.available = false;
            console.log(`You have checked out "${book.title}".`);
        } else {
            console.log(`"${title}" is not available.`);
        }
    }

    returnBook(title) {
        const book = this.books.find(b => b.title === title && !b.available);
        if (book) {
            book.available = true;
            console.log(`You have returned "${book.title}".`);
        } else {
            console.log(`"${title}" was not checked out.`);
        }
    }

    listAvailableBooks() {
        console.log("Available Books:");
        this.books.forEach(b => {
            if (b.available) {
                console.log(`- ${b.title} by ${b.author}`);
            }
        });
    }
}

// Test the Library system
const library = new Library();
library.addBook(new Book("The Alchemist", "Paulo Coelho"));
library.addBook(new Book("Wings of Fire", "A.P.J. Abdul Kalam"));

library.listAvailableBooks();
library.checkoutBook("The Alchemist");
library.listAvailableBooks();
library.returnBook("The Alchemist");
library.listAvailableBooks();