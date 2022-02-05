
const refs = {
    inputEl: document.querySelector('#name-input'),
    nameEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', onInputChange);



function onInputChange(event) {
    refs.nameEl.textContent = event.currentTarget.value;

    if (refs.nameEl.textContent === "") {
        refs.nameEl.textContent = "Anonymous";
    }
 };
