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

function Task(taskTabDate, taskTabTitle, taskViewLink, taskDescription, status) {

    this.taskTabDate = taskTabDate
    this.taskTabTitle = taskTabTitle
    this.taskViewLink = taskViewLink
    this.taskDescription = taskDescription
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

        const taskDescription = document.createElement('p')
        taskDescription.classList.add('taskDescription')
        taskDescription.innerText = this.taskDescription
        taskView.appendChild(taskDescription)

        const taskLink = document.createElement('a')
        taskLink.classList.add('taskLink')
        taskLink.innerText = this.taskViewLink
        taskLink.href = this.taskViewLink
        taskView.appendChild(taskLink)

        return taskView

    }
    
    this.appendTask = function(tab, view) {
        tabs.prepend(tab)
        views.appendChild(view)
    }

}

export function Blog(tabType, tabDate, tabTitle, blogPost, blogLink) {

    this.tabType = tabType
    this.tabDate = tabDate
    this.tabTitle = tabTitle
    this.blogPost = blogPost
    this.blogLink = blogLink

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

        const blogLink = document.createElement('a');
        blogLink.classList.add('learningPost')
        blogLink.innerText = this.blogLink
        blogLink.href = this.blogLink
        blogView.appendChild(blogLink)

        if (blogLink.innerText == 'none') {
            blogLink.style.display = 'none'
        }
        

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
        pinnedImg.src = '/src/images/pinned.png'
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
        pinnedImg.src = '/src/images/pinned.png'
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

// POST IMPORTS

import { blogPost201023 } from './blogs/blogPost201023';
import { todoTask } from './tasks/todoList';


const reactOnePost = "due to the sheer number of times its requested on job applications, today i started to learn react. understanding libraries and frameworks seems like a big step forward in terms of learning web development so i’m excited and eager to get into it. \n\n main takeaways\n. setting up a react environment using vite. \n. introduction to react components, what they are and why they are beneficial to developers.\n. how to create and import new components into main.jsx.\n. what jsx is and the differences to html.\n\nfrom my limited knowledge of react, i like the idea around separating code into components to keep it as clean and readable as possible. i feel like i already attempt to do this when i write css. usually i create scss files for the header section of a website and another for the main etc etc. i find this helps when navigating files.\n\nmore of a deep dive into jsx next i think.\n\nthanks for reading,\naaron"
const reactOne = new Blog ('learning', '01.10.23', 'react intro', reactOnePost, 'none')
reactOne.appendBlog(reactOne.createBlogTab(), reactOne.createBlogView())

const reactTwoPost = "i’ve continued to learn react. i’ve started to recreate past projects utilising react to do this. \n\n when writing react components one of the things i spend most to planning is what should be included in a single react component. let me try to explain this further in an example I’ve written. \n\n when creating the header section of a website, a simple set up would maybe be a website logo and a nav section. within the nav section there would be x about of list items. one question i have been asking myself is should this all be made under one component or separate this into multiple components to be housed be an overarching header component. \n\n i will link to a extremely simple header section i have quickly made. \n\n thanks for reading \n aaron"
const reactTwo = new Blog ('learning', '03.10.23', 'creating a simple header with react', reactTwoPost, 'https://learning031023.aaronroberts.dev/')
reactTwo.appendBlog(reactTwo.createBlogTab(), reactTwo.createBlogView())

const reactThreePost = "over the past couple days i feel like i’ve made some pretty good steps forward with react. i set out to create a simple header section of a website a give it some minor functionality in a dropdown menu. \n\nthis led me to dive more into usestate hooks and passing functionality and variables between components using props.\n\ntook me some time but got there in the end. will work on making it responsive with a mobile view next.\n\nthanks for reading,\naaron"
const reactThree = new Blog ('learning', '05.10.23', 'creating a simple header with dropdown menu functionality with react', reactThreePost, 'https://learning051023.aaronroberts.dev/')
reactThree.appendBlog(reactThree.createBlogTab(), reactThree.createBlogView())

blogPost201023.appendBlog(blogPost201023.createBlogTab(), blogPost201023.createBlogView())
todoTask.appendTask(todoTask.createTaskTab(), todoTask.createTaskView())


//

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
