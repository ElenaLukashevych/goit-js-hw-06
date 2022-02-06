function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

buttonEl.addEventListener('click', onButtonClick);



function onButtonClick() {
  document.body.style.backgroundColor  = getRandomHexColor();
  colorEl.textContent = getRandomHexColor();
};


