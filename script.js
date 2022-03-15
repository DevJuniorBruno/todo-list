//seleçao de DOM!!!
const todoInput = document.querySelector('.todo-input')

const todoButton = document.querySelector('.todo-button')

const todoList = document.querySelector('.todo-list')
//Eventos de escuta
todoButton.addEventListener("click", addTodo)

//funções

function addTodo(event) {
    event.preventDefault()  
    console.log('clicou')
}