import './scss/main.scss';




//

export const content = document.querySelector('#content')
export const main = document.querySelector('#main')
export const header = document.querySelector('#header')
export const tabs = document.querySelector('.tabs')
export const views = document.querySelector('.views')

export const returnBtn = document.querySelector('.returnBtn')
let visible = returnBtn.getAttribute('visible')

function returnBtnVisible() {
    if (visible === 'false') {
        returnBtn.style.display = 'none'
    } else {
        returnBtn.style.display = 'block'
    }
}

returnBtnVisible()

//

function Task(taskTabDate, taskTabTitle, taskViewLink, linkHref, status) {

    this.taskTabDate = taskTabDate
    this.taskTabTitle = taskTabTitle
    this.taskViewLink = taskViewLink
    this.linkHref = linkHref
    this.status = status
    const taskTab = document.createElement('div')
    taskTab.classList.add('tab')
    const taskView = document.createElement('div')
    taskView.classList.add('taskView')
    taskView.style.display = 'none'



    taskTab.addEventListener('click', (e) => {
       
        if (e.target.classList.contains('tabTitle')) {
            taskView.style.display = 'block'
            visible = 'true'
            returnBtnVisible()
            tabs.style.display = 'none'
        }

    })

    this.createTaskTab = function() {

        const tabType = document.createElement('h4')
        tabType.classList.add('tabType')
        tabType.innerText = 'task'
        taskTab.appendChild(tabType)

        if (this.status == 'complete') {
            tabType.style.color = 'yellowgreen'
        } else {
            tabType.style.color = 'red'
        }
        
        const taskTabDate = document.createElement('h4')
        taskTabDate.classList.add("tabDate")
        taskTabDate.innerText = this.taskTabDate
        taskTab.appendChild(taskTabDate)

        const taskTabTitle = document.createElement('h4')
        taskTabTitle.classList.add("tabTitle")
        taskTabTitle.innerText = this.taskTabTitle
        taskTab.appendChild(taskTabTitle)

        return taskTab

    }

    this.createTaskView = function() {

        const taskViewHeader = document.createElement('div')
        taskViewHeader.classList.add('viewHeader', 'tab')
        taskView.appendChild(taskViewHeader)

        const taskViewHeaderDate = document.createElement('h4')
        taskViewHeaderDate.classList.add('tabDate')
        taskViewHeaderDate.innerText = this.taskTabDate
        taskViewHeader.appendChild(taskViewHeaderDate)

        const taskViewHeaderTitle = document.createElement('h4')
        taskViewHeaderTitle.classList.add('tabTitle')
        taskViewHeaderTitle.innerText = this.taskTabTitle
        taskViewHeader.appendChild(taskViewHeaderTitle)

        const taskLink = document.createElement('a')
        taskLink.classList.add('taskLink')
        taskLink.innerText = this.taskViewLink
        taskLink.href = this.linkHref
        taskView.appendChild(taskLink)

        return taskView

    }
    
    this.appendTask = function(tab, view) {
        tabs.prepend(tab)
        views.appendChild(view)
    }

}

export function Blog(tabType, tabDate, tabTitle, blogPost) {

    this.tabType = tabType
    this.tabDate = tabDate
    this.tabTitle = tabTitle
    this.blogPost = blogPost

    const blogTab = document.createElement('div')
    blogTab.classList.add('tab')
    const blogView = document.createElement('div')
    blogView.classList.add('taskView')
    blogView.style.display = 'none'

    blogTab.addEventListener('click', (e) => {
       
        if (e.target.classList.contains('tabTitle')) {
            blogView.style.display = 'block'
            visible = 'true'
            returnBtnVisible()
            tabs.style.display = 'none'
        }

    })

    this.createBlogTab = function() {

        const tabType = document.createElement('h4')
        tabType.classList.add('tabType')
        tabType.innerText = this.tabType
        blogTab.appendChild(tabType)
        
        const blogTabDate = document.createElement('h4')
        blogTabDate.classList.add("tabDate")
        blogTabDate.innerText = this.tabDate
        blogTab.appendChild(blogTabDate)

        const blogTabTitle = document.createElement('h4')
        blogTabTitle.classList.add("tabTitle")
        blogTabTitle.innerText = this.tabTitle
        blogTab.appendChild(blogTabTitle)

        return blogTab

    }

    this.createBlogView = function() {

        const blogViewHeader = document.createElement('div')
        blogViewHeader.classList.add('lessonViewHeader', 'tab')
        blogView.appendChild(blogViewHeader)

        const blogViewHeaderDate = document.createElement('h4')
        blogViewHeaderDate.classList.add('exampleViewHeaderDate')
        blogViewHeaderDate.innerText = this.tabDate
        blogViewHeader.appendChild(blogViewHeaderDate)

        const blogViewHeaderTitle = document.createElement('h4')
        blogViewHeaderTitle.classList.add('lessonViewHeaderTitle')
        blogViewHeaderTitle.innerText = this.tabTitle
        blogViewHeader.appendChild(blogViewHeaderTitle)

        const blogPost = document.createElement('h4');
        blogPost.classList.add('learningPost')
        blogPost.innerText = this.blogPost
        blogView.appendChild(blogPost)

        return blogView

    }

    this.appendBlog = function(tab, view) {
        tabs.prepend(tab)
        views.appendChild(view)
    }

}

export function Welcome(tabTitle, blogPost) {

    this.tabTitle = tabTitle
    this.blogPost = blogPost

    const blogTab = document.createElement('div')
    blogTab.classList.add('tab')
    const blogView = document.createElement('div')
    blogView.classList.add('taskView')
    blogView.style.display = 'none'

    blogTab.addEventListener('click', (e) => {
       
        if (e.target.classList.contains('tabTitle')) {
            blogView.style.display = 'block'
            visible = 'true'
            returnBtnVisible()
            tabs.style.display = 'none'
        }

    })

    this.createWelcomeTab = function() {

        const pinnedImg = document.createElement('img')
        pinnedImg.src = '/src/noteImages/pinned.png'
        pinnedImg.style.height = '12px'
        blogTab.appendChild(pinnedImg)

        const blogTabTitle = document.createElement('h4')
        blogTabTitle.classList.add("tabTitle")
        blogTabTitle.innerText = this.tabTitle
        blogTab.appendChild(blogTabTitle)

        return blogTab

    }

    this.createWelcomeView = function() {

        const blogViewHeader = document.createElement('div')
        blogViewHeader.classList.add('lessonViewHeader', 'tab')
        blogView.appendChild(blogViewHeader)

        const pinnedImg = document.createElement('img')
        pinnedImg.src = '/src/noteImages/pinned.png'
        pinnedImg.style.height = '12px'
        blogViewHeader.appendChild(pinnedImg)

        const blogTabTitle = document.createElement('h4')
        blogTabTitle.classList.add("tabTitle")
        blogTabTitle.innerText = this.tabTitle
        blogViewHeader.appendChild(blogTabTitle)

        const blogPost = document.createElement('h4');
        blogPost.classList.add('learningPost')
        blogPost.innerText = this.blogPost
        blogView.appendChild(blogPost)

        return blogView

    }

    this.appendWelcome = function(tab, view) {
        tabs.prepend(tab)
        views.appendChild(view)
    }

}



const reactOnePost = "due to the sheer number of times its requested on job applications, today i started to learn react. understanding libraries and frameworks seems like a big step forward in terms of learning web development so i’m excited and eager to get into it. \n\n main takeaways\n. setting up a react environment using vite \n. introduction to react components, what they are and why they are beneficial to developers.\n. how to create and import new components into main.jsx\n. what jsx is and the differences to html\n\nfrom my limited knowledge of react, i like the idea around separating code into components to keep it as clean and readable as possible. i feel like i already attempt to do this when i write css. usually i create scss files for the header section of a website and another for the main etc etc. i find this helps when navigating files.\n\nmore of a deep dive into jsx next i think.\n\nthanks for reading,\naaron"
const reactOne = new Blog ('learning', '01.10.23', 'react intro', reactOnePost)

reactOne.appendBlog(reactOne.createBlogTab(), reactOne.createBlogView())

const welcomePost = "hi there, \n\n welcome to my learnings repository! \n\n this is a place where i can show what i've been learning, what i've been creating and some thoughts of mine throughout my journey. please have a look around to see the programming side of me. \n\n p.s the return button is in the top right hand corner." 
const welcome = new Welcome('welcome', welcomePost)
welcome.appendWelcome(welcome.createWelcomeTab(), welcome.createWelcomeView())

const lessonViews = document.querySelectorAll('.lessonView')
const taskViews = document.querySelectorAll('.taskView')

returnBtn.addEventListener('click', () => {
    visible = 'false'
    tabs.style.display = 'block'

    lessonViews.forEach(lesson => {
        lesson.style.display = 'none'
    })
    taskViews.forEach(view => {
        view.style.display = 'none'
    })
    returnBtnVisible()
})

export {Task}
