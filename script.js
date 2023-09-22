/* Write constructor to build book objects. Function takes user input, puts it into an
array. Function loops through array and displays each book on display card.
New book button allows user to input details that are fed into constructor.
Add button to remove each book, another to edit each book.*/

const library = [];
const bookContainer = document.querySelector('.bookContainer')

// book object constructor function

function bookMaker(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    if(read) {
        this.read = 'Read'
    } else {
        this.read = 'Not Read'
    }
}

// add constructor book object to library array

function addBook(newBook) {
    library.push(newBook)
}

// loop through book object and adds book card containing info from object
// adds and defines read status toggle and book card delete buttons to book card

function libraryDisplay() {
    library.forEach((item, index) => {
        book = document.createElement('div')
        book.classList.add('bookCard')
        book.setAttribute('data-index', `${index}`)
        bookContainer.appendChild(book)
        Object.keys(item).forEach(key => {
            content = document.createElement('div')
            content.classList.add(`${key}`)
            content.innerText = `${item[key]}`
            book.appendChild(content)
        })
        readStatus = document.createElement('button')
        readStatus.classList.add('readStatus')
        readStatus.innerText = 'Toggle Read'
        book.appendChild(readStatus)
        deleteBook = document.createElement('button')
        deleteBook.classList.add('deleteBook')
        deleteBook.innerText = 'Delete'
        book.appendChild(deleteBook)
    })
    const deleteButton = document.querySelector('.deleteBook')
    deleteButton.forEach((delBtn) => {
        delBtn.addEventListener('click', function(e) {
            const currentIndex = Number(delBtn.parentNode.getAttribute('data-index'))
            removeBook(currentIndex)
        })
    })
    const readToggle = document.querySelector('.readStatus')
    readToggle.forEach((readTgl) => {
        readTgl.addEventListener('click', function(e) {
            const currentStatus = (readTgl.previousSibling.innerText)
            const currIndex = Number(readTgl.parentNode.getAttribute('data-index'))
            library[currIndex].toggleReadStatus(currentStatus, currIndex)
        })
    })
}





function removeBook() {}

function closeForm() {
    document.getElementById('formContainer').style.display = 'none'
}
// book form functionality

const addBook = document.getElementById('btnAddBook')
const cancel = document.getElementById('btnCloseForm')
cancel.addEventListener('click', closeForm)
addBook.addEventListener('click', function(e) {
    const bookTitle = document.getElementById('titleInput')
    const bookAuthor = document.getElementById('AuthorInput')
    const bookPages = document.getElementById('pagesInput')
    const bookRead = document.getElementById('hasRead')
    if(!bookTitle)
})