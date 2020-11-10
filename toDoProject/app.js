//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listener
todoButton.addEventListener('click', addTodo);


//Functions

function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    
    //create Todo DIV
    const todoDiv = document.createElement('div');
    //assign a class to it
    todoDiv.classList.add('todo');

    //creating LI
    const newTodo = document.createElement('li');
    newTodo.innerText = 'Hello';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);

    //Append Todo List
    todoList.appendChild(todoDiv); 
}