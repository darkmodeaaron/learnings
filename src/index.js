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


appendExampleTab()
appendExampleView()

exampleLink.addEventListener('click', () => {
    tabs.style.display = 'none'
    exampleView.style.display = 'block'
    visible = 'true'
    exampleViewVisible = 'true'
    returnBtnVisible()
})
