
const inputEl = document.querySelector('#validation-input');
const valid = Number(inputEl.dataset.length);



inputEl.addEventListener('blur', onInputBlur);



function onInputBlur() {

    if (valid === inputEl.value.length) {
        inputEl.classList.add('valid');
        return;
    }

        inputEl.classList.add('invalid');


};

