import aboutPage from "./about-page";
import homePage from "./home-page";
import menuPage from "./menu-page";
import './style.css'

const btnHome = document.getElementById('home')
const btnMenu=document.getElementById('menu')
const btnAbout=document.getElementById('about')

btnHome.addEventListener('click',()=>{
    cleanContent()
    removeClassList()
    homePage()
    btnHome.setAttribute('class','selected')
}) 
btnMenu.addEventListener('click',()=>{
    cleanContent()
    removeClassList()
    menuPage()
    btnMenu.setAttribute('class','selected')
})
btnAbout.addEventListener('click',()=>{
    cleanContent()
    removeClassList()
    aboutPage()
    btnAbout.setAttribute('class','selected')
})

homePage()

function cleanContent(){
    content.innerText=''
}

function removeClassList(){
    btnHome.classList=''
    btnMenu.classList=''
    btnAbout.classList=''
}