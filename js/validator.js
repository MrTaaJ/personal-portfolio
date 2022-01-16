export class formValidator {
    constructor(nameVal, emailVal, textVal, formBut, eventBut){

        this.textVal = textVal;
        this.emailVal = emailVal;
        this.nameVal = nameVal;
        this.formBut = formBut;
        this.eventBut = eventBut;

    };

    
    defaultButton = ()=>{
        this.formBut(true);
    };

    nameValid = () => {
        if(this.nameVal.value === ""){
            this.formBut(true)
        }else if (this.eventBut(this.emailVal) === true) {
            this.formBut(true)
        } else if (this.eventBut(this.textVal) === true) {
            this.formBut(true)
        }else {
            this.formBut(false)
        }
    }

    emailValid = () => {
        const emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailTest.test(this.emailVal.value) || this.emailVal.value ===""){
            document.querySelector('.emailArea-note').classList.add('textarea-note-active');
        } else {
            document.querySelector('.emailArea-note').classList.remove('textarea-note-active');
            if (this.eventBut(this.textVal)===true || this.eventBut(this.nameVal)===true ){
                this.formBut(true)
            }else{
                this.formBut(false);
            };
        }
    }

    textValid = () => {
        if (this.textVal.value.length < 15 || this.textVal.value ===""){
            document.querySelector('.textarea-note').classList.add('textarea-note-active');
            this.formBut(true)
        } else {
            document.querySelector('.textarea-note').classList.remove('textarea-note-active');
            if (this.eventBut(this.nameVal)===true){
                this.formBut(true)
            }else{
                this.formBut(false);
            };
        }
    }
    
}

