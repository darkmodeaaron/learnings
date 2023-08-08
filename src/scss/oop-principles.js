import { main } from ".."

const oopPrinciplesTab = document.createElement('section')
oopPrinciplesTab.classList.add('oopPrinciplesTab')

function appendOopPrinciplesTab() {
    
    main.appendChild(oopPrinciplesTab)

    const oopPrinciplesHead = document.createElement('h4')
    oopPrinciplesHead.classList.add('oopPrinciplesHead')
    oopPrinciplesTab.appendChild(oopPrinciplesHead)

    const oopPrinciplesPost = document.createElement('div')
    oopPrinciplesPost.classList.add('post', 'oopPrinciplesPost')
    main.appendChild(oopPrinciplesPost)

    const oopPrinciplesDate = document.createElement('h4')
    oopPrinciplesDate.classList.add('date')
    oopPrinciplesDate.innerText = 'example'
    oopPrinciplesPost.appendChild(oopPrinciplesDate)

    const oopPrinciplesLink = document.createElement('h4')
    oopPrinciplesLink.classList.add('link')
    oopPrinciplesLink.innerText = 'example'
    oopPrinciplesPost.appendChild(oopPrinciplesLink)

}

export {appendOopPrinciplesTab}