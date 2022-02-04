
const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);


itemEl.forEach(title => {
    
    console.log(`Category: ${title.firstElementChild.textContent}`);
    console.log(`Elements: ${title.lastElementChild.children.length}`);
});

