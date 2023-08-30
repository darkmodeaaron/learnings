import './scss/main.scss';

import { appendOopPrinciplesTab } from './tabs/learnings/oop-principles';
import { appendOopPrinciplesView } from './tabs/learnings/oop-principles';
import { oopPrinciplesLink } from './tabs/learnings/oop-principles';
import { oopPrinciplesView } from './tabs/learnings/oop-principles';
import { oopPrinciplesViewVisible } from './tabs/learnings/oop-principles';

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

        const tabType = document.createElement('h4')
        tabType.classList.add('tabType')
        tabType.innerText = 'learnings'
        lessonTab.appendChild(tabType)

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

function Learning(tabDate, tabTitle, learningPost ,noteImg, psuedoImg, codeActUrl, references) {

    this.tabDate = tabDate
    this.tabTitle = tabTitle
    this.learningPost = learningPost
    this.noteImage = noteImg
    this.psuedoImg = psuedoImg
    this.codeActUrl = codeActUrl
    this.references = references

    const learningTab = document.createElement('div')
    learningTab.classList.add('tab')
    const learningView = document.createElement('div')
    learningView.classList.add('taskView')
    learningView.style.display = 'none'



    learningTab.addEventListener('click', (e) => {
       
        if (e.target.classList.contains('tabTitle')) {
            learningView.style.display = 'block'
            visible = 'true'
            returnBtnVisible()
            tabs.style.display = 'none'
        }

    })

    this.createLearningTab = function() {

        const tabType = document.createElement('h4')
        tabType.classList.add('tabType')
        tabType.innerText = 'learning'
        learningTab.appendChild(tabType)
        
        const learningTabDate = document.createElement('h4')
        learningTabDate.classList.add("tabDate")
        learningTabDate.innerText = this.tabDate
        learningTab.appendChild(learningTabDate)

        const learningTabTitle = document.createElement('h4')
        learningTabTitle.classList.add("tabTitle")
        learningTabTitle.innerText = this.tabTitle
        learningTab.appendChild(learningTabTitle)

        return learningTab

    }

    this.createLearningView = function() {

        const learningViewHeader = document.createElement('div')
        learningViewHeader.classList.add('lessonViewHeader', 'tab')
        learningView.appendChild(learningViewHeader)

        const learningViewHeaderDate = document.createElement('h4')
        learningViewHeaderDate.classList.add('exampleViewHeaderDate')
        learningViewHeaderDate.innerText = this.tabDate
        learningViewHeader.appendChild(learningViewHeaderDate)

        const learningViewHeaderTitle = document.createElement('h4')
        learningViewHeaderTitle.classList.add('lessonViewHeaderTitle')
        learningViewHeaderTitle.innerText = this.tabTitle
        learningViewHeader.appendChild(learningViewHeaderTitle)

        const learningPost = document.createElement('h4');
        learningPost.classList.add('learningPost')
        learningPost.innerText = this.learningPost
        learningView.appendChild(learningPost)

        const notesTitle = document.createElement('h4')
        notesTitle.classList.add('noteTitle')
        notesTitle.innerText = 'notes'
        learningView.appendChild(notesTitle)

        const noteImg = document.createElement('img')
        noteImg.classList.add('noteImage')
        noteImg.src = this.noteImage
        learningView.appendChild(noteImg)

        const psuedoTitle = document.createElement('h4')
        psuedoTitle.classList.add('noteTitle')
        psuedoTitle.innerText = 'psuedo'
        learningView.appendChild(psuedoTitle)

        const psuedoImg = document.createElement('img')
        psuedoImg.classList.add('noteImage')
        psuedoImg.src = this.psuedoImg
        learningView.appendChild(psuedoImg)

        const codeActivity = document.createElement('a')
        codeActivity.classList.add('codeActivity')
        codeActivity.innerText = 'code activity'
        codeActivity.href = this.codeActUrl
        codeActivity.target = '_blank'
        learningView.appendChild(codeActivity)

        const resourcesTitle = document.createElement('h4')
        resourcesTitle.classList.add('resourcesTitle')
        resourcesTitle.innerText = 'resources'
        learningView.appendChild(resourcesTitle)

        const referencesDiv = document.createElement('div')
        referencesDiv.classList.add('referencesDiv')
        learningView.appendChild(referencesDiv)


        for (let reference of this.references) {
            
            let referenceNode = document.createElement('a')
            referenceNode.classList.add('referenceNode')
            referenceNode.innerText = reference
            referenceNode.href = reference
            referenceNode.target = '_blank'
            referencesDiv.appendChild(referenceNode)

        }

        return learningView

    }

    this.appendLearning = function(tab, view) {
        tabs.prepend(tab)
        views.appendChild(view)
    }

}

import { prototypesAndInheritance } from './tabs/learnings/prototypesAndInheritance.js';
prototypesAndInheritance.appendLesson(prototypesAndInheritance.createLessonTab(), prototypesAndInheritance.createLessonView());

import { todoListTask } from './tabs/tasks/todoList/todoListTask';
todoListTask.appendTask(todoListTask.createTaskTab(), todoListTask.createTaskView());

import { asynchronousJsCallbacks } from './tabs/learnings/asynchronousJsCallbacks/asynchronousJsCallbacksLearning';
asynchronousJsCallbacks.appendLearning(asynchronousJsCallbacks.createLearningTab(), asynchronousJsCallbacks.createLearningView())

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
export {Learning}






