export class FormValidator {
  constructor() {

    this.eventBut = (data) => {
      if (data.value === '') {
        return true;
      }
    };

    // this.formBut2 = (value) => {
    //   return document.querySelector('.form-button').disabled = value;
    // }
    
    this.textVal = document.querySelector('.textarea');;
    this.emailVal = document.querySelector('.email-input');
    this.nameVal = document.querySelector('.name-input');
    this.formBut = document.querySelector('.form-button');
    this.emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  };

  defaultButton = () => {
    this.formBut.disabled = true;
  };

  nameValid = () => {
    if (this.nameVal.value === '') {
      this.formBut.disabled = true;
    } else if (this.eventBut(this.emailVal) === true || !this.emailTest.test(this.emailVal.value)) {
      this.formBut.disabled = true;
    } else if (this.eventBut(this.textVal) === true || this.textVal.value.length < 15) {
      this.formBut.disabled = true;
    } else {
      this.formBut.disabled = false;
    }
  };

  emailValid = () => {
    if (!this.emailTest.test(this.emailVal.value) || this.emailVal.value === '') {
      document.querySelector('.emailArea-note').classList.add('textarea-note-active');
      this.formBut.disabled = true;
    } else {
      document.querySelector('.emailArea-note').classList.remove('textarea-note-active');
      if (this.eventBut(this.textVal) === true || this.eventBut(this.nameVal) === true || this.textVal.value.length < 15) {
        this.formBut.disabled = true;
      } else {
        this.formBut.disabled = false;
      }
    }
  };

  textValid = () => {
    if (this.textVal.value.length < 15 || this.textVal.value === '') {
      document.querySelector('.textarea-note').classList.add('textarea-note-active');
      this.formBut.disabled = true;
    } else {
      document.querySelector('.textarea-note').classList.remove('textarea-note-active');
      if (this.eventBut(this.nameVal) === true) {
        this.formBut.disabled = true;
      } else {
        this.formBut.disabled = false;
      }
    }
  };
}
