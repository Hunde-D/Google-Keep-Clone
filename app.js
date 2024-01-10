class App {
    constructor() {
        console.log('app works!');
        this.notes =[];
        
        this.$form = document.querySelector('#form');
        this.$note = document.querySelector('#notes');
        this.$placeholder = document.querySelector('#placeholder');
        this.$noteTitle = document.querySelector('#note-title');
        this.$noteText = document.querySelector('#note-text');
        this.$formButtons = document.querySelector('#form-buttons');

        this.addEventListeners();
    }
    addEventListeners() {
        document.body.addEventListener('click', event =>{
            this.handleClick(event);
        })
        this.$form.addEventListener('submit', event => {
           event.preventDefault(); 
           const title = this.$noteTitle.value;
           const text = this.$noteText.value;
           const hasNote  = title || text;
           
              if(hasNote) {
                  this.addNote({title, text});
              }
        });
    }
    handleClick(event){
        const isFormClicked = this.$form.contains(event.target);
        
        if(isFormClicked) {
            this.openForm();
        }else{
            this.closeForm();
            
        
        }
    }
    openForm(){
        this.$form.classList.add('form-open');
        this.$noteTitle.style.display = 'block';
        this.$formButtons.style.display = 'block';
    }
    closeForm() {
        this.$form.classList.remove('form-open');
        this.$noteTitle.style.display = 'none';
        this.$formButtons.style.display = 'none';
        this.$noteTitle.value = '';
        this.$noteText.value = '';
    }
    addNote(note){
        const newNote ={
            title: note.title,
            text: note.text,
            color: 'white',
            id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1,
        };
        this.notes = [...this.notes, newNote];
        this.diplayNotes();
        this.closeForm()
    }
    diplayNotes(){
        const hasNotes = this.notes.length > 0;
        this.$placeholder.style.display = hasNotes ? 'none' : 'flex';
        this.$note.innerHTML = this.notes.map(note =>
            `<div  style="background: ${note.color};" class="note">
            <div class="${note.title && 'note-title'}">${note.title}</div>
            <div class="note-text">${note.text}</div>
            <div class="toolbar-container">
                <div class="toolbar">
                    <i class="bi bi-trash3 toolbar-delete"></i>
                    <i class="bi bi-palette toolbar-color"></i>
                </div>
            </div>
        </div>`).join("");
    }
                    // <img class="toolbar-color" src="https://icon.now.sh/palette">

}

new App();
