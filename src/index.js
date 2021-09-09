require('normalize.css/normalize.css');

import './scss/app.scss';

let burgerNav = document.querySelector('.burger-nav');
let navList = document.querySelector('.side-nav');

let burgerOpen = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.target.closest('.burger-nav').classList.toggle("open");
    navList.classList.toggle("hidden-nav");
}

let hideNavList = (event) => {
    if (event.target.className !== "side-nav") {
        navList.classList.add("hidden-nav");
        burgerNav.classList.remove("open");
    }
}

burgerNav.addEventListener('click', burgerOpen);
document.addEventListener('click', hideNavList);