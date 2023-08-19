const todos = document.querySelector('.todos')

const addBtn = document.querySelector('.addBtn')
const input = document.getElementById('input')



function Todo(task) {
    this.task = task
    this.createTodo = function () {
        const box = document.createElement('div')
        box.classList.add('box')
        box.innerText = this.task
        todos.appendChild(box)
    }
}

addBtn.addEventListener('click', () => {
    const inputValue = document.getElementById('input').value
    const newTodo = new Todo(inputValue)
    newTodo.createTodo()
    input.value = ''
})
