const addButton = document.querySelector('.add');
let deleteButtons = document.querySelectorAll('.delete');
const buttons =document.querySelector('.buttons');
const popUp = document.getElementById('pop-up');
const closePopUp = document.querySelector('.close-pop-up');
const confirmPopUp = document.querySelector('.confirm-pop-up');
const inputs = Array.from(popUp.getElementsByTagName('input'));
let tableBody = document.getElementById('table-body');


const myLibrary = [];

function Book(author, name, publishing, year, pages) {
    this.author = author;
    this.name = name;
    this.publishing = publishing;
    this.year = year;
    this.pages = pages;
}

function addBookToLibrary() {
    const inputValues = inputs.map( elem => {
        return elem.value === '' ? '\u2063' : elem.value; //Добавить обработку пустых строк
    })
    let book = new Book(...inputValues);

    console.log(book)

    const tableLine = `<tr class=table-child-${deleteButtons.length + 1}>
                            <td>${book.author}</td>
                            <td>${book.name}</td>
                            <td>${book.publishing}</td>
                            <td>${book.year}</td>
                            <td>${book.pages}</td>
                        </tr>`;
    
    tableBody.innerHTML += tableLine;

    buttons.innerHTML += `<button class="delete button-child-${deleteButtons.length + 1}" type="submit">Удалить</button>`;
    
    // Добавляем новые кнопки удаления в список deleteButtons
    deleteButtons = document.querySelectorAll('.delete');

    // Добавляем обработчики событий на новые кнопки удаления
    deleteButtons.forEach(elem => {
        elem.addEventListener('click', (e) => {
            const elemToDelete = e.target.classList[e.target.classList.length - 1];
            deleteBookFromLibrary(elemToDelete);
        });
    });
}

function deleteBookFromLibrary(elemToDelete) {
    const buttonToDelete = document.querySelector(`.${elemToDelete}`);
    const number = elemToDelete[elemToDelete.length - 1];
    const tableRowToDelete = document.querySelector(`.table-child-${number}`);

    console.log(elemToDelete)
    console.log(buttonToDelete);
    console.log(tableRowToDelete);

    tableBody.removeChild(tableRowToDelete);
    buttons.removeChild(buttonToDelete);
}

addButton.addEventListener('click', () => {
    popUp.showModal();
})

confirmPopUp.addEventListener('click', () => {
    addBookToLibrary();
    popUp.close();
})

closePopUp.addEventListener('click', () => {
    popUp.close();
})

deleteButtons.forEach(elem => {
    elem.addEventListener('click', (e) => {
        const elemToDelete = e.target.classList[e.target.classList.length-1]
        deleteBookFromLibrary(elemToDelete);
    })
})