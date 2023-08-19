import './scss/main.scss';

import { appendOopPrinciplesTab } from './oop-principles';
import { appendOopPrinciplesView } from './oop-principles';
import { oopPrinciplesLink } from './oop-principles';
import { oopPrinciplesView } from './oop-principles';
import { oopPrinciplesViewVisible } from './oop-principles';

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

function createViewNoteTitle(view) {
    const noteTitle = document.createElement('h4')
    noteTitle.classList.add('noteTitle')
    noteTitle.innerHTML = 'notes'
    view.appendChild(noteTitle)
}

function createViewNoteImage(imageSrc, view) {
    const noteImage = document.createElement('img')
    noteImage.classList.add('noteImage')
    noteImage.src = imageSrc
    view.appendChild(noteImage)
}

function createViewCodeTitle(view) {
    const codeTitle = document.createElement('h4')
    codeTitle.classList.add('codeTitle')
    codeTitle.innerText = 'code activity'
    view.appendChild(codeTitle)
}

function createViewCodeLog(log, view) {
    const codeLog = document.createElement('h4')
    codeLog.classList.add('codeLog')
    codeLog.innerText = log
    view.appendChild(codeLog)
}

function createCommitMade(date, view) {
    const commitMade = document.createElement('h4')
    commitMade.classList.add('commitMade')
    commitMade.innerText = `commit made: ${date}`
    view.appendChild(commitMade)
}

export {createViewNoteTitle}
export {createViewNoteImage}
export {createViewCodeTitle}
export {createViewCodeLog}
export {createCommitMade}

//

appendOopPrinciplesTab()
appendOopPrinciplesView()

oopPrinciplesLink.addEventListener('click', () => {
    tabs.style.display = 'none'
    oopPrinciplesView.style.display = 'block'
    visible = 'true'
    oopPrinciplesViewVisible = 'true'
    returnBtnVisible()
})

//

function Lesson(lessonTabDate, lessonTabTitle, lessonViewDate, lessonViewTitle, noteImage, codeLog, commitMade) {

    this.lessonTabDate = lessonTabDate
    this.lessonTabTitle = lessonTabTitle
    this.lessonViewDate = lessonViewDate
    this.lessonViewTitle = lessonViewTitle
    this.noteTitle = 'notes'
    this.noteImage = noteImage
    this.codeTitle = 'code activity'
    this.codeLog = codeLog
    this.commitMade = `commit made: ${commitMade}`
    
    const lessonTab = document.createElement('div')
    lessonTab.classList.add('lessonTab', 'tab')

    lessonTab.addEventListener('click', (e) => {
       
        if (e.target.classList.contains('tabTitle')) {
            lessonView.style.display = 'block'
            visible = 'true'
            returnBtnVisible()
            tabs.style.display = 'none'
        }

    })

    this.createLessonTab = function() {

        const tabDate = document.createElement('h4')
        tabDate.classList.add('tabDate')
        tabDate.innerText = this.lessonTabDate
        lessonTab.appendChild(tabDate)

        const tabTitle = document.createElement('h4')
        tabTitle.classList.add('tabTitle')
        tabTitle.innerText = this.lessonTabTitle
        lessonTab.appendChild(tabTitle)

        return lessonTab

    }

    const lessonView = document.createElement('div')
    lessonView.classList.add('lessonView')
    lessonView.style.display = 'none'

    this.createLessonView = function() {

        const lessonViewHeader = document.createElement('div')
        lessonViewHeader.classList.add('lessonViewHeader', 'tab')
        lessonView.appendChild(lessonViewHeader)

        const lessonViewHeaderDate = document.createElement('h4')
        lessonViewHeaderDate.classList.add('exampleViewHeaderDate')
        lessonViewHeaderDate.innerText = this.lessonViewDate
        lessonViewHeader.appendChild(lessonViewHeaderDate)

        const lessonViewHeaderTitle = document.createElement('h4')
        lessonViewHeaderTitle.classList.add('lessonViewHeaderTitle')
        lessonViewHeaderTitle.innerText = this.lessonViewTitle
        lessonViewHeader.appendChild(lessonViewHeaderTitle)

        const notesTitle = document.createElement('h4')
        notesTitle.classList.add('noteTitle')
        notesTitle.innerText = this.noteTitle
        lessonView.appendChild(notesTitle)

        const noteImg = document.createElement('img')
        noteImg.classList.add('noteImage')
        noteImg.src = this.noteImage
        lessonView.appendChild(noteImg)

        const lessonCodeTitle = document.createElement('h4')
        lessonCodeTitle.classList.add('lessonCodeTitle', 'codeTitle')
        lessonCodeTitle.innerText = this.codeTitle
        lessonView.appendChild(lessonCodeTitle)

        const lessonCodeLog = document.createElement('h4')
        lessonCodeLog.classList.add('codeLog')
        lessonCodeLog.innerText = this.codeLog
        lessonView.appendChild(lessonCodeLog)

        const lessonCommitMade = document.createElement('h4')
        lessonCommitMade.classList.add('commitMade')
        lessonCommitMade.innerText = this.commitMade
        lessonView.appendChild(lessonCommitMade)

        return lessonView

    }

    this.appendLesson = function(tab, view) {
        views.appendChild(view)
        tabs.prepend(tab)
    }
}

function Task(taskTabDate, taskTabTitle, taskViewLink, linkHref) {

    this.taskTabDate = taskTabDate
    this.taskTabTitle = taskTabTitle
    this.taskViewLink = taskViewLink
    this.linkHref = linkHref
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

import { prototypesAndInheritance } from './prototypesAndInheritance';
prototypesAndInheritance.appendLesson(prototypesAndInheritance.createLessonTab(), prototypesAndInheritance.createLessonView())

import { todoListTask } from './todoListTask';
todoListTask.appendTask(todoListTask.createTaskTab(), todoListTask.createTaskView())

const lessonViews = document.querySelectorAll('.lessonView')
const taskViews = document.querySelectorAll('.taskView')

returnBtn.addEventListener('click', () => {
    visible = 'false'
    tabs.style.display = 'block'
    if (oopPrinciplesViewVisible === 'true') {
        oopPrinciplesView.style.display = 'none'
        oopPrinciplesViewVisible = 'false'
    } 
    lessonViews.forEach(lesson => {
        lesson.style.display = 'none'
    })
    taskViews.forEach(view => {
        view.style.display = 'none'
    })
    returnBtnVisible()
})

export {Lesson}
export {Task}

