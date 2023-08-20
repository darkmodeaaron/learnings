const todos = document.querySelector('.todos')



const addBtn = document.querySelector('.addBtn')
const titleInput = document.getElementById('titleInput')


function Todo(taskTitle) {
    this.taskTitle = taskTitle
    this.createTodo = function () {
        const box = document.createElement('div')
        box.classList.add('box')
        todos.appendChild(box)

        const boxHeader = document.createElement('div')
        boxHeader.classList.add('boxHeader')
        box.appendChild(boxHeader)

        const boxTitle = document.createElement('h4')
        boxTitle.classList.add('boxTitle')
        boxTitle.innerText = this.taskTitle
        boxHeader.appendChild(boxTitle)

        const headerFlex = document.createElement('div')
        headerFlex.classList.add('headerFlex')
        boxHeader.appendChild(headerFlex)

        const check = document.createElement('div')
        check.classList.add('check')
        headerFlex.appendChild(check)

        const checkcircle = document.createElement('div')
        checkcircle.classList.add('circle')
        checkcircle.style.backgroundColor = 'red'
        check.appendChild(checkcircle)

        const delBtn = document.createElement('div')
        delBtn.classList.add('delBtn')
        headerFlex.appendChild(delBtn)

        delBtn.addEventListener('click', () => {
            todos.removeChild(box)
            localStorage.removeItem(taskTitle)
        })

        check.addEventListener('click', () => {
            checkcircle.classList.toggle('active')
            if (checkcircle.style.backgroundColor == 'red') {
                checkcircle.style.backgroundColor = 'greenyellow'
            } else {
                checkcircle.style.backgroundColor = 'red'
            }
        })
    }
}

let change = 1

addBtn.addEventListener('click', () => {

    const titleValue = document.getElementById('titleInput').value
    localStorage.setItem(`${titleValue}`, titleValue)

    const newTodo = new Todo(localStorage.getItem(`${titleValue}`))


    newTodo.createTodo()
    titleInput.value = ''

    change += 1

})

function getLocalStorage() {


    for (let i = 0; i < localStorage.length; i++) {

        const storageTask = new Todo(localStorage.key(i))
        storageTask.createTodo()

        console.log(localStorage.key(i))

      }

}

getLocalStorage()