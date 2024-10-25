const navLinks = document.querySelector(".nav-links");
const link = document.querySelectorAll(".nav-links a");
const hamburger = document.querySelector(".hamburger");
const overLay = document.querySelector(".backdrop");
const body = document.querySelector("body");

hamburger.addEventListener('click', () =>{
    navLinks.classList.toggle('is-active');
    
    hamburger.classList.toggle('is-active');
    
    overLay.classList.toggle('is-active');

    body.classList.toggle('overlay');
});