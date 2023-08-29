import { tabs } from "../.."
import { views } from "../.."
import { createViewNoteTitle } from "../.."
import { createViewNoteImage } from "../.."
import { createViewCodeTitle } from "../.."
import { createViewCodeLog } from "../.."
import { createCommitMade } from "../.."

const oopPrinciplesTab = document.createElement('div')
oopPrinciplesTab.classList.add('oopPrinciplesTab')

export const oopPrinciplesLink = document.createElement('h4')

function createOopPrinciplesTabUI() {

    const oopPrinciplesPost = document.createElement('div')
    oopPrinciplesPost.classList.add('post', 'oopPrinciplesPost')
    oopPrinciplesTab.appendChild(oopPrinciplesPost)

    const oopPrinciplesDate = document.createElement('h4')
    oopPrinciplesDate.classList.add('date')
    oopPrinciplesDate.innerText = '10.08.23'
    oopPrinciplesPost.appendChild(oopPrinciplesDate)

    oopPrinciplesLink.classList.add('link')
    oopPrinciplesLink.innerText = 'oop principles'
    oopPrinciplesPost.appendChild(oopPrinciplesLink)

}

function appendOopPrinciplesTab() {
    createOopPrinciplesTabUI()
    tabs.appendChild(oopPrinciplesTab)
}

export const oopPrinciplesView = document.createElement('div')
oopPrinciplesView.classList.add('oopPrinciplesView')
oopPrinciplesView.setAttribute('view-visible', 'false')
export let oopPrinciplesViewVisible = oopPrinciplesView.getAttribute('view-visible')
oopPrinciplesView.style.display = 'none'

function createOopPrinciplesView() {

    const oopPrinciplesHeader = document.createElement('div')
    oopPrinciplesHeader.classList.add('oopPrinciplesHead', 'post')
    oopPrinciplesView.prepend(oopPrinciplesHeader)
    
    const oopPrinciplesHeaderDate = document.createElement('h4')
    oopPrinciplesHeaderDate.classList.add('date')
    oopPrinciplesHeaderDate.innerText = '10.08.23'
    oopPrinciplesHeader.appendChild(oopPrinciplesHeaderDate)

    const oopPrinciplesHeaderTitle = document.createElement('h4')
    oopPrinciplesHeaderTitle.classList.add('title')
    oopPrinciplesHeaderTitle.innerText = 'oop principles'
    oopPrinciplesHeader.appendChild(oopPrinciplesHeaderTitle)

}

function createOopPrinciplesNotes() {
    createViewNoteTitle(oopPrinciplesView)
    createViewNoteImage('/src/noteImages/oopPrinciplesNotes.png', oopPrinciplesView)
}

let oopPrinciplesLog = 'today i learnt over \'object orientated programming\'. i went on to refactor the code on this project. previously there was one function each that would create the elements for  a \'tab\' and a \'view\' and then append them to the correct elements. now there are separate function to do these two jobs, one creates the elements of the new view and tab, the other appends them.'

const oopPrinciplesCommitDate = '10.08.23'

function appendOopPrinciplesView() {
    // always this order to stack correctly
    createOopPrinciplesNotes()
    createOopPrinciplesView()
    createViewCodeTitle(oopPrinciplesView)
    createViewCodeLog(oopPrinciplesLog, oopPrinciplesView)
    createCommitMade(oopPrinciplesCommitDate, oopPrinciplesView)
    views.appendChild(oopPrinciplesView)
}

export {appendOopPrinciplesTab}
export {appendOopPrinciplesView}