const button = document.querySelector('#submit');
const toDoList = document.querySelector('#todo-list');
const toDoNr = document.querySelector('.todo-nr b');

const items = toDoList.children;


button.addEventListener("click", function(){
    const newItem = document.createElement('li');
    newItem.classList.add("item");
    newItem.innerText = `Item ${items.length + 1}`
    toDoList.appendChild(newItem);
    toDoNr.innerText = items.length;
})