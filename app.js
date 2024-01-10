class App {
    constructor() {
        console.log('app works!');
        this.$form = document.querySelector('#form');
        this.$noteTitle = document.querySelector('#note-title');
        this.$formButtons = document.querySelector('#form-buttons');
        
        this.addEventListeners();
    }
    addEventListeners() {
        document.body.addEventListener('click', event =>{
            this.handleClick(event);
            
            
        })
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
        console.log('form open works!');
        this.$form.classList.add('form-open');
        this.$noteTitle.style.display = 'block';
        this.$formButtons.style.display = 'block';
    }
    closeForm() {
        console.log('form close works!');
        this.$form.classList.remove('form-open');
        this.$noteTitle.style.display = 'none';
        this.$formButtons.style.display = 'none';
    }
}

new App();
// TODO: 1. complete the javascript code to make the app work