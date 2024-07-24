const modeBtn = document.querySelectorAll('.mode-svg')
const htmlSkill = document.querySelector('.html-skill')
const cssSkill = document.querySelector('.css-skill')
const sassSkill = document.querySelector('.sass-skill')
const jsSkill = document.querySelector('.js-skill')
const reactSkill = document.querySelector('.react-skill')

const figma = document.querySelectorAll('.figma-icon')

const mode = document.querySelector('.mode-fill')

const exitCardBtn = document.querySelectorAll('.exit-wrapper')

const exitBtn = document.querySelectorAll('.exitBtn')

modeBtn.forEach(btn => {
    btn.addEventListener('click', () => {

        document.body.classList.toggle('darkmode')
        
        mode.classList.toggle('active')
    
    })
})

//

const content = document.querySelector('#content')
const main = document.querySelector('#main')
const header = document.querySelector('#header')
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

function Blog(tabType, tabDate, tabTitle, blogPost, blogLink) {

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

        const pinnedImg = document.createElement('img')
        pinnedImg.classList.add('tabPin')
        pinnedImg.src = '/images/pinned.png'
        pinnedImg.style.height = '12px'
        blogTab.appendChild(pinnedImg)

        const blogTabTitle = document.createElement('h4')
        blogTabTitle.classList.add("welcomeTitle")
        blogTabTitle.innerText = this.tabTitle
        blogTab.appendChild(blogTabTitle)

        modeBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                
                if (document.body.classList.contains('darkmode')) {
                    pinnedImg.src = '/images/pinnedDark.png'
                } else {
                    pinnedImg.src = '/images/pinned.png'
                }
            
            })
        })
        


        return blogTab

    }

    this.createWelcomeView = function() {

        const blogViewHeader = document.createElement('div')
        blogViewHeader.classList.add('lessonViewHeader', 'tab')
        blogView.appendChild(blogViewHeader)

        const pinnedImg = document.createElement('img')
        pinnedImg.src = '/images/pinned.png'
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
                    pinnedImg.src = '/images/pinnedDark.png'
                } else {
                    pinnedImg.src = '/images/pinned.png'
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

// POST IMPORTS




const reactOnePost = "due to the sheer number of times its requested on job applications, today i started to learn react. understanding libraries and frameworks seems like a big step forward in terms of learning web development so i’m excited and eager to get into it. \n\n main takeaways\n. setting up a react environment using vite. \n. introduction to react components, what they are and why they are beneficial to developers.\n. how to create and import new components into main.jsx.\n. what jsx is and the differences to html.\n\nfrom my limited knowledge of react, i like the idea around separating code into components to keep it as clean and readable as possible. i feel like i already attempt to do this when i write css. usually i create scss files for the header section of a website and another for the main etc etc. i find this helps when navigating files.\n\nmore of a deep dive into jsx next i think.\n\nthanks for reading,\naaron"
const reactOne = new Blog ('learning', '01.10.23', 'react intro', reactOnePost, 'none')
reactOne.appendBlog(reactOne.createBlogTab(), reactOne.createBlogView())

const reactTwoPost = "i’ve continued to learn react. i’ve started to recreate past projects utilising react to do this. \n\n when writing react components one of the things i spend most to planning is what should be included in a single react component. let me try to explain this further in an example I’ve written. \n\n when creating the header section of a website, a simple set up would maybe be a website logo and a nav section. within the nav section there would be x about of list items. one question i have been asking myself is should this all be made under one component or separate this into multiple components to be housed be an overarching header component. \n\n i will link to a extremely simple header section i have quickly made. \n\n thanks for reading \n aaron"
const reactTwo = new Blog ('learning', '03.10.23', 'creating a simple header with react', reactTwoPost, 'https://learning031023.aaronroberts.dev/')
reactTwo.appendBlog(reactTwo.createBlogTab(), reactTwo.createBlogView())

const reactThreePost = "over the past couple days i feel like i’ve made some pretty good steps forward with react. i set out to create a simple header section of a website a give it some minor functionality in a dropdown menu. \n\nthis led me to dive more into usestate hooks and passing functionality and variables between components using props.\n\ntook me some time but got there in the end. will work on making it responsive with a mobile view next.\n\nthanks for reading,\naaron"
const reactThree = new Blog ('learning', '05.10.23', 'creating a simple header with dropdown menu functionality with react', reactThreePost, 'https://learning051023.aaronroberts.dev/')
reactThree.appendBlog(reactThree.createBlogTab(), reactThree.createBlogView())

const blog = 'i’ve recently completed my first small project using react, a landing page for a clothes web-store. i wanted it to feature a few components that regularly appear on retail websites. these included a responsive nav and an image carousel.\n\n even though there is still a lot to learn i feel i understand the power of creating ui using react. the ability to create components to be reused can simplify building parts of a website.\n\n the design was heavily based of the nudiejeans.com website. this website also featured a ui component that would quickly allow users to view what models in the product images were wearing. i thought this would be a fun component to recreate. i felt whilst making this i was able to fully see the capabilities of react with components having there own independent states. \n\n thanks for reading,\n aaron'

const blogPost201023 = new Blog('blog', '20.10.23', 'learning react and projects...', blog, 'https://aclothesstore.aaronroberts.dev/')

blogPost201023.appendBlog(blogPost201023.createBlogTab(), blogPost201023.createBlogView())

const todoTaskDescription = 'after working with react for the past couple weeks i felt i lost all my capabilities with vanilla js so i quickly create this todo list app to reinstate some confidence. served with local storage.'

const todoTask = new Task('25.10.23', 'simple todo list', 'https://todolist.aaronroberts.dev/', todoTaskDescription, 'complete')

todoTask.appendTask(todoTask.createTaskTab(), todoTask.createTaskView())

//

const welcomePost = "hi there, \n\n welcome to my learnings repository! \n\n this is a place where i can show what i've been learning, what i've been creating and some thoughts of mine throughout my journey. please have a look around to see the programming side of me." 
const welcome = new Welcome('Welcome', welcomePost)
welcome.appendWelcome(welcome.createWelcomeTab(), welcome.createWelcomeView())

const lessonViews = document.querySelectorAll('.lessonView')
const taskViews = document.querySelectorAll('.taskView')

returnBtn.addEventListener('click', () => {
    visible = 'false'
    tabs.style.display = 'block'
    console.log('hi')

    lessonViews.forEach(lesson => {
        lesson.style.display = 'none'
    })
    taskViews.forEach(view => {
        view.style.display = 'none'
    })
    returnBtnVisible()
})


