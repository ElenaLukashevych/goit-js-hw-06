const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {

    event.preventDefault();

    const formElements = event.currentTarget;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        mail,
        password,
    }

    if (mail === "" || password === "") {
const message = "Все поля должны быть заполнены!";
alert(message);
    } else 
            console.log(formData);

    
    formEl.reset();
}

