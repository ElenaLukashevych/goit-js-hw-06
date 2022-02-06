function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

buttonEl.addEventListener('click', onButtonClick);



function onButtonClick() {
  let color = getRandomHexColor();
  document.body.style.backgroundColor  = color;
  colorEl.textContent = color;
};


