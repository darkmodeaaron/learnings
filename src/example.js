import { tabs } from "."
import { views } from "."

const exampleTab = document.createElement('div')
exampleTab.classList.add('exampleTab')

export const exampleLink = document.createElement('h4')

function appendExampleTab() {
    
    tabs.appendChild(exampleTab)

    const examplePost = document.createElement('div')
    examplePost.classList.add('post', 'examplePost')
    exampleTab.appendChild(examplePost)

    const exampleDate = document.createElement('h4')
    exampleDate.classList.add('date')
    exampleDate.innerText = '00.00.00'
    examplePost.appendChild(exampleDate)

    
    exampleLink.classList.add('link')
    exampleLink.innerText = 'example'
    examplePost.appendChild(exampleLink)

}

export const exampleView = document.createElement('div')
exampleView.classList.add('exampleView')
exampleView.setAttribute('view-visible', 'false')
export let exampleViewVisible = exampleView.getAttribute('view-visible')
exampleView.style.display = 'none'

function appendExampleView() {

    views.appendChild(exampleView)

    const bst = document.createElement('h1')
    bst.innerText = 'example'
    exampleView.appendChild(bst)
    
}

export {appendExampleTab}
export {appendExampleView}