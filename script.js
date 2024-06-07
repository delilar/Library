const addButton = document.querySelector('.add');
let deleteButtons = document.querySelectorAll('.delete');
const buttons =document.querySelector('.buttons');
const popUp = document.getElementById('pop-up');
const closePopUp = document.querySelector('.close-pop-up');
const confirmPopUp = document.querySelector('.confirm-pop-up');
const inputs = Array.from(popUp.getElementsByTagName('input'));
let tableBody = document.getElementById('table-body');

class Library {
    constructor(author, name, publishing, year, pages) {
        this.author = author;
        this.name = name;
        this.publishing = publishing;
        this.year = year;
        this.pages = pages;
    }

    addBookToLibrary() {
        const tableLine = `<tr class=table-child-${deleteButtons.length + 1}>
                                <td>${this.author}</td>
                                <td>${this.name}</td>
                                <td>${this.publishing}</td>
                                <td>${this.year}</td>
                                <td>${this.pages}</td>
                            </tr>`;
        
        tableBody.innerHTML += tableLine;
    
        buttons.innerHTML += `<button class="delete button-child-${deleteButtons.length + 1}" type="submit">Удалить</button>`;
        
        // Добавляем новые кнопки удаления в список deleteButtons
        deleteButtons = document.querySelectorAll('.delete');
    
        // Добавляем обработчики событий на новые кнопки удаления
        deleteButtons.forEach(elem => {
            elem.addEventListener('click', (e) => {
                const elemToDelete = e.target.classList[e.target.classList.length - 1];
                this.deleteBookFromLibrary(elemToDelete);
            });
        });
    }


    deleteBookFromLibrary(elemToDelete) {
        const buttonToDelete = document.querySelector(`.${elemToDelete}`);
        const number = elemToDelete[elemToDelete.length - 1];
        const tableRowToDelete = document.querySelector(`.table-child-${number}`);
    
        tableBody.removeChild(tableRowToDelete);
        buttons.removeChild(buttonToDelete);
    }
}

const inputValues = inputs.map( elem => {
    return elem.value === '' ? '\u2063' : elem.value; //Добавить обработку пустых строк
})

const book = new Library(...inputValues)

addButton.addEventListener('click', () => {
    popUp.showModal();
})

confirmPopUp.addEventListener('click', () => {
    book.addBookToLibrary();
    popUp.close();
})

closePopUp.addEventListener('click', () => {
    popUp.close();
})

deleteButtons.forEach(elem => {
    elem.addEventListener('click', (e) => {
        const elemToDelete = e.target.classList[e.target.classList.length-1];
        book.deleteBookFromLibrary(elemToDelete);
    })
})