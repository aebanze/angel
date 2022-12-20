const cabecalho = document.querySelector("header");
window.addEventListener("scroll", function() {
    cabecalho.classList.toggle ("sticky", window.scrollY > 25);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}