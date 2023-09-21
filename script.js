/* Write constructor to build book objects. Function takes user input, puts it into an
array. Function loops through array and displays each book on display card.
New book button allows user to input details that are fed into constructor.
Add button to remove each book, another to edit each book.*/

const library = [];

// book constructor function

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = read
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead}`
    }
}


// add user input to book array

function addBook(newBook) {
    library.push(newBook)
}

// add book to library

function libraryDisplay() {

}