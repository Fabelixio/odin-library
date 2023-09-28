// GO THROUGH CODE, FIGURE OUT WHAT ISNT WORKING AND FIX/REPLACE. KEEP WHAT WORKS


const library = [];
const bookContainer = document.querySelector('.bookContainer')

// book object constructor function

function bookMaker(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages+' pages'
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
    clearDisplay()
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
    const deleteButton = document.querySelectorAll('.deleteBook')
    deleteButton.forEach((delBtn) => {
        delBtn.addEventListener('click', function(e) {
            const currentIndex = Number(delBtn.parentNode.getAttribute('data-index'))
            removeBook(currentIndex)
        })
    })
    const readToggle = document.querySelectorAll('.readStatus')
    readToggle.forEach((readTgl) => {
        readTgl.addEventListener('click', function(e) {
            const currentStatus = (readTgl.previousSibling.innerText)
            const currIndex = Number(readTgl.parentNode.getAttribute('data-index'))
            library[currIndex].toggleReadStatus(currentStatus, currIndex)
        })
    })
}

bookMaker.prototype.toggleReadStatus = function(currentStatus, index) {
    if(currentStatus == 'Read') {
        library[index].read = 'Not Read'
    } else {
        library[index].read = 'Read'
    }
    libraryDisplay()
}

// refreshes display to avoid multiple library instances

function clearDisplay() {
    while (bookContainer.lastChild) {
        bookContainer.removeChild(bookContainer.lastChild)
    }
}

// removes book card from library

function removeBook(index) {
    library.splice(index, 1)
    libraryDisplay()
}

// functions control whether form inputs are required

function addRequiredField(element) {
    element.classList.add('requiredField')
}

function removeRequiredField(element) {
    element.classList.remove('requiredField')
}

function clearAllRequiredFields() {
    const bookTitle = document.getElementById('titleInput')
    const bookAuthor = document.getElementById('authorInput')
    const bookPages = document.getElementById('pagesInput')
    removeRequiredField(bookTitle)
    removeRequiredField(bookAuthor)
    removeRequiredField(bookPages)
}

function openForm() {
    document.querySelector('.form-container').style.display = 'block'
    document.querySelector('.formPopup').reset()
    clearAllRequiredFields()
}

function closeForm() {
    document.querySelector('.form-container').style.display = 'none'
}

//button opens book add form

const btnNewBook = document.querySelector('.bookBTN')
btnNewBook.addEventListener('click', openForm) 

// book form functionality

const bookAdd = document.getElementById('btnAddBook')
const cancel = document.getElementById('btnCloseForm')
cancel.addEventListener('click', closeForm)
bookAdd.addEventListener('click', function(e) {
    const bookTitle = document.getElementById('titleInput')
    const bookAuthor = document.getElementById('authorInput')
    const bookPages = document.getElementById('pagesInput')
    const bookRead = document.getElementById('hasRead')
    if(!bookTitle.checkValidity()) {
        addRequiredField(bookTitle)
    } else if(bookTitle.checkValidity()) {
        removeRequiredField(bookTitle)
    }
    if(!bookAuthor.checkValidity()) {
        addRequiredField(bookAuthor)
    } else if(bookAuthor.checkValidity()) {
        removeRequiredField(bookAuthor)
    }
    if(!bookPages.checkValidity()) {
        addRequiredField(bookPages)
    } else if(bookPages.checkValidity()) {
        removeRequiredField(bookPages)
    }
    if(bookTitle.checkValidity() && bookAuthor.checkValidity() && bookPages.checkValidity()) {
        clearAllRequiredFields()
        const bookN = new bookMaker(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked)
        addBook(bookN)
        libraryDisplay()
        closeForm()
    }
})
// if chain to determine if each form field recieved an input before sending
// to the book constructor and adding the output to the library