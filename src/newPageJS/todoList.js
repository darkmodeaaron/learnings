const todos = document.querySelector('.todos')



const addBtn = document.querySelector('.addBtn')
const input = document.getElementById('input')

function Todo(task) {
    this.task = task
    this.createTodo = function () {
        const box = document.createElement('div')
        box.classList.add('box')
        todos.appendChild(box)

        const boxText = document.createElement('h4')
        boxText.innerText = this.task
        box.appendChild(boxText)

        const delBtn = document.createElement('div')
        delBtn.classList.add('delBtn')
        box.appendChild(delBtn)

        delBtn.addEventListener('click', () => {
            todos.removeChild(box)
            localStorage.removeItem(task)
        })

    }
}

let change = 1

addBtn.addEventListener('click', () => {

    const inputValue = document.getElementById('input').value
    localStorage.setItem(`${inputValue}`, inputValue)
    const newTodo = new Todo(localStorage.getItem(`${inputValue}`))
    newTodo.createTodo()
    input.value = ''
    change += 1

})




function getLocalStorage() {


    for (let i = 0; i < localStorage.length; i++) {

        const storageTask = new Todo(localStorage.key(i))
        storageTask.createTodo()

        console.log(localStorage.key(i))

      }

}
