require('normalize.css/normalize.css');

import './scss/app.scss';
import './dropDown.js';

let formSearch = document.querySelector('.header-form')
let inputSeacrh = formSearch.querySelector('.header-search-input')
let visibleDiv = formSearch.querySelector('.seacrh-container')

formSearch.addEventListener('focus', function () {
   visibleDiv.classList.add('visible')
}, true)

document.addEventListener('click', function (event) {
   if (event.target.closest(".seacrh-container") === visibleDiv || event.target === inputSeacrh) return
   visibleDiv.classList.remove('visible')
})