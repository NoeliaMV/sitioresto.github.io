document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.querySelector(".menu-btn");
    var menuItems = document.querySelector(".menu-items");

    menuBtn.addEventListener("click", function() {
        this.classList.toggle("active");
        menuItems.classList.toggle("active");
    });
});

function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    menuItems.classList.toggle("active");
}


window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});




let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n){
    showSlides(slideIndex += n)
}
function currentSlide(n){
    showSlides(slideIndex = n)
}
function showSlides(n){
    let i;
    let slides = document.querySelectorAll(".mySlides");
    let quadrates = document.querySelectorAll(".quadrate"); 
    if(n > slides.length) slideIndex = 1
    if(n < 1) slideIndex = slides.length
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    for(i = 0; i < quadrates.length;i++){
        quadrates[i].className = quadrates[i].className.replace("active","")
    }
    slides[slideIndex-1].style.display = "block";
    quadrates[slideIndex-1].className += " active";
}