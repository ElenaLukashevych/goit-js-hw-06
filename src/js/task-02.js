const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('ul');

const elements = ingredients.map(element => {

  const itemEl = document.createElement('li');
  itemEl.textContent = element;
  itemEl.classList.add('item');
  ingredientsEl.append(itemEl);

});
