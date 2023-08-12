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

export const returnBtn = document.querySelector('.return')
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

function Lesson(tabDate, tabTitle, viewDate, viewTitle, noteImage, codeLog, commitMade) {

    this.tabDate = tabDate
    this.tabTitle = tabTitle
    this.viewDate = viewDate
    this.viewTitle = viewTitle
    this.noteTitle = 'notes'
    this.noteImage = noteImage
    this.codeTitle = 'code activity'
    this.codeLog = codeLog
    this.commitMade = `commit made: ${commitMade}`

    const exampleTab = document.createElement('div')
    exampleTab.classList.add('exampleTab')

    exampleTab.addEventListener('click', (e) => {
       
        if (e.target.classList.contains('tabTitleX')) {
            console.log('hello')
            exampleView.style.display = 'block'
            visible = 'true'
            returnBtnVisible()
            tabs.style.display = 'none'
        }

        
        
    })

    this.createTab = function() {

        const tabDateX = document.createElement('h4')
        tabDateX.classList.add('tabDateX')
        tabDateX.innerText = this.tabDate
        exampleTab.appendChild(tabDateX)

        const tabTitleX = document.createElement('h4')
        tabTitleX.classList.add('tabTitleX')
        tabTitleX.innerText = this.tabTitle
        exampleTab.appendChild(tabTitleX)

        

        return exampleTab

    }

    const exampleView = document.createElement('div')
    exampleView.classList.add('exampleView')
    exampleView.style.display = 'none'

    this.createView = function() {

        const exampleViewHeader = document.createElement('div')
        exampleViewHeader.classList.add('exampleViewHeader')
        exampleView.appendChild(exampleViewHeader)

        const exampleViewHeaderDate = document.createElement('h4')
        exampleViewHeaderDate.classList.add('exampleViewHeaderDate')
        exampleViewHeaderDate.innerText = this.viewDate
        exampleViewHeader.appendChild(exampleViewHeaderDate)

        const exampleViewHeaderTitle = document.createElement('h4')
        exampleViewHeaderTitle.classList.add('exampleViewHeaderTitle')
        exampleViewHeaderTitle.innerText = this.viewTitle
        exampleViewHeader.appendChild(exampleViewHeaderTitle)

        return exampleView

    }

    this.appendLesson = function(tab, view) {
        views.appendChild(view)
        tabs.appendChild(tab)
    }
}

export {Lesson}

import { example } from './example';

example.appendLesson(example.createTab(), example.createView())

const selExampleView = document.querySelectorAll('.exampleView')

returnBtn.addEventListener('click', () => {
    visible = 'false'
    tabs.style.display = 'block'
    if (oopPrinciplesViewVisible === 'true') {
        oopPrinciplesView.style.display = 'none'
        oopPrinciplesViewVisible = 'false'
    } 
    selExampleView.forEach(ex => {
        ex.style.display = 'none'
    })
    returnBtnVisible()
})

