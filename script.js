const header=document.querySelector("header")
const menuBtn=document.querySelector(".menu-btn")
const navigation=document.querySelector(".navigation")
const navigationItems=document.querySelectorAll(".navigation a")
const scrollBtn=document.querySelector(".scrollToTop-btn")
const reveals=document.querySelectorAll(".reveal")

window,addEventListener("DOMContentLoaded",()=>{
    window.addEventListener("scroll",()=>{
        header.classList.toggle("sticky", window.scrollY>0)
    })
    menuBtn.addEventListener("click",()=>{
        menuBtn.classList.toggle("active")
        navigation.classList.toggle("active")
    })
    navigationItems.forEach(navItem=>{
        navItem.addEventListener("click",()=>{
            menuBtn.classList.remove("active")
            navigation.classList.remove("active")
        })
    })
    window.addEventListener("scroll",()=>{
        scrollBtn.classList.toggle("active", window.scrollY>500)
    })
    scrollBtn.addEventListener("click",()=>{
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    })
    window.addEventListener("scroll",()=>{
        for (let i = 0; i < reveals.length; i++) {
            let windowHeight=window.innerHeight;
            let revealTop=reveals[i].getBoundingClientRect().top;
            let revealPoint=50;
            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add("active")
            }
        }
        
    })
})