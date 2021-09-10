require('normalize.css/normalize.css');

import './scss/app.scss';

const burgerNav = document.querySelector('.burger-nav');
const navList = document.querySelector('.side-nav');

function toggleBurger(event) {
    // event.preventDefault()
    burgerNav.classList.toggle('open')
    navList.classList.toggle("hidden-nav")
}

burgerNav.addEventListener('click', toggleBurger)

document.addEventListener('click', function(event) {
    const target = event.target
    const its_menu = target === burgerNav || burgerNav.contains(target)
    const its_btnMenu = target === navList
    const menu_is_active = burgerNav.classList.contains('open')

    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleBurger()
    }
})

const infoButtonsMenu = document.querySelector('.info-buttons')
const infoButtons = document.querySelectorAll('.info-button-dropdown')

function toggleInfoButton(e) {
        for (let button of infoButtons) {
            button.classList.remove('active')
        }
    e.target.closest('.info-button-dropdown').classList.add('active')
}

infoButtonsMenu.addEventListener('click', toggleInfoButton)