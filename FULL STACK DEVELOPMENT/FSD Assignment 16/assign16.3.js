// Constructor for Book
function Book(title, author) {
    this.title = title;
    this.author = author;
}

// Add method to prototype
Book.prototype.displayInfo = function() {
    console.log(`Title: "${this.title}", Author: ${this.author}`);
};

// Create instances
const book1 = new Book("The Alchemist", "Paulo Coelho");
const book2 = new Book("Wings of Fire", "A.P.J. Abdul Kalam");

// Display info
book1.displayInfo();
book2.displayInfo();