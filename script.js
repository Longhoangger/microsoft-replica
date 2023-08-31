const btn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerBtn = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');


function menuToggle(){
    mobileMenu.classList.toggle('show');
    hamburgerBtn.classList.toggle('fa-bars');
    hamburgerBtn.classList.toggle('fa-xmark');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scroll');
}

btn.addEventListener('click',menuToggle);

