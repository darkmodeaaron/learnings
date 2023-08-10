import './scss/main.scss';

import { appendOopPrinciplesTab } from './oop-principles';
import { appendOopPrinciplesView } from './oop-principles';
import { oopPrinciplesLink } from './oop-principles';
import { oopPrinciplesView } from './oop-principles';
import { oopPrinciplesViewVisible } from './oop-principles';

import { appendExampleTab } from './example';
import { appendExampleView } from './example';
import { exampleLink } from './example';
import { exampleView } from './example';
import { exampleViewVisible } from './example';

//

export const content = document.querySelector('#content')
export const main = document.querySelector('#main')
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

returnBtn.addEventListener('click', () => {
    visible = 'false'
    tabs.style.display = 'block'
    if (oopPrinciplesViewVisible === 'true') {
        oopPrinciplesView.style.display = 'none'
        oopPrinciplesViewVisible = 'false'
    } else if (exampleViewVisible === 'true') {
        exampleView.style.display = 'none'
        exampleViewVisible = 'false'
    }
    returnBtnVisible()
})

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

appendExampleTab()
appendExampleView()

exampleLink.addEventListener('click', () => {
    tabs.style.display = 'none'
    exampleView.style.display = 'block'
    visible = 'true'
    exampleViewVisible = 'true'
    returnBtnVisible()
})
