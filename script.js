let addButton = document.querySelector('.add');
let deleteButtons = document.querySelectorAll('.delete');
let popUp = document.getElementById('pop-up');
let closePopUp = document.querySelector('.close-pop-up');
let inputs = popUp.getElementsByTagName('input');

const myLibrary = [];

function Book() {

}

function addBookToLibrary() {
    
}

addButton.addEventListener('click', () => {
    popUp.showModal()
})

closePopUp.addEventListener('click', () => {
    popUp.close()
})