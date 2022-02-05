const refs = {
    decrementEl: document.querySelector('[data-action="decrement"]'),
    incrementEl: document.querySelector('[data-action="increment"]'),
    valueEl: document.querySelector('#value'),
};

let counterValue = 0;

refs.decrementEl.addEventListener('click', onDecrementClick);
refs.incrementEl.addEventListener('click', onIncrementClick);

function onDecrementClick() {
    counterValue -= 1;
    refs.valueEl.textContent = counterValue;

};

function onIncrementClick() {
    counterValue += 1;
refs.valueEl.textContent = counterValue;

};







