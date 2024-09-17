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
