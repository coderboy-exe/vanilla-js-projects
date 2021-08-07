const addBtn = document.querySelector('.add-btn');
const notesContainer = document.querySelector('.notes-container');
let noteInput = document.querySelector('.input');

class note {
    constructor(noteValue) {
        //create note div
        this.createDiv(noteValue)
    }

    createDiv(noteValue) {
        let input = document.createElement('input');
        input.value = noteValue;
        input.disabled = true;
        input.classList.add('note-input');
        input.type = "text";

        let noteDiv = document.createElement('div');
        noteDiv.classList.add('note');

        let editBtn = document.createElement('button');
        editBtn.innerHTML = "Edit";
        editBtn.classList.add('edit-btn');

        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = "Delete";
        deleteBtn.classList.add('delete-btn');


        notesContainer.appendChild(noteDiv);

        noteDiv.appendChild(input);
        noteDiv.appendChild(editBtn);
        noteDiv.appendChild(deleteBtn);


        //Edit
        editBtn.addEventListener('click', () => this.edit(input));

        //Delete
        deleteBtn.addEventListener('click', () => this.delete(noteDiv));
    }

    edit(input) {
        input.disabled = !input.disabled;
    }

    delete(note) {
        notesContainer.removeChild(note);
    }

}

function create() {
    if(noteInput.value != ""){
        new note(noteInput.value);
        noteInput.value = "";
    }
}

addBtn.addEventListener('click', create);
window.addEventListener('keydown', (e) => {
    if(e.which == 13) {
        check();
    }
})