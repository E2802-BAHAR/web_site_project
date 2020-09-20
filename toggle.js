const hamburger = document.getElementById("hamburger");
const navRightUl = document.getElementById("nav-right-ul");

hamburger.addEventListener('click',()=>{
    navRightUl.classList.toggle('show');
})
