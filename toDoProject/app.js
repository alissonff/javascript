//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions

function addTodo(event){
    if(todoInput.value === ''){
        alert("Todo empty, try again");
        todoInput.value = ''
    } else{
        //Prevent form from submitting
    event.preventDefault();
    
    //create Todo DIV
    const todoDiv = document.createElement('div');
    //assign a class to it
    todoDiv.classList.add('todo');

    //creating LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
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
    
    //clear todo input value
    todoInput.value = "";
    }
}

//delete and check function

function deleteCheck(e){
    const item = e.target;
    if(item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        //animation 
        todo.classList.add('fall'); 
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });      
        
    }

    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = "flex";
                } else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = "flex";
                } else{
                    todo.style.display = "none";
                }
                break;               
        }
    });
}