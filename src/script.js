import PinImg from "./pinned.png"
import DarkPinImg from "./pinnedDark.png"

const modeBtn = document.querySelectorAll('.mode-svg')
const mode = document.querySelector('.mode-fill')

modeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.body.classList.toggle('darkmode')
        mode.classList.toggle('active')
    })
})

//


const tabs = document.querySelector('.tabs')
const views = document.querySelector('.views')

const returnBtn = document.querySelector('.returnBtn')
let visible = returnBtn.getAttribute('visible')

function returnBtnVisible() {
    if (visible === 'false') {
        returnBtn.style.display = 'none'
    } else {
        returnBtn.style.display = 'block'
    }
}

returnBtnVisible()

const cwlFeed = document.querySelector('.cwl-feed')

export function LogPost(logDate, logIntro, logTasks) {

    this.logDate = logDate
    this.logIntro = logIntro
    this.logTasks = logTasks

    const log = document.createElement('div')
    log.classList.add('log')

    const ld = document.createElement('h1')
    ld.classList.add('logDate')
    ld.innerText = this.logDate
    log.appendChild(ld)

    const intro = document.createElement('h1')
    intro.classList.add('logIntro')
    intro.innerText = this.logIntro
    log.appendChild(intro)

    const tasksFlex = document.createElement('div')
    tasksFlex.classList.add('tasksFlex')
    log.appendChild(tasksFlex)

    const tasksHeader = document.createElement('h1')
    tasksHeader.classList.add('tasksHeader')
    tasksHeader.innerText = 'Todays tasks;'
    tasksFlex.appendChild(tasksHeader)

    const tasks = document.createElement('ul')
    tasks.classList.add('tasks')
    tasksFlex.appendChild(tasks)

    for (let i = 0; i < logTasks.length; i++) {
        const task = document.createElement('li')
        task.classList.add('task')
        task.innerText = logTasks[i].task
        tasks.appendChild(task)

        if (logTasks[i].complete) {
            task.style.textDecoration = 'line-through' 
        } else {
            task.style.color = 'red'
        }
    }

    const taskSplit = document.createElement('div')
    taskSplit.classList.add('taskSplit')
    log.appendChild(taskSplit)    


    this.createLog = function() {
        cwlFeed.appendChild(log)
    }
}

export function Blog(tabDate, tabTitle, blogPost, blogLink) {

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
        blogLink.classList.add('taskLink')
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

function Welcome(tabTitle, blogPost) {

    this.tabTitle = tabTitle
    this.blogPost = blogPost

    const blogTab = document.createElement('div')
    blogTab.classList.add('tab')
    const blogView = document.createElement('div')
    blogView.classList.add('taskView')
    blogView.style.display = 'none'

    blogTab.addEventListener('click', (e) => {
       
        if (e.target.classList.contains('welcomeTitle')) {
            blogView.style.display = 'block'
            visible = 'true'
            returnBtnVisible()
            tabs.style.display = 'none'
        }

    })

    this.createWelcomeTab = function() {

        const pinnedImg = new Image()
        pinnedImg.classList.add('tabPin')
        pinnedImg.src = PinImg
        pinnedImg.style.height = '12px'
        blogTab.appendChild(pinnedImg)

        const blogTabTitle = document.createElement('h4')
        blogTabTitle.classList.add("welcomeTitle")
        blogTabTitle.innerText = this.tabTitle
        blogTab.appendChild(blogTabTitle)

        modeBtn.forEach(icon => {
            icon.addEventListener('click', () => {
                
                if (document.body.classList.contains('darkmode')) {
                    pinnedImg.src = DarkPinImg
                } else {
                    pinnedImg.src = PinImg
                }
            
            })
        })

        return blogTab

    }

    this.createWelcomeView = function() {

        const blogViewHeader = document.createElement('div')
        blogViewHeader.classList.add('lessonViewHeader', 'tab')
        blogView.appendChild(blogViewHeader)

        const pinnedImg = new Image()
        pinnedImg.src = PinImg
        pinnedImg.style.height = '12px'
        blogViewHeader.appendChild(pinnedImg)

        const blogTabTitle = document.createElement('h4')
        blogTabTitle.classList.add("welcomeTitle")
        blogTabTitle.innerText = this.tabTitle
        blogViewHeader.appendChild(blogTabTitle)

        const blogPost = document.createElement('h4');
        blogPost.classList.add('learningPost')
        blogPost.innerText = this.blogPost
        blogView.appendChild(blogPost)

        modeBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                
                if (document.body.classList.contains('darkmode')) {
                    pinnedImg.src = DarkPinImg
                } else {
                    pinnedImg.src = PinImg
                }
            
            })
        })

        return blogView

    }

    this.appendWelcome = function(tab, view) {
        tabs.prepend(tab)
        views.appendChild(view)
    }

}

// Log posts


import { log290824 } from "./logs/2024/augustLogs.js"
import { log020924 } from "./logs/2024/septemberLogs.js"
import { log030924 } from "./logs/2024/septemberLogs.js"
import { log090924 } from "./logs/2024/septemberLogs.js"
import { log100924 } from "./logs/2024/septemberLogs.js"
import { log190924 } from "./logs/2024/septemberLogs.js"
import { log230924 } from "./logs/2024/septemberLogs.js"
import { log240924 } from "./logs/2024/septemberLogs.js"
import { log260924 } from "./logs/2024/septemberLogs.js"
import { log300924 } from "./logs/2024/septemberLogs.js"

import { log021024 } from "./logs/2024/octoberLog.js"
import { log081024 } from "./logs/2024/octoberLog.js"
import { log091024 } from "./logs/2024/octoberLog.js"
import { log131024 } from "./logs/2024/octoberLog.js"
import { log171024 } from "./logs/2024/octoberLog.js"
import { log191024 } from "./logs/2024/octoberLog.js"
import { log201024 } from "./logs/2024/octoberLog.js"
import { log221024 } from "./logs/2024/octoberLog.js"
import { log241024 } from "./logs/2024/octoberLog.js"
import { log251024 } from "./logs/2024/octoberLog.js"
import { log291024 } from "./logs/2024/octoberLog.js"
import { log301024 } from "./logs/2024/octoberLog.js"

import { log011124 } from "./logs/2024/novemberLogs.js"
import { log041124 } from "./logs/2024/novemberLogs.js"

const logPosts = [log041124, log011124, log301024, log291024, log251024, log241024, log221024, log201024, log191024, log171024, log131024, log091024, log081024, log021024, log300924, log260924, log240924, log230924, log190924, log100924, log090924, log030924, log020924, log290824,]

logPosts.forEach(log => {
    log.createLog()
})

// Blog posts


import { blog040824 } from "./blog-posts/2024/040824.js"
import { blog280824 } from "./blog-posts/2024/280824.js"

const posts = [blog040824, blog280824]

posts.forEach(post => {
    post.appendBlog(post.createBlogTab(), post.createBlogView())
})

// Welcome post


const welcomePost = "Hi there, \n\n Welcome to my learnings repository! \n\n This is a place where I show what I've been learning, what I've been creating and some thoughts of mine throughout my journey. Please have a look around to see the programming side of me." 
const welcome = new Welcome('Welcome', welcomePost)
welcome.appendWelcome(welcome.createWelcomeTab(), welcome.createWelcomeView())



// Return button functionality


const taskViews = document.querySelectorAll('.taskView')

returnBtn.addEventListener('click', () => {
    
    visible = 'false'
    tabs.style.display = 'block'

    taskViews.forEach(view => {
        view.style.display = 'none'
    })
    returnBtnVisible()
})


// tab switch

const headerController = document.querySelector('.header-controller-flex')
const controllerBtns = document.querySelectorAll('.header-btn')
const bt = document.querySelector('.blog-tab')
const cwlt = document.querySelector('.cwl-tab')


cwlt.style.display = 'none'


headerController.addEventListener('click', (e) => {

    if (e.target.classList.contains('header-controller-flex')) {
        return 
    } 

    

    controllerBtns.forEach(btn => {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active')
        }
    })
    e.target.classList.add('active')
    controllerBtns.forEach(btn => {

        if (btn.classList.contains('header-blog-btn')) {
            bt.style.display = 'none'
        }
        if (btn.classList.contains('header-blog-btn') && btn.classList.contains('active')) {
            bt.style.display = 'block'
        } 

        if (btn.classList.contains('header-cwl-btn')) {
            cwlt.style.display = 'none'
        }
        if (btn.classList.contains('header-cwl-btn') && btn.classList.contains('active')) {
            cwlt.style.display = 'block'
            visible = 'false'
            tabs.style.display = 'block'
        
            taskViews.forEach(view => {
                view.style.display = 'none'
            })
            returnBtnVisible()
        } 

    })

    

})