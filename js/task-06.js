
const inputEl = document.querySelector('#validation-input');
const valid = Number(inputEl.dataset.length);



inputEl.addEventListener('blur', onInputBlur);



function onInputBlur(event) {

    if (valid === event.currentTarget.value.length) {
              inputEl.classList.remove('invalid');

        inputEl.classList.add('valid');

    } else {
         inputEl.classList.remove('valid');

        inputEl.classList.add('invalid');
    }

  
    
};

