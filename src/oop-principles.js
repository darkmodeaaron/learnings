import { tabs } from "."
import { views } from "."
import { returnBtn } from "."

const oopPrinciplesTab = document.createElement('div')
oopPrinciplesTab.classList.add('oopPrinciplesTab')

export const oopPrinciplesLink = document.createElement('h4')

function appendOopPrinciplesTab() {
    
    tabs.appendChild(oopPrinciplesTab)

    const oopPrinciplesPost = document.createElement('div')
    oopPrinciplesPost.classList.add('post', 'oopPrinciplesPost')
    oopPrinciplesTab.appendChild(oopPrinciplesPost)

    const oopPrinciplesDate = document.createElement('h4')
    oopPrinciplesDate.classList.add('date')
    oopPrinciplesDate.innerText = '09.08.23'
    oopPrinciplesPost.appendChild(oopPrinciplesDate)

    
    oopPrinciplesLink.classList.add('link')
    oopPrinciplesLink.innerText = 'oop principles'
    oopPrinciplesPost.appendChild(oopPrinciplesLink)

}

export const oopPrinciplesView = document.createElement('div')
oopPrinciplesView.classList.add('oopPrinciplesView')
oopPrinciplesView.setAttribute('view-visible', 'false')
export let oopPrinciplesViewVisible = oopPrinciplesView.getAttribute('view-visible')
oopPrinciplesView.style.display = 'none'

function appendOopPrinciplesView() {

    
    views.appendChild(oopPrinciplesView)

    const asd = document.createElement('h1')
    asd.innerText = 'oop principles'
    oopPrinciplesView.appendChild(asd)
    

}

export {appendOopPrinciplesTab}
export {appendOopPrinciplesView}