const refs = {
    decrementEl: document.querySelector('[data-action="decrement"]'),
    incrementEl: document.querySelector('[data-action="increment"]'),
    valueEl: document.querySelector('#value'),
};

let counterValue = 0;

refs.decrementEl.addEventListener('click', onDecrement);
refs.incrementEl.addEventListener('click', onIncrement);

function onDecrement() {
    counterValue -= 1;
    refs.valueEl.textContent = counterValue;

};

function onIncrement() {
    counterValue += 1;
refs.valueEl.textContent = counterValue;

};







