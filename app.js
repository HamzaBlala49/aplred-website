let navbar =document.querySelector('.mynavbar')
let linkNavbar =document.querySelectorAll('.mynavbar .links .link a')
let linkSideBar =document.querySelectorAll('.sidebar .links .link a')
let barIcon =document.querySelector('.bar-icon')
let closeIcon =document.querySelector('.close-icon')
let sideBar = document.querySelector('.sidebar')

barIcon.onclick=(_=>{
    sideBar.style.display ='flex'
})
closeIcon.onclick=(_=>{
    sideBar.style.display ='none'
})
//end navber

// start sideBar
linkSideBar.forEach(el =>{
    el.addEventListener('click', ()=>{
        sideBar.style.display ='none'
    })
})
//end sideBar